import React from 'react';
import { FiPlus } from 'react-icons/fi';
import { render, fireEvent } from '../../../utils/testUtils';
import { PageHeader } from '.';

describe('PageHeader Component', () => {
  const action = jest.fn();
  const propsMock = {
    title: 'Teste',
    actionTitle: 'Action',
    icon: FiPlus,
    action,
  };

  it('shoul be render PageHeader Component', () => {
    const { getByText } = render(<PageHeader {...propsMock} />);

    const title = getByText('Teste');
    const button = getByText('Action');

    fireEvent.click(button);

    expect(title).toBeDefined();
    expect(action).toHaveBeenCalled();
  });
});
