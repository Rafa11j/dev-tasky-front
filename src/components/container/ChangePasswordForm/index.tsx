import { FiLock, FiSave } from 'react-icons/fi';
import { useForm } from 'react-hook-form';
import React, { useCallback, useState } from 'react';
import { toast } from 'react-toastify';
import { Container } from './styles';
import { Button } from '../../shared/Button';
import {
  IChangeUserPassword,
  ICreateUser,
} from '../../../types/interfaces/user';
import { useRest } from '../../../hooks/rest';
import { InputPassword } from '../../shared/form/InputPassword';

interface ChangePasswordFormProps {
  closeModal(): void;
}

export const ChangePasswordForm: React.FC<ChangePasswordFormProps> = ({
  closeModal,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IChangeUserPassword>();
  const { api } = useRest();
  const [loading, setLoading] = useState(false);

  const onSubmit = useCallback(
    async (data: ICreateUser) => {
      try {
        setLoading(true);

        await api.put('/users/change-password', data);
        toast.success('Senha alterada com sucesso!');
        setLoading(false);
        closeModal();
      } catch {
        setLoading(false);
      }
    },
    [api, closeModal],
  );

  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      <InputPassword
        icon={FiLock}
        placeholder="Senha atual"
        register={register('oldPassword', {
          required: true,
        })}
        error={errors.oldPassword && 'Senha atual obrigatória!'}
      />
      <InputPassword
        icon={FiLock}
        placeholder="Nova senha"
        register={register('password', {
          required: true,
        })}
        error={errors.password && 'Nova senha obrigatória!'}
      />
      <InputPassword
        icon={FiLock}
        placeholder="Confirmar senha"
        register={register('confirmPassword', {
          required: true,
        })}
        error={errors.confirmPassword && 'Confirmar senha obrigatória!'}
      />

      <Button disabled={loading}>
        <FiSave />
        Alterar
      </Button>
    </Container>
  );
};
