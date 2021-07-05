import { FiLock, FiMail } from 'react-icons/fi';
import { useForm } from 'react-hook-form';
import { useCallback, useState } from 'react';
import { useRouter } from 'next/dist/client/router';
import { Input } from '../../shared/form/Input';
import { InputPassword } from '../../shared/form/InputPassword';
import { Container, Title, CreateAccountLink, LogoContainer } from './styles';
import { Link } from '../../shared/Link';
import { Button } from '../../shared/Button';
import { ICredentials, useAuth } from '../../../hooks/auth';

export const SignInForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICredentials>();
  const { signIn } = useAuth();
  const { push } = useRouter();
  const [loading, setLoading] = useState(false);

  const onSubmit = useCallback(
    async (data: ICredentials) => {
      try {
        setLoading(true);

        await signIn(data);
        setLoading(false);
        push('/dashboard');
      } catch {
        setLoading(false);
      }
    },
    [signIn, push],
  );

  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      <Title>
        Bem vindo ao
        <span>Dev Tasky</span>
      </Title>
      <LogoContainer>
        <img src="/logo.svg" alt="Logo" />
      </LogoContainer>
      <Input
        icon={FiMail}
        placeholder="Email"
        type="email"
        register={register('email', {
          required: true,
        })}
        error={errors.email && 'Email obrigatório!'}
      />
      <InputPassword
        icon={FiLock}
        placeholder="Senha"
        register={register('password', { required: true })}
        error={errors.password && 'Senha obrigatória!'}
      />
      <Button disabled={loading}>Entrar</Button>
      <CreateAccountLink>
        Não tem conta?
        <Link href="sign-up">Faça seu cadastro</Link>
      </CreateAccountLink>
    </Container>
  );
};
