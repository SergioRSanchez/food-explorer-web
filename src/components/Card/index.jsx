import { FiHeart, FiChevronRight, FiMinus, FiPlus } from "react-icons/fi";
import { Link } from 'react-router-dom';

import { Button } from '../Button';

import dish from '../../assets/dish.png';

import { Container } from './styles';

export function Card({ onClickHandleFavorite, color, title, description, price }) {
  return (
    <Container>
      <span><FiHeart color={color} fill={color} onClick={onClickHandleFavorite} /></span>
      <Link to="/details/1"><img src={dish} alt="Foto de um prato" /></Link>
      <Link to="/details/1"><p>{title}<p><FiChevronRight /></p></p></Link>
      <small>{description}</small>
      <p>R$ {price}</p>
      <div>
        <div>
          <span><FiMinus /></span>
          <p>01</p>
          <span><FiPlus /></span>
        </div>
        <Button title="incluir" />
      </div>
    </Container>
  )
}