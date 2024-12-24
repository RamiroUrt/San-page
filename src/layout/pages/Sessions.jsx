import { useState } from "react";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import Contact from '../views/Contact'
import Container from "../../components/module/Container"

import Psichology from '../../../public/psychology.webp'
import Sessions1 from '../../components/sessions/Sessions1'
import Cabeza from '../../../public/cabeza.png'
const Sessions = () => {
  const [show, setShow] = useState(false);

  useState(() => {
    setShow(true); 
  }, []);
  return (
    <>
        <Container>
        <div className="sessions-container">
        <h1 className="tittle">-
          <RoughNotationGroup show={show} >
              <RoughNotation type="highlight" show={true} color="#FAD4D8" padding={2}>
              Sesiones
          </RoughNotation>
        </RoughNotationGroup>
        -</h1>
            <h2 className='text-cont'>Somos una sola vez en la vida...</h2>
            <div className="sessions-img-container">
                <img src={Psichology} alt="" />
            </div>
            <div className="session">
              <h3 className='text-cont'>Sesión individual</h3>
              <h4 className='tittle'><b>Cuando miro el mundo soy pesimista, pero cuando miro a la gente soy optimista.</b></h4>
              <div className="cont-sessions">
              <Sessions1/>
              </div>
            </div>
            <div className="sessions-img-container">
                <img src={Cabeza} alt="" />
            </div>
            <div className="session">
              <h3 className='text-cont'>Método completo</h3>
              <h4 className='tittle'><b>Una mente no puede entenderse sin la cultura.</b></h4>
              <div className="cont-sessions">
              <Sessions1/>
              </div>
            </div>
        </div>
            <Contact/>
        </Container>
    </>
  )
}

export default Sessions