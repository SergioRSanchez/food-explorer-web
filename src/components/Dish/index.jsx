import { FiMinus, FiPlus } from "react-icons/fi";
import { PiReceiptLight } from "react-icons/pi";
import { useParams, useNavigate } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';
import { USER_ROLE } from '../../utils/roles';

import { Button } from '../Button';

import imagePlaceholder from '../../assets/placeholder.jpg';

import { Container, Content, Order, Quantity } from './styles';

export function Dish({ title, description, ingredientsList, price, totalPrice, quantity, increaseQuantity, decreaseQuantity, image, id }) {
  const { user } = useAuth();
  const navigate = useNavigate();

  function formatNumber() {
    if (quantity < 10) {
      const correctNumber = '0' + quantity
      return correctNumber
    } else {
      return quantity
    }
  }

  return (
    <Container>
      <img src={image} alt={`Imagem de um(a) ${title}`} />

      <section>
        <Content>
          <p>{title}</p>
          <h2>{description}</h2>
          <h3>{description}</h3>
          <div>
            {
              ingredientsList.map(ingredient => (
                <h4 key={ingredient.id}>{ingredient.name}</h4>
              ))
            }
          </div>
        </Content>

        {
          user.role === USER_ROLE.ADMIN
            ?
            <Order>
              <Button title={'Editar prato'} className='edit-button' onClick={() => navigate(`/edit/${id}`)} />
            </Order>
            :
            <Order>
              <Quantity>
                <span><FiMinus onClick={decreaseQuantity} /></span>
                <p>{formatNumber(quantity)}</p>
                <span><FiPlus onClick={increaseQuantity} /></span>
              </Quantity>

              <Button title={`pedir ∙ R$ ${totalPrice}`} icon={PiReceiptLight} />
            </Order>
        }


      </section>

    </Container>
  )
}