import React from 'react';
import { render } from '../../../utils/testUtils';
import { Link } from '.';

describe('Link Component', () => {
  it('shoul be render Link Component', () => {
    const { getByText } = render(<Link href="/sign-up">Criar conta</Link>);

    const link = getByText('Criar conta');

    expect(link).toBeDefined();
  });
});
