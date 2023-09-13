import './index.scss'
import { Container, Row,Col } from "reactstrap";

function Bio() {

    async function Popup() {
        const elemento = document.querySelector('.card-conteudo');
        if (elemento.classList.contains('classe') == false) {
            elemento.classList.add('classe');
        } else {
            elemento.classList.remove('classe');
        }
    }

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
                            <div onClick={Popup} className='card-conteudo' data-id='1'>
                                <img src="#" alt="" />
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className='card-conteudo' data-id='2'>
                                <img src="#" alt="" />
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className='card-conteudo' data-id='3'>
                                <img src="#" alt="" />
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className='card-conteudo' data-id='4'>
                                <img src="#" alt="" />
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className='card-conteudo' data-id='5'>
                                <img src="#" alt="" />
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className='card-conteudo' data-id='6'>
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