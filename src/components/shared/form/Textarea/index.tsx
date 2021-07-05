import {
  ComponentType,
  TextareaHTMLAttributes,
  useCallback,
  useRef,
  useState,
} from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import { IconBaseProps } from 'react-icons/lib';
import { Container, Controller, ErrorMessage } from './styles';

interface InputProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  icon?: ComponentType<IconBaseProps>;
  register: UseFormRegisterReturn;
  error?: string;
}

export const Textarea: React.FC<InputProps> = ({
  register,
  error,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const { ref, onChange, name } = register;

  const handleFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  return (
    <Controller>
      <Container isFocused={isFocused} error={!!error}>
        <textarea
          ref={e => {
            ref(e);
            textareaRef.current = e;
          }}
          onFocus={handleFocus}
          onBlur={handleBlur}
          name={name}
          onChange={onChange}
          rows={3}
          {...rest}
        />
      </Container>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Controller>
  );
};
