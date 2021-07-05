import React from 'react';
import { render } from '../../../utils/testUtils';
import { Table } from '.';

describe('Table Component', () => {
  const tableMockeProps = {
    headers: [
      {
        name: 'Nome',
        key: 'name',
      },
      {
        name: 'Celular',
        key: 'cellphone',
      },
    ],
    data: [
      {
        id: '1',
        name: 'Fulano 1',
        cellphone: '123123123',
      },
      {
        id: '2',
        name: 'Fulano 2',
        cellphone: '123123123',
      },
    ],
    identify: 'id',
  };

  it('shoul be render Table Component', () => {
    const { getByRole } = render(<Table {...tableMockeProps} />);

    const table = getByRole('table');

    expect(table).toBeDefined();
  });
});
