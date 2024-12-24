import Cards from "../../components/Cards";
import Testimonial from "../../components/module/Testimonial"


import Libros from '../../../public/cards/libros.png'
import Podcast from '../../../public/cards/podcast.png'
import Sesiones from '../../../public/cards/sesiones.png'


import { Link } from "react-router-dom";

const Info = () => {
  return (
    <section className="info-contain">
    <Testimonial/>
    <div className="contain-cards">
      <Link to="/recomendaciones">
        <Cards img={Libros} text={"RECOMENDACIONES"}/>
      </Link>

        <Cards img={Podcast} text={"MI PODCAST"}/>
      
      <Link to="/sesiones">
        <Cards img={Sesiones} text={"SESIONES"}/>
      </Link>
      <Link to="/talleres">
        <Cards img={Sesiones} text={"TALLERES"}/>
      </Link>
      <Link to="/sobre-mi">
        <Cards img={Sesiones} text={"SOBRE MI"}/>
      </Link>
    </div>
    </section>
)
}

export default Info