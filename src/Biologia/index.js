import './index.scss'
import { Container, Row,Col } from "reactstrap";

function Bio() {
    return (
        <main className='main-biologia'>
            <header>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className='wrapper-img'>
                                <img src="../../img/logo-mostra.png" alt="" />
                            </div>
                        </Col>
                    </Row>
                </Container>   
            </header>
            <section id='main-content'>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className='wrapper-title'>
                                <h1>Experiências</h1>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </main>
    );
}

export default Bio;