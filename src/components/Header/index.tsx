import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { Container } from './styles';

export function Header() {
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
          <Link to="/admin">Admin</Link>
        </nav>
      </div>
    </Container>
  )
}