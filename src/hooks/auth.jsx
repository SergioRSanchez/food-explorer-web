import { createContext, useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { api } from '../services/api';

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [data, setData] = useState({});

  const params = useParams();

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

  async function createMeal({ meal }) {
    try {
      if (meal) {
        const response = await api.post('/meals', meal);
      }

      alert("Meal successfully created!");
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert('An unexpected error occurred. Please try again later.');
      }
    }
  };

  async function updateMeal({ meal, imageFile }) {
    try {
      if (meal) {
        const response = await api.put(`/meals/${meal.id}`, meal);
      }

      if (imageFile) {
        const fileUploadForm = new FormData();
        fileUploadForm.append('avatar', imageFile);

        const response = await api.patch(`/meals/${meal.id}/avatar`, fileUploadForm);
      }

      alert("Meal successfully updated!");
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
      createMeal,
      user: data.user,
      meal: data.meal
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