import styled from 'styled-components';

import background from '../../assets/background.jpg'

export const Container = styled.section`
  width: 100vw;
  height: 100vh;

  background-image: url(${background});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  div {
    width: 90%;
    height: 90%;
    margin: 0 auto;
    display: flex;
    align-items: center;

    img {
      max-width: 60%;
      max-height: 60%;
    }
  }
`;
