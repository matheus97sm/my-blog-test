import styled from 'styled-components';
import { lighten } from 'polished';

export const PostForm = styled.form`
  width: 100%;
  max-width: 800px;
  padding: 3rem 0;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h2 {
    margin-bottom: 2rem;
    
    color: var(--bluePurple);
    font-size: 2rem;
    text-align: center;
  }

  textarea {
    max-width: 100%;
    min-width: 100%;
    height: 300px;
  }

  div strong {
    display: block;
    margin-bottom: .5rem;

    color: var(--purple);
  }
`;

export const StatusButtonsContainer = styled.div`
  width: 100%;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(4, 1fr);
`;

interface StatusButtonProps {
  isSelected: boolean
}

export const StatusButton = styled.button<StatusButtonProps>`
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
