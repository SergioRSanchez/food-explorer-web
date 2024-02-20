import { FiChevronLeft } from "react-icons/fi";

import { Container } from './styles';

export function BackButton({ to }) {
  return (
    <Container to={to}>
      <span><FiChevronLeft /></span>
      <span>voltar</span>
    </Container>
  )
}