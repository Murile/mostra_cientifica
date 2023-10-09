import './index.scss';
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()

  function Quimica(){
    navigate('/qui')
  }
  function Biologia(){
    navigate('/bio')
  }
  function Robotica(){
    navigate('/robs')
  }
  return (
 <main className='main_home'>
            
                <div className='titulos_home'>
                    <div className='Tprincipal_home'>
                    <img className='img_topo' src="../../img/logo-mostra.png" alt="" />                        
                    </div>

                    <div className='Tsubtitulo_home'>
                    <h1> O que gostaria de assistir hoje? </h1>
                    </div>

                </div>

                <div className='opcoes_home'>

                <div className='opcao1_home'>  
                  <img src="../../img/Group 5.png" alt="" onClick={Quimica}/>
                  <h3 className='Quimica'> Química </h3>
                </div>
                 <div className='opcao2_home'>  
                   <img src="../../img/Group 6.png" alt="" onClick={Biologia} />
                   <h3 className='Biologia'> Biologia </h3>
                 </div>
                <div className='opcao3_home'> 
                   <img src="../../img/image 1.png" alt="" onClick={Robotica}/>
                   <h3 className='Robotica'> Robótica </h3>
                </div>

                </div>

  </main>
  );
}

export default Home;
