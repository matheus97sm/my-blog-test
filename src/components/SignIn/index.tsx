import { FormEvent } from 'react';
import { FaSpinner } from 'react-icons/fa';

import { Container } from './styles';

interface SignInProps {
  userActualAction: string
  errorMessage: string
  handleAction: (event: FormEvent) => void
  setUsername: (event: string) => void
  setPassword: (event: string) => void
  setConfirmPassword: (event: string) => (void)
  setEmail: (event: string) => (void)
  error: boolean
  loading: boolean
}

export function SignIn({
  error,
  loading,
  userActualAction,
  handleAction,
  setUsername,
  setPassword,
  setConfirmPassword,
  setEmail,
  errorMessage
}: SignInProps) {

  return (
    <Container error={error} onSubmit={handleAction}>
      <input
        type="text"
        placeholder="Your username"
        onChange={event => setUsername(event.target.value)}
        required
      />

      {
        userActualAction === "sign up" && (
          <input
            type="email"
            placeholder="Your e-mail"
            onChange={event => setEmail(event.target.value)}
            required
          />
        )
      }

      <input
        type="password"
        placeholder="Your password"
        onChange={event => setPassword(event.target.value)}
        required
      />

      {
        userActualAction === "sign up" && (
          <input
            type="password"
            placeholder="Confirm your password"
            onChange={event => setConfirmPassword(event.target.value)}
            required
          />
        )
      }

      <p>{errorMessage}</p>

      <button type="submit">{loading ? <FaSpinner /> : 'Login'}</button>
    </Container>
  )
}
