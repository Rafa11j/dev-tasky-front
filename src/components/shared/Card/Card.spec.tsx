import React from 'react';
import { render } from '../../../utils/testUtils';
import { Card } from '.';

describe('CardHeader Component', () => {
  it('shoul be render CardHeader Component', () => {
    const { getByText } = render(
      <Card>
        <h2>Corpo do card</h2>
      </Card>,
    );

    const cardBody = getByText('Corpo do card');

    expect(cardBody).toBeDefined();
  });
});
