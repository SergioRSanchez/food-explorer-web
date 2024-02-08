import { FiX } from "react-icons/fi";

import { Container } from './styled';

export function Ingredient({ ingredientTitle, onClickHandleRemoveIngredient }) {
  return (
    <Container>
      <p>{ingredientTitle}</p>
      <span><FiX size={14} onClick={onClickHandleRemoveIngredient} /></span>
    </Container>
  )
}