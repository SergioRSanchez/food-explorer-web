import { Container, Content, Order } from './styles';

import dishBig from '../../assets/dish-big.png';

export function Dish() {
  return (
    <Container>
      <img src={dishBig} alt="Imagem de um prato de comida" />

      <Content>
        <p>Salada Ravanello</p>
        <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.</p>
        <div>
          <span>alface</span>
          <span>cebola</span>
          <span>pão naan</span>
          <span>pepino</span>
          <span>rabanete</span>
          <span>tomate</span>
        </div>
      </Content>

      <Order>
        <h1>Continuar daqui</h1>
      </Order>

    </Container>
  )
}