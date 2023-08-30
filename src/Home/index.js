import './index.scss';
import { Container,Row,Col } from 'reactstrap';

function Home() {
  return (
  <Container>
    <Row className='home'>
      <Col className='bg-primary'>Hello word</Col>
    </Row>
  </Container>
  );
}

export default Home;
