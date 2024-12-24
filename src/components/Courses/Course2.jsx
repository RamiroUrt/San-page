import Button from "../Button"
import Reloj from "../../../public/reloj.webp"

import AOS from 'aos';
import 'aos/dist/aos.css'

AOS.init({
  duration: 600,
});
const Course2 = () => {
  return (
    <>
        <div className="course">
        <img src={Reloj} alt=""  loading="lazy"/>
        <h2 className="tittle">Curso desarrollo personal</h2>
        <h2  className='text-cont'><b>Tú eres aquello que haces, no aquello que dices que harás</b>.</h2>
        </div>
        <div className="course-cont">
            <ul>
                <li>
                    <p><b>En qué consiste: </b>He creado un método por y para vos. Lo he estado poniendo a prueba y perfeccionado con el uso, el tiempo y muchas orugas que hoy son bellas mariposas.</p>
                </li>
                <li>
                    <p><b>Duración: </b>Serán 7 semanas trabajando codo a codo vos, yo y nuestra tribu. (Tendrás el material y las grabaciones disponibles por 180 días = 6 meses).</p>
                </li>
                <li>
                    <p><b>Cómo: </b>El curso será completamente virtual. Cada semana tendremos un encuentro en vivo +  una clase grabada teórico práctica. Los encuentros en vivo serán los martes de 6:00 - 8:30 pm hora Madrid (quedarán grabados y alojados en la plataforma del curso en caso de que no puedas asistir al vivo). Habrá 2 encuentros en vivo adicionales para resolver dudas, que serán dictados 2 sábados durante la cursada de 3 a 5 pm hora de Madrid (serán opcionales y quedarán grabados también).  </p>
                </li>
                <li>
                    <p><b>Cuándo: </b>La próxima edición comenzará en enero del 2025.</p>
                </li>
                <li>
                    <p><b>Importe: </b>$20.000 ars</p>
                </li>
            </ul>
        </div>
        <Button text={"PONTE EN CONTACTO"}/>
    </>
  )
}

export default Course2