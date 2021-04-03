import { useContext, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LoginContext } from '../../LoginContext';

import { Container, UserInfoHeader } from './styles';

export function Header() {
  const { loggedUser, loggedUserInfo, handleSetLogoffUser } = useContext(LoginContext);

  const [isHome, setIsHome] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === '/')
      setIsHome(true);
    else
      setIsHome(false);
  }, [pathname])

  return (
    <Container isHome={isHome}>
      <div>
        <Link to="/">
          <span>My Blog</span>
        </Link>

        <nav>
          <Link to="/">Home</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/login">Login</Link>

          {
            !!loggedUser && (
              <UserInfoHeader>
                <div>
                  <strong>{loggedUserInfo.display_name}</strong>
                  <span onClick={handleSetLogoffUser}>Logout</span>
                </div>
              </UserInfoHeader>
            )
          }
        </nav>
      </div>
    </Container>
  )
}