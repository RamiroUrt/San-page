import Cards from "../../components/Cards";
import Testimonial from "../../components/module/Testimonial"


import Libros from '../../../public/cards/libros.png'
import Podcast from '../../../public/cards/podcast.png'
import Sesiones from '../../../public/cards/sesiones.png'


const Info = () => {
  return (
    <section className="info-contain">
    <Testimonial/>
    <div className="contain-cards">
      <Cards img={Libros} text={"RECOMENDACIONES"}/>
      <Cards img={Podcast} text={"MI PODCAST"}/>
      <Cards img={Sesiones} text={"SESIONES"}/>
      <Cards img={Sesiones} text={"TALLERES"}/>
      <Cards img={Sesiones} text={"SOBRE MI"}/>
    </div>
    </section>
)
}

export default Info