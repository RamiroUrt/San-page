import Tiempo from '../../../public/tiempo.jpeg'
import Contact from '../views/Contact'
import Container from "../../components/module/Container"
import Course1 from '../../components/Courses/Course1'
import Course2 from '../../components/Courses/Course2'

import { useState } from "react";

import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
const Workshops = () => {
  const [show, setShow] = useState(false);

  useState(() => {
    setShow(true); 
  }, []);
  return (
    <>
        <Container>
        <div className="sessions-container">
        <img src={Tiempo} alt="" />
        <h1 className="tittle">-
          <RoughNotationGroup show={show} >
              <RoughNotation type="highlight" show={true} color="#FAD4D8" padding={2}>
              Talleres
          </RoughNotation>
        </RoughNotationGroup>
        -</h1>
          <h2 className='text-cont'><b>&quot;La oruga no necesita un milagro para poder volar, necesita un proceso&quot;</b></h2>
          <h2 className='tittle'>- Y aquí comienza tu proceso -</h2>
        </div>
        <div className="courses-container">
            <Course1/>
            <Course2/>
        </div>
          <Contact />
        </Container>
    </>
  )
} 

export default Workshops