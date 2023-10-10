import './index.scss'
import { Container, Row,Col } from "reactstrap";

function Bio() {
    let popup = document.querySelector('.popups');

    //async function Popup1() {
    //    const c = document.querySelector('#popup-1');
    //    if (c.classList.contains('active') == true) {
    //        c.classList.remove('active');
    //        popup.classList.remove('active');
    //    } else {
    //        c.classList.add('active');
    //        popup.classList.add('active');
    //    }
    //}
    //async function Popup2() {
    //    const c = document.querySelector('#popup-2');
    //    if (c.classList.contains('active')) {
    //        c.classList.remove('active');
    //        popup.classList.remove('active');
    //    } else {
    //        c.classList.add('active');
    //        popup.classList.add('active');
    //    }
    //}
    //async function Popup3() {
    //    const c = document.querySelector('#popup-3');
    //    if (c.classList.contains('active')) {
    //        c.classList.remove('active');
    //        popup.classList.remove('active');
    //    } else {
    //        c.classList.add('active');
    //        popup.classList.add('active');
    //    }
    //}
    //async function Popup4() {
    //    const c = document.querySelector('#popup-4');
    //    if (c.classList.contains('active')) {
    //        c.classList.remove('active');
    //        popup.classList.remove('active');
    //    } else {
    //        c.classList.add('active');
    //        popup.classList.add('active');
    //    }
    //}

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
            {/* <section className='popups'>
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
                    <div onClick={Popup2} className='wrapper-close'>
                        <a href="#">
                            <img src="../../img/close.svg" alt="" />
                        </a>
                    </div>
                    <div className='wrapper-img'>
                        <img src="#" alt="" />
                    </div>
                    <div className='wrapper-descritivo'>
                        <h1>Experiênciaaaa</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non curabitur gravida arcu ac tortor dignissim convallis aenean et. Ultricies leo integer malesuada nunc vel. Est ullamcorper eget nulla facilisi. Nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit. Morbi quis commodo odio aenean. Phasellus vestibulum lorem sed risus ultricies tristique.</p>
                    </div>
                </div>
                <div id="popup-1" className='popup-content'>
                    <div onClick={Popup3} className='wrapper-close'>
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
                <div id="popup-1" className='popup-content'>
                    <div onClick={Popup4} className='wrapper-close'>
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
            </section> */}
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