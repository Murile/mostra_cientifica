import './index.scss'
import { Container, Row,Col } from "reactscript";

function Bio() {
    return (
        <div className='main'>
            <header>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className='wrapper-img'>
                                <img src="../../public/img/logo-mostra.png" alt="" />
                            </div>
                        </Col>
                    </Row>
                </Container>   
            </header>
        </div>
    );
}

export default Bio;