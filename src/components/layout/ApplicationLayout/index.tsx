import React from 'react';
import { useApplication } from '../../../hooks/application';
import { AdminLayout } from '../AdminLayout';

export const ApplicationLayout: React.FC = ({ children }) => {
  const { isLogged } = useApplication();

  return isLogged ? <AdminLayout>{children}</AdminLayout> : <>{children}</>;
};
