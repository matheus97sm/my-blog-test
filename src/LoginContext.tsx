import { createContext, ReactNode, useEffect, useState } from 'react';

interface LoggedUserDataProps {
  token: string
  display_name: string
  email: string
  role: string
}

interface LoginProps {
  loggedUserInfo: LoggedUserDataProps
  loggedUser: boolean
  handleSetLoggedUser: (loggedUserData: LoggedUserDataProps) => void
  handleSetLogoffUser: () => void
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
    setLoggedUser(true);
    setLoggedUserInfo(loggedUserData);

    sessionStorage.setItem('signature', JSON.stringify(loggedUserData));
  }

  function handleSetLogoffUser() {
    setLoggedUser(false);
    sessionStorage.removeItem('signature');
  }

  return (
    <LoginContext.Provider value={{ loggedUserInfo, loggedUser, handleSetLoggedUser, handleSetLogoffUser }}>
      {children}
    </LoginContext.Provider>
  )
}
