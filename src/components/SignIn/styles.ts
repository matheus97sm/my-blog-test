import styled from "styled-components";

interface AdminProps {
  error: boolean
}

export const Container = styled.form<AdminProps>`
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