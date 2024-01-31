import { Container } from './styles';

import footerLogoMobile from '../../assets/footer-logo-mobile.png';
import footerLogoDesktop from '../../assets/footer-logo-desktop.png'

export function Footer() {
  return (
    <Container>
      <img src={footerLogoMobile} alt="logo com o escrito food explorer" />
      <span>© 2024 - Todos os direitos reservados.</span>
    </Container>
  )
}