import React from 'react';
import { render } from '../../../../utils/testUtils';
import { CardHeader } from '.';

describe('CardHeader Component', () => {
  const mockProps = {
    title: 'Teste',
  };

  it('shoul be render CardHeader Component', () => {
    const { getByText } = render(<CardHeader {...mockProps}>Teste</CardHeader>);

    const title = getByText('Teste');

    expect(title).toBeDefined();
  });
});
