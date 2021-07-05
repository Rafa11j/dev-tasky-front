import React from 'react';
import { render } from '../../../utils/testUtils';
import { Button } from './index';

describe('Button Component', () => {
  it('shoul be render Button Component', () => {
    const { getByRole } = render(<Button>Teste</Button>);

    expect(getByRole('button')).toBeDefined();
  });
});
