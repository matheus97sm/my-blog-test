import { Container } from './styles';

import pig from '../../assets/pig.png';

export function Home() {
  return (
    <Container>
      <div>
        <img src={pig} alt="My blog" />
      </div>
    </Container>
  )
}
