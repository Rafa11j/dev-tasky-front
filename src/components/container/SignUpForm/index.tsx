import { FiLock, FiMail, FiUser } from 'react-icons/fi';
import { useForm } from 'react-hook-form';
import { useCallback, useState } from 'react';
import { toast } from 'react-toastify';
import { useRouter } from 'next/dist/client/router';
import { Input } from '../../shared/form/Input';
import { InputPassword } from '../../shared/form/InputPassword';
import { Container, Title, BackToLoginLink, LogoContainer } from './styles';
import { Link } from '../../shared/Link';
import { Button } from '../../shared/Button';
import { ICreateUser } from '../../../types/interfaces/user';
import { useRest } from '../../../hooks/rest';

export const SignUpForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICreateUser>();
  const { api } = useRest();
  const [loading, setLoading] = useState(false);
  const { push } = useRouter();

  const onSubmit = useCallback(
    async (data: ICreateUser) => {
      try {
        setLoading(true);

        await api.post('/users', data);
        toast.success('Cadastro realizado com sucesso!');
        setLoading(false);
        push('/');
      } catch {
        setLoading(false);
      }
    },
    [api, push],
  );

  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      <Title>
        Crie sua conta no
        <span>Dev Tasky</span>
      </Title>

      <LogoContainer>
        <img src="/logo.svg" alt="Logo" />
      </LogoContainer>

      <Input
        icon={FiUser}
        placeholder="Nome"
        type="text"
        register={register('name', {
          required: true,
        })}
        error={errors.name && 'Nome obrigatório!'}
      />
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
        register={register('password', {
          required: true,
        })}
        error={errors.password && 'Senha obrigatória!'}
      />
      <Button disabled={loading}>Concluir cadastro</Button>
      <BackToLoginLink>
        Já tem conta?
        <Link href="/">Faça login</Link>
      </BackToLoginLink>
    </Container>
  );
};
