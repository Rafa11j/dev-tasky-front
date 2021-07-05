import { FiMail } from 'react-icons/fi';
import { Input } from '../../shared/form/Input';
import { Container, Title, Subtitle } from './styles';
import { Link } from '../../shared/Link';
import { Button } from '../../shared/Button';

export const ForgotPasswordForm: React.FC = () => {
  return (
    <Container>
      <Title>Recupere sua senha</Title>
      <Subtitle>
        Informe seu e-mail para que possoamos seguir com o processo de
        recuperação de senha.
      </Subtitle>

      <Input icon={FiMail} placeholder="Email" type="email" />
      <Button>Recuperar</Button>
      <Link href="/">Voltar</Link>
    </Container>
  );
};
