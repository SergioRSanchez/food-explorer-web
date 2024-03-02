import { Link } from 'react-router-dom';
import { FiChevronLeft } from "react-icons/fi";

import { Container } from './styles';

export function NotFound() {
  return (
    <Container>
      <h1>Page unavailable</h1>
      <Link to='/'><FiChevronLeft /> back to home</Link>
    </Container>
  )
}