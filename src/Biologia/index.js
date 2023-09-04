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
                            <div className='wrapper-superior'>
                                <div className='wrapper-title'>
                                    <h1>Experiências</h1>
                                </div>
                                <div className='wrapper-btn'>
                                    <a href="/"><img src="../../img/arrow-left.svg" alt=""/>Voltar</a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={3}>
                            <div className='card-conteudo'>
                                <img src="#" alt="" />
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className='card-conteudo'>
                                <img src="#" alt="" />
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className='card-conteudo'>
                                <img src="#" alt="" />
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className='card-conteudo'>
                                <img src="#" alt="" />
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className='card-conteudo'>
                                <img src="#" alt="" />
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className='card-conteudo'>
                                <img src="#" alt="" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <footer>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className='wrapper-rodape d-flex justify-content-center'>
                                <p><span>Desenvolvido por:</span> Pedro Reis, Rodrigo Anjos, Murilo Barbosa</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </main>
    );
}

export default Bio;