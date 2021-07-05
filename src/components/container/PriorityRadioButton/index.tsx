import React, { ComponentType, useCallback } from 'react';
import { IconBaseProps } from 'react-icons/lib';
import { PriorityTypeChecked } from '../../../types/types/priority';

import { Container } from './styles';

interface PriorityRadioButtonProps {
  title: string;
  type: PriorityTypeChecked;
  icon: ComponentType<IconBaseProps>;
  typeChecked: PriorityTypeChecked;
  handleTypeChecked(type: PriorityTypeChecked): void;
}

export const PriorityRadioButton: React.FC<PriorityRadioButtonProps> =
  props => {
    const { icon: Icon, title, type, typeChecked, handleTypeChecked } = props;

    const handleChange = useCallback(() => {
      handleTypeChecked(type);
    }, [type, handleTypeChecked]);

    return (
      <Container type={type} isChecked={typeChecked === type}>
        <input type="radio" name="priority" onChange={handleChange} />
        <div>
          <Icon />
          <span>{title}</span>
        </div>
      </Container>
    );
  };
