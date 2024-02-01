import { FiHeart, FiChevronRight, FiMinus, FiPlus } from "react-icons/fi";

import { Button } from '../Button';

import dish from '../../assets/dish.png';

import { Container } from './styles';

export function Card({ onClickHandleFavorite, color }) {
  return (
    <Container>
      <span><FiHeart color={color} fill={color} onClick={onClickHandleFavorite} /></span>
      <img src={dish} alt="Foto de um prato" />
      <p>Salada Ravanello <p><FiChevronRight /></p></p>
      <p>R$ 49,97</p>
      <div>
        <span><FiMinus /></span>
        <p>1</p>
        <span><FiPlus /></span>
      </div>
      <Button title="incluir" />
    </Container>
  )
}