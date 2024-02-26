import { FiHeart, FiChevronRight, FiMinus, FiPlus } from "react-icons/fi";
import { Link } from 'react-router-dom';

import { Button } from '../Button';

import { Container } from './styles';

export function Card({ onClickHandleFavorite, color, title, description, price, id, image }) {
  return (
    <Container>
      <span><FiHeart color={color} fill={color} onClick={onClickHandleFavorite} /></span>
      <Link to={`/details/${id}`}><img src={image} alt={`Foto de um(a) ${title}`} /></Link>
      <Link to={`/details/${id}`}><p>{title}<p><FiChevronRight /></p></p></Link>
      <small>{description}</small>
      <p>R$ {(price).toFixed(2)}</p>
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