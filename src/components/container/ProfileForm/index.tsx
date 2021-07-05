import { FiMail, FiSave, FiUser } from 'react-icons/fi';
import { useForm } from 'react-hook-form';
import { useCallback, useState } from 'react';
import { toast } from 'react-toastify';
import { FaGithub } from 'react-icons/fa';
import { Input } from '../../shared/form/Input';
import { Container } from './styles';
import { Button } from '../../shared/Button';
import { ICreateUser, IUpdateUser } from '../../../types/interfaces/user';
import { useRest } from '../../../hooks/rest';
import { useAuth } from '../../../hooks/auth';

interface ProfileFormProps {
  closeModal(): void;
}

export const ProfileForm: React.FC<ProfileFormProps> = ({ closeModal }) => {
  const { user, updateUser } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUpdateUser>({
    defaultValues: {
      name: user.name,
      email: user.email,
      github: user.github,
    },
  });
  const [loading, setLoading] = useState(false);

  const onSubmit = useCallback(
    async (data: ICreateUser) => {
      try {
        setLoading(true);

        await updateUser(data);
        toast.success('Dados atualizados com sucesso!');
        setLoading(false);
        closeModal();
      } catch {
        setLoading(false);
      }
    },
    [closeModal, updateUser],
  );

  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
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
      <Input
        icon={FaGithub}
        placeholder="Github"
        register={register('github')}
      />
      <Button disabled={loading}>
        <FiSave />
        Atualizar
      </Button>
    </Container>
  );
};
