import styled from 'styled-components';

interface HeaderProps {
  isHome: boolean
}

export const Container = styled.header<HeaderProps>`
  position: ${props => props.isHome ? 'absolute' : 'static'};
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${props => props.isHome ? 'transparent' : 'var(--black)'};

  > div {
    width: 90%;
    max-width: 1080px;
    padding: 2rem 0;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    text-transform: lowercase;

    a {
      text-decoration: none;

      span {
        font-size: 1.4rem;
        letter-spacing: .3rem;
        color: #fff;
      }
    }

    nav {
      display: flex;
      align-items: center;
      gap: 32px;

      a {
        color: #fff;
        text-decoration: none;

        transition: color .3s;

        &:hover {
          color: ${props => props.isHome ? 'var(--pink)' : 'var(--purple)'};
        }
      }
    }
  }
`;

export const UserInfoHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  div {
    display: flex;
    flex-direction: column;
    
    strong {
      color: #fff;
    }

    span {
      color: #fff;
      font-size: .7rem;
      cursor: pointer;
    }
  }
`;
