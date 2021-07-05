import React, {
  ComponentType,
  InputHTMLAttributes,
  useCallback,
  useRef,
  useState,
} from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import { IconBaseProps } from 'react-icons';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { Container, Controller, ErrorMessage } from './styles';

interface InputPasswordProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: ComponentType<IconBaseProps>;
  register: UseFormRegisterReturn;
  error?: string;
}

export const InputPassword: React.FC<InputPasswordProps> = ({
  icon: Icon,
  register,
  error,
  ...rest
}) => {
  const [show, setShow] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const { ref, onChange, name } = register;

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!inputRef.current?.value);
  }, []);

  const handleShowPassword = useCallback(() => {
    setShow(!show);
  }, [show]);

  return (
    <Controller>
      <Container isFilled={isFilled} isFocused={isFocused} error={!!error}>
        {Icon && <Icon size={18} />}
        <input
          ref={e => {
            ref(e);
            inputRef.current = e;
          }}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          name={name}
          onChange={onChange}
          {...rest}
          type={show ? 'text' : 'password'}
        />
        {show ? (
          <FiEyeOff className="action-input" onClick={handleShowPassword} />
        ) : (
          <FiEye className="action-input" onClick={handleShowPassword} />
        )}
      </Container>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Controller>
  );
};
