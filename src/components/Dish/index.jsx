import { FiMinus, FiPlus } from "react-icons/fi";
import { PiReceiptLight } from "react-icons/pi";

import { Button } from '../Button';

import dishBig from '../../assets/dish-big.png';

import { Container, Content, Order, Quantity } from './styles';

export function Dish() {
  return (
    <Container>
      <img src={dishBig} alt="Imagem de um prato de comida" />

      <section>
        <Content>
          <p>Salada Ravanello</p>
          <h2>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.</h2>
          <h3>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial.</h3>
          <div>
            <h4>alface</h4>
            <h4>cebola</h4>
            <h4>pão naan</h4>
            <h4>pepino</h4>
            <h4>rabanete</h4>
            <h4>tomate</h4>
          </div>
        </Content>

        <Order>
          <Quantity>
            <span><FiMinus /></span>
            <p>01</p>
            <span><FiPlus /></span>
          </Quantity>

          <Button title={"pedir ∙ R$ 25,00"} icon={PiReceiptLight} />
        </Order>
      </section>

    </Container>
  )
}