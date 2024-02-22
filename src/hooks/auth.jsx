import { createContext, useContext, useEffect, useState } from 'react';

import { api } from '../services/api';

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [data, setData] = useState({});

  async function signIn({ email, password }) {
    try {
      const response = await api.post('/sessions', { email, password });
      const { user, token } = response.data;

      localStorage.setItem("@food-explorer:user", JSON.stringify(user));
      localStorage.setItem("@food-explorer:token", token);

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      setData({ user, token });

    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert('An unexpected error occurred. Please try again later.');
      }
    }
  };

  function signOut() {
    localStorage.removeItem("@food-explorer:token");
    localStorage.removeItem("@food-explorer:user");

    setData({});
  };

  async function updateMeal({ imageFile }) {
    try {
      if (imageFile) {
        const fileUploadForm = new FormData();
        fileUploadForm.append('avatar', imageFile);

        const response = await api.patch('/meals/1/avatar', fileUploadForm);
        alert("Image successfully updated!");
      }
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert('An unexpected error occurred. Please try again later.');
      }
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("@food-explorer:token");
    const user = localStorage.getItem("@food-explorer:user");

    if (token && user) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      setData({ user: JSON.parse(user), token });
    }
  }, []);

  return (
    <AuthContext.Provider value={{
      signIn,
      signOut,
      updateMeal,
      user: data.user
    }}
    >
      {children}
    </AuthContext.Provider>
  )
};

function useAuth() {
  const context = useContext(AuthContext);

  return context;
};

export { AuthProvider, useAuth };