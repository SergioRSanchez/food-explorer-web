import { FiHeart, FiChevronRight, FiMinus, FiPlus } from "react-icons/fi";
import { PiPencilSimple } from "react-icons/pi";


import { Link, useNavigate } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';
import { USER_ROLE } from '../../utils/roles';

import { Button } from '../Button';

import { Container } from './styles';

export function Card({ onClickHandleFavorite, color, title, description, price, id, image }) {
  const { user } = useAuth();

  const navigate = useNavigate();

  return (
    <Container>
      {
        user.role === USER_ROLE.ADMIN
          ?
          <span><PiPencilSimple onClick={() => navigate(`/edit/${id}`)} size={24} /></span>
          :
          <span><FiHeart color={color} fill={color} onClick={onClickHandleFavorite} size={24} /></span>
      }
      <Link to={`/details/${id}`}><img src={image} alt={`Foto de um(a) ${title}`} /></Link>
      <Link to={`/details/${id}`}><p>{title}<p><FiChevronRight /></p></p></Link>
      <small>{description}</small>
      <p>R$ {(price).toFixed(2)}</p>
      {
        user.role === USER_ROLE.CUSTOMER &&
        <>
          <div>
            <div>
              <span><FiMinus /></span>
              <p>01</p>
              <span><FiPlus /></span>
            </div>
            <Button title="incluir" />
          </div>
        </>
      }

    </Container>
  )
}