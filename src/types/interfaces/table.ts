import { ReactNode } from 'react';

export interface ITableHeaders {
  name: string;
  key: string;
  renderColumn?: (object: unknown) => ReactNode;
}
