import { useState } from 'react';
import { FiPlus } from "react-icons/fi";

import { Ingredient } from '../Ingredient';

import { Container, Button, InputContainer, Input } from './styles';

export function MultiSelectInput({ ingredients, handleRemoveIngredient, setIngredientsList }) {

  const [showInput, setShowInput] = useState(false);
  const [ingredientToAdd, setIngredientToAdd] = useState('');

  function handleAddIngredient() {
    if (!ingredientToAdd) {
      setShowInput(false)
      return
    }
    ingredients.push({ id: Math.random(), name: ingredientToAdd })

    setIngredientToAdd('')
    setShowInput(false)
  }

  function handleRemoveIngredient(id) {
    const newIngredientsList = [...ingredients]
    const filteredIngredients = newIngredientsList.filter((ingredient) => ingredient.id !== id ? ingredient : null)
    setIngredientsList(filteredIngredients)
  }

  return (
    <Container>
      {
        ingredients && ingredients.map((ingredient) => (
          <Ingredient
            ingredientTitle={ingredient.name}
            ingredientId={ingredient.id}
            key={ingredient.id}
            onClickHandleRemoveIngredient={() => handleRemoveIngredient(ingredient.id)}
          />
        ))
      }
      {
        showInput
          ?
          <InputContainer>
            <Input
              value={ingredientToAdd}
              onChange={(e) => setIngredientToAdd(e.target.value)}
              onBlur={handleAddIngredient}
              autoFocus
              type="text"
            />
            <FiPlus />
          </InputContainer>
          :
          <Button onClick={() => setShowInput(true)}>
            Adicionar
            <span><FiPlus onClick={handleAddIngredient} /></span>
          </Button>
      }
    </Container>
  )
}