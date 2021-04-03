import { createContext, ReactNode, useEffect, useState } from 'react';

interface LoggedUserDataProps {
  token: string
  user_display_name: string
  user_email: string
}

interface LoginProps {
  loggedUserInfo: {
    token: string
    user_display_name: string
    user_email: string
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
    setLoggedUser(true);
    setLoggedUserInfo(loggedUserData);

    sessionStorage.setItem('signature', JSON.stringify(loggedUserData));
  }

  return (
    <LoginContext.Provider value={{ loggedUserInfo, loggedUser, handleSetLoggedUser }}>
      {children}
    </LoginContext.Provider>
  )
}
