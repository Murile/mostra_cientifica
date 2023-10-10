import './index.scss'
import { Container, Row,Col } from "reactstrap";

function Bio() {
    const popup = document.querySelector('#popups');

    async function Popup1() {
        const c = document.querySelector('#popup-1');
        if (c.classList.contains('#popup-1') == false) {
            c.classList.add('active');
            popup.classList.add('active');
        } else {
            c.classList.remove('active');
            popup.classList.remove('active');
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
                            <div onClick={Popup1} className='card-conteudo' id='1'>
                                <img src="#" alt="" />
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className='card-conteudo' id='2'>
                                <img src="#" alt="" />
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className='card-conteudo' id='3'>
                                <img src="#" alt="" />
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className='card-conteudo' id='4'>
                                <img src="#" alt="" />
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className='card-conteudo' id='5'>
                                <img src="#" alt="" />
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className='card-conteudo' id='6'>
                                <img src="#" alt="" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section id='popups'>
                <div id="popup-1" className='popup-content'>
                    <div onClick={Popup1} className='wrapper-close'>
                        <a href="#">
                            <img src="../../img/close.svg" alt="" />
                        </a>
                    </div>
                    <div className='wrapper-img'>
                        <img src="#" alt="" />
                    </div>
                    <div className='wrapper-descritivo'>
                        <h1>Experiência</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non curabitur gravida arcu ac tortor dignissim convallis aenean et. Ultricies leo integer malesuada nunc vel. Est ullamcorper eget nulla facilisi. Nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit. Morbi quis commodo odio aenean. Phasellus vestibulum lorem sed risus ultricies tristique.</p>
                    </div>
                </div>
                <div id="popup-2" className='popup-content'>
                    <div className='wrapper-close'>
                        <a href="#">
                            <img src="../../img/close.svg" alt="" />
                        </a>
                    </div>
                    <div className='wrapper-img'>
                        <img src="#" alt="" />
                    </div>
                    <div className='wrapper-descritivo'>
                        <h1>Experiência</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non curabitur gravida arcu ac tortor dignissim convallis aenean et. Ultricies leo integer malesuada nunc vel. Est ullamcorper eget nulla facilisi. Nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit. Morbi quis commodo odio aenean. Phasellus vestibulum lorem sed risus ultricies tristique.</p>
                    </div>
                </div>
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