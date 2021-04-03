import styled from 'styled-components';

export const Container = styled.section`
  width: 90%;
  max-width: 1080px;
  padding: 3rem 0;
  margin: 0 auto;

  h1 {
    margin-bottom: 2rem;
    
    color: var(--bluePurple);
    font-size: 2rem;
    text-align: center;
  }
`;

export const BlogContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  a {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: .25rem;
    
    color: var(--grey);
    text-decoration: none;

    h3 {
      color: var(--purple);
    }

    p {
      color: var(--grey);
    }
  }
`;
