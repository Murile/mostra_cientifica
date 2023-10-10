import './index.scss'
import { useState } from 'react';
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
                        <Col md={6} lg={3}>
                            <div className='card-conteudo' id='1'>
                                <img src="../../img/bio-1.jpeg" alt="" />
                                <h1>Extração de DNA</h1>
                            </div>
                        </Col>
                        <Col md={6} lg={3}>
                            <div className='card-conteudo' id='2'>
                                <img src="../../img/bio-2.jpg" alt="" />
                                <h1>Microscópio</h1>
                            </div>
                        </Col>
                        <Col md={6} lg={3}>
                            <div className='card-conteudo' id='3'>
                                <img src="../../img/bio-3.jpeg" alt="" />
                                <h1>Medição de Ph</h1>
                            </div>
                        </Col>
                        <Col md={6} lg={3}>
                            <div className='card-conteudo' id='4'>
                                <img src="../../img/bio-4.jpg" alt="" />
                                <h1>Anatomia de Peixe</h1>
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