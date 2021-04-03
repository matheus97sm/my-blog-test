import { createContext, ReactNode, useEffect, useState } from 'react';
import { decode } from 'jsonwebtoken';

import { api } from './services/api';

interface LoggedUserDataProps {
  token: string
  display_name: string
  email: string
}

interface LoginProps {
  loggedUserInfo: {
    token: string
    display_name: string
    email: string
  }
  loggedUser: boolean
  handleSetLoggedUser: (loggedUserData: LoggedUserDataProps) => void
}

interface LoginProviderProps {
  children: ReactNode
}

export const LoginContext = createContext<LoginProps>({} as LoginProps);

export function LoginProvider({ children }: LoginProviderProps) {
  const [loggedUser, setLoggedUser] = useState(false);
  const [loggedUserInfo, setLoggedUserInfo] = useState<LoggedUserDataProps>(
    {} as LoggedUserDataProps
  );

  useEffect(() => {
    const signature = JSON.parse(`${sessionStorage.getItem('signature')}`);

    if (signature?.token) {
      setLoggedUser(true);

      setLoggedUserInfo(signature);
    }
  }, []);

  function handleSetLoggedUser(loggedUserData: LoggedUserDataProps) {
    const userTokenDecoded = decode(loggedUserData.token) as null | { [key: string]: any };
    const userId = userTokenDecoded?.data.user.id;

    api.get(`users/${userId}`)
      .then(response => {
        console.log(response.data)
      })

    console.log(loggedUserData);

    // setLoggedUser(true);
    // setLoggedUserInfo(loggedUserData);

    // sessionStorage.setItem('signature', JSON.stringify(loggedUserData));
  }

  return (
    <LoginContext.Provider value={{ loggedUserInfo, loggedUser, handleSetLoggedUser }}>
      {children}
    </LoginContext.Provider>
  )
}
