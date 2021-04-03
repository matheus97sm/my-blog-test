import { FormEvent, useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FaSpinner } from 'react-icons/fa';

import { LoginContext } from '../../LoginContext';
import { tokenApi } from '../../services/api';

import { Container, UserLogin } from './styles';

export function Admin() {
  const { handleSetLoggedUser, loggedUser } = useContext(LoginContext);

  const history = useHistory();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  function handleLogin(event: FormEvent) {
    event.preventDefault();

    setLoading(true);

    tokenApi.post('/wp-json/jwt-auth/v1/token', {
      username,
      password
    })
      .then(response => {
        handleSetLoggedUser(response.data);
        history.push('/admin/create-post');
      })
      .catch(err => {
        setLoading(false);
        setError(true);
      });
  }

  useEffect(() => {
    if (!!loggedUser) {
      history.push('/admin/create-post');
    }
  });

  return (
    <Container>
      <h1>Admin area</h1>

      <UserLogin error={error} onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Your username"
          onChange={event => setUsername(event.target.value)}
        />

        <input
          type="password"
          placeholder="Your password"
          onChange={event => setPassword(event.target.value)}
        />

        <p>Username or password invalid.</p>

        <button type="submit">{loading ? <FaSpinner /> : 'Login'}</button>
      </UserLogin>
    </Container>
  )
}
