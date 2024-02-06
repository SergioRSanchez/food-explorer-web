import { FiChevronLeft } from "react-icons/fi";

import { Container } from './styles';

export function BackButton() {
  return (
    <Container>
      <span><FiChevronLeft /></span>
      <span>voltar</span>
    </Container>
  )
}