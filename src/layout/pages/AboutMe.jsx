import Contact from '../views/Contact'
import Container from "../../components/module/Container"
import Foto from '../../../public/Persona.jpg'

import { useState } from "react";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
const AboutMe = () => {
  const [show, setShow] = useState(false);

  useState(() => {
    setShow(true); 
  }, []);
  return (
    <Container>
        <main className="abut-cont">
          <h1 className="tittle">-
            <RoughNotationGroup show={show} >
                <RoughNotation type="highlight" show={true} color="#FAD4D8" padding={2}>
                Sobre mi
            </RoughNotation>
          </RoughNotationGroup>
          -</h1>
          <div className="desc-about">
            <img src={Foto} alt="" />
            <h1 className='tittle'>SANDRA ORTELLADO</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non neque rutrum, varius erat sed, finibus neque. Sed vel est ac nunc maximus consectetur. Quisque vel massa vel ex fermentum laoreet. Donec vel ipsum in dolor cursus bibendum. Aliquam erat volutpat. Donec auctor, lectus vel sagittis malesuada, felis neque gravida dolor, vel semper ligula velit vel neque.</p>
          </div>
        </main><Contact />
    </Container>
  )
}

export default AboutMe