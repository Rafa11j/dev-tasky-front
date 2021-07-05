import React from 'react';
import { render } from '../../../utils/testUtils';
import { Tooltip } from '.';

describe('Tooltip Component', () => {
  it('shoul be render Tooltip Component', () => {
    const { getByText } = render(<Tooltip title="Tooltip teste" />);

    const tooltip = getByText('Tooltip teste');

    expect(tooltip).toBeDefined();
  });
});
