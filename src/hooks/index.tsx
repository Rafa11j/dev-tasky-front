import React from 'react';
import { ApplicationProvider } from './application';
import { AuthProvider } from './auth';
import { RestProvider } from './rest';

const AppProvider: React.FC = ({ children }) => {
  return (
    <ApplicationProvider>
      <RestProvider>
        <AuthProvider>{children}</AuthProvider>
      </RestProvider>
    </ApplicationProvider>
  );
};

export default AppProvider;
