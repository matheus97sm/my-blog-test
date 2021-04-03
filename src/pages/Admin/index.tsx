import { FormEvent, useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

import { SignIn } from '../../components/SignIn';
import { LoginContext } from '../../LoginContext';
import { api, tokenApi } from '../../services/api';

import { Container, UserButtonsContainer, UserButton } from './styles';

const userActions = ['sign in', 'sign up'];
const customId = "custom-id-yes";

export function Admin() {
  const { handleSetLoggedUser, loggedUser } = useContext(LoginContext);

  const history = useHistory();

  const [userActualAction, setUserActualAction] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  function clearErrorMessages() {
    setErrorMessage('');
    setError(false);
  }

  function handleSignIn(event: FormEvent) {
    event.preventDefault();

    clearErrorMessages();
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
        setErrorMessage(`Username or password invalid.`);
      });
  }

  function handleSignUp(event: FormEvent) {
    event.preventDefault();

    clearErrorMessages();

    if (password !== confirmPassword) {
      setError(true);
      setErrorMessage(`Password and confirm password don't match.`);

      return;
    }

    setLoading(true);

    api.post(`users/register`, {
      username,
      email,
      password
    })
      .then(response => {
        setLoading(false);
        setUserActualAction(userActions[0]);

        return toast.error(response.data.message, {
          position: 'top-right',
          toastId: customId
        });
      })
      .catch(error => {
        setLoading(false);
        setError(true);
        setErrorMessage(error.response.data.message);
      });
  }

  function handleAction(action: string) {
    setUserActualAction(action);
  }

  useEffect(() => {
    if (!!loggedUser) {
      history.push('/admin/create-post');
    }

    setUserActualAction(userActions[0]);
  }, [history, loggedUser]);

  return (
    <Container>
      <h1>Admin area</h1>

      <UserButtonsContainer>
        {
          userActions.map(action => (
            <UserButton
              key={action}
              onClick={() => handleAction(action)}
              isSelected={userActualAction === action}
            >
              {action}
            </UserButton>
          ))
        }
      </UserButtonsContainer>

      <SignIn
        loading={loading}
        error={error}
        errorMessage={errorMessage}
        setUsername={setUsername}
        setPassword={setPassword}
        userActualAction={userActualAction}
        handleAction={userActualAction === "sign in" ? handleSignIn : handleSignUp}
        setConfirmPassword={setConfirmPassword}
        setEmail={setEmail}
      />
    </Container>
  )
}
