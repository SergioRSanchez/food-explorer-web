import { FiX } from "react-icons/fi";

import { Container } from './styled';

export function Ingredient({ ingredientName, onClickHandleRemoveIngredient }) {
  return (
    <Container>
      <p>{ingredientName}</p>
      <span><FiX size={14} onClick={onClickHandleRemoveIngredient} /></span>
    </Container>
  )
}