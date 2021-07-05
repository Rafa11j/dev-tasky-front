import React, { createContext, useCallback, useContext, useState } from 'react';
import Cookie from 'js-cookie';
import { useApplication } from './application';
import { useRest } from './rest';
import { IUpdateUser } from '../types/interfaces/user';

interface IUserAuth {
  name: string;
  email: string;
  github?: string;
  avatar?: string;
}

export interface IAuthState {
  user: IUserAuth;
  token: string;
}

export interface ICredentials {
  email: string;
  password: string;
}

interface IAuthContext {
  user: IUserAuth;
  signIn(credentials: ICredentials): Promise<void>;
  updateUser(data: IUpdateUser): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider: React.FC = ({ children }) => {
  const { api } = useRest();
  const { logout, onLogged } = useApplication();
  const [data, setData] = useState<IAuthState>(() => {
    const user = Cookie.get('TaskyUser');
    const token = Cookie.get('TaskyToken');

    if (token && user) {
      return {
        user: JSON.parse(user),
        token,
      };
    }

    return {} as IAuthState;
  });

  const signIn = useCallback(
    async (credentials: ICredentials) => {
      const response = await api.post('/auth', credentials);

      const { token, name, email, github, avatar } = response.data;

      api.defaults.headers.Authorization = token;

      const user = {
        name,
        email,
        github,
        avatar,
      };

      Cookie.set('TaskyToken', token);
      Cookie.set('TaskyUser', JSON.stringify(user));

      setData({ token, user });
      onLogged();
    },
    [api, onLogged],
  );

  const updateUser = useCallback(
    async (data: IUpdateUser) => {
      const response = await api.put('/users', data);

      const token = Cookie.get('TaskyToken');

      const user = response.data;

      Cookie.set('TaskyUser', JSON.stringify(user));

      setData({ token, user });
    },
    [api],
  );

  const signOut = useCallback(() => {
    Cookie.remove('TaskyToken');
    Cookie.remove('TaskyUser');

    setData({} as IAuthState);
    logout();
  }, [logout]);

  return (
    <AuthContext.Provider
      value={{ user: data.user, signIn, signOut, updateUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): IAuthContext => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used with in an AuthProvider');
  }

  return context;
};
