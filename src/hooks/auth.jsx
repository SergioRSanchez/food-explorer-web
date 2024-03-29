import { createContext, useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { api } from '../services/api';

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [data, setData] = useState({});
  const [idOfCreatedMeal, setIdOfCreatedMeal] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const params = useParams();

  async function signIn({ email, password }) {
    setIsLoading(true);
    try {
      const response = await api.post('/sessions', { email, password });
      const { user } = response.data;

      localStorage.setItem("@food-explorer:user", JSON.stringify(user));

      setData({ user });
      setIsLoading(false);

    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
        setIsLoading(false);
      } else {
        alert('An unexpected error occurred. Please try again later.');
        setIsLoading(false);
      }
    }
  };

  async function signOut() {
    setData({});
    localStorage.removeItem("@food-explorer:user");
    const response = await api.get('/sessions');
  };

  async function createMeal({ meal, imageFile }) {
    setIsLoading(true);
    try {
      if (meal) {
        const response = await api.post('/meals', meal);

        const idFromResponse = response.data;

        if (imageFile) {
          const fileUploadForm = new FormData();
          fileUploadForm.append('avatar', imageFile);

          const response = await api.patch(`/meals/${idFromResponse}/avatar`, fileUploadForm);
        }
      }

      alert("Meal successfully created!");
      setIsLoading(false);
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
        setIsLoading(false);
      } else {
        alert('An unexpected error occurred. Please try again later.');
        setIsLoading(false);
      }
    }
  };

  async function updateMeal({ meal, imageFile }) {
    setIsUpdating(true);
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
      setIsUpdating(false);
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
        setIsUpdating(false);
      } else {
        alert('An unexpected error occurred. Please try again later.');
        setIsUpdating(false);
      }
    }
  };

  async function deleteMeal({ meal }) {
    setIsDeleting(true);
    try {
      if (meal) {
        const response = await api.delete(`/meals/${meal.id}`);
        setIsDeleting(false);
      }
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
        setIsDeleting(false);
      } else {
        alert('An unexpected error occurred. Please try again later.');
        setIsDeleting(false);
      }
    }
  };

  useEffect(() => {
    const user = localStorage.getItem("@food-explorer:user");

    if (user) {
      setData({ user: JSON.parse(user) });
    }
  }, []);

  return (
    <AuthContext.Provider value={{
      signIn,
      signOut,
      updateMeal,
      createMeal,
      deleteMeal,
      user: data.user,
      meal: data.meal,
      isLoading,
      isUpdating,
      isDeleting
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