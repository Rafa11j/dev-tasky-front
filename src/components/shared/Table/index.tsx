import React from 'react';
import { ITableHeaders } from '../../../types/interfaces/table';

import { Container } from './styles';

interface TableProps {
  headers: ITableHeaders[];
  data: unknown[];
  identify: string;
  loading?: boolean;
  selectAction(data: unknown): void;
}

export const Table: React.FC<TableProps> = props => {
  const { headers, data, identify, selectAction } = props;

  return (
    <Container>
      <table>
        <thead>
          <tr>
            {headers.map(header => (
              <th key={header.key}>{header.name}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map(item => (
            <tr key={item[identify]} onClick={() => selectAction(item)}>
              {headers.map(header =>
                header.renderColumn ? (
                  <td key={`${item[identify]}_${header.key}`}>
                    {header.renderColumn(item)}
                  </td>
                ) : (
                  <td key={`${item[identify]}_${header.key}`}>
                    {item[header.key]}
                  </td>
                ),
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
};
