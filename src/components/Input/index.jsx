import { Container } from './styles';

export function Input({ icon: Icon, onClickHandlePasswordType, ...rest }) {

  return (
    <Container>
      {Icon && <Icon size={20} onClick={onClickHandlePasswordType} />}
      <input {...rest} />
    </Container>
  )
}