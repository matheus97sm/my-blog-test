import styled from 'styled-components';

interface AdminProps {
  error: boolean
}

export const Container = styled.div`
  width: 90%;
  max-width: 1080px;
  margin: 0 auto;
  padding: 3rem 0;

  h1 {
    margin-bottom: 2rem;
    color: var(--bluePurple);
  }
`;

export const UserLogin = styled.form<AdminProps>`
  max-width: 300px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  p {
    color: var(--alert);
    font-size: .8rem;
    display: ${props => props.error ? 'block' : 'none'};
  }
`;
