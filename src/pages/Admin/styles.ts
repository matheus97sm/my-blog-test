import { lighten } from 'polished';
import styled from 'styled-components';

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

export const UserButtonsContainer = styled.div`
  width: 100%;
  max-width: 300px;
  margin: 0 auto 1rem;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(2, 1fr);
`;

interface UserButtonProps {
  isSelected: boolean
}

export const UserButton = styled.button<UserButtonProps>`
  padding: 0.75rem 2rem;

  background-color: ${props => props.isSelected ? 'var(--purple)' : '#fff'};
  box-shadow: 0 0 5px rgba(0, 0, 0, .1);
  border: none;
  border-radius: .25rem;

  font-size: 1rem;

  transition: .3s background-color, .3s color;
  color: ${props => props.isSelected ? '#fff' : 'var(--purple)'};
  cursor: pointer;

  &:hover {
    color: #fff;
    background-color: ${lighten(0.1, '#9F00DB')}
  }
`;
