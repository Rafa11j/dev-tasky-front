import {
  ComponentType,
  InputHTMLAttributes,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import { IconBaseProps } from 'react-icons/lib';
import { Container, Controller, ErrorMessage } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: ComponentType<IconBaseProps>;
  register: UseFormRegisterReturn;
  error?: string;
}

export const Input: React.FC<InputProps> = ({
  icon: Icon,
  register,
  error,
  ...rest
}) => {
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

  useEffect(() => {
    if (inputRef.current?.value) {
      setIsFilled(true);
    }
  }, []);

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
        />
      </Container>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Controller>
  );
};
