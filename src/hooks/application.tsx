import React, { createContext, useCallback, useContext, useState } from 'react';
import Cookie from 'js-cookie';

interface ApplicationContextState {
  isLogged: boolean;
  onLogged(): void;
  logout(): void;
}

const ApplicationContext = createContext<ApplicationContextState>(
  {} as ApplicationContextState,
);

export const ApplicationProvider: React.FC = ({ children }) => {
  const [appLogged, setAppLogged] = useState(() => {
    const token = Cookie.get('TaskyToken');

    return token !== undefined;
  });

  const onLogged = useCallback(() => {
    setAppLogged(true);
  }, []);

  const logout = useCallback(() => {
    setAppLogged(false);
  }, []);

  return (
    <ApplicationContext.Provider
      value={{ isLogged: appLogged, onLogged, logout }}
    >
      {children}
    </ApplicationContext.Provider>
  );
};

export const useApplication = (): ApplicationContextState => {
  const context = useContext(ApplicationContext);

  if (!context) {
    throw new Error(
      'useApplication must be used with in an ApplicationProvider',
    );
  }

  return context;
};
