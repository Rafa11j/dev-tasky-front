import React, { createContext, useContext, useState } from 'react';
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import Cookie from 'js-cookie';
import { toast } from 'react-toastify';
import { useApplication } from './application';

interface IRestContext {
  api: AxiosInstance;
}

const RestContext = createContext<IRestContext>({} as IRestContext);

export const RestProvider: React.FC = ({ children }) => {
  const { logout } = useApplication();
  const [api] = useState<AxiosInstance>(() => {
    const rest = axios.create({
      baseURL: `${process.env.NEXT_PUBLIC_API_URL}/api/v1`,
    });

    rest.interceptors.request.use((config: AxiosRequestConfig) => {
      if (config.headers.Authorization === undefined) {
        config.headers.Authorization = Cookie.get('TaskyToken');
      }

      return config;
    });

    rest.interceptors.response.use(
      response => response,
      error => {
        if (error.response !== undefined) {
          switch (error.response.status) {
            case 400:
              toast.warning(error.response.data.message);
              break;
            case 401:
              toast.warning('Falha na autenticação');
              break;
            case 403:
              toast.warning('Acesso negado');
              logout();
              break;
            case 404:
              toast.warning('Rota não encontrada');
              break;
            default:
              break;
          }
        } else {
          toast.error('Falha no servidor');
        }

        return Promise.reject(error);
      },
    );

    return rest;
  });

  return (
    <RestContext.Provider value={{ api }}>{children}</RestContext.Provider>
  );
};

export const useRest = (): IRestContext => {
  const context = useContext(RestContext);
  if (!context) {
    throw new Error('useRest must be used with in an RestProvider');
  }
  return context;
};
