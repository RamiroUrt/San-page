import Button from "../Button"

const Sessions1 = () => {
  return (
    <>
        <ul>
            <li  className="li-sessions">
                <p><b>Duración:</b></p>
                <p>1 hora y media</p>
            </li>
            <li  className="li-sessions">
                <p><b>Formato online:</b></p>
                <p>desde tu lugar seguro, cómodo y acompañado de algo para anotar y un buen café (o mate en mi caso).</p>
            </li>
            <li  className="li-sessions">
                    <p><b>Importe:</b></p>
                <p>$20.000 ars</p>
            </li>
            <li  className="li-sessions">
                <p><b>Cuándo:</b></p>
                <p>una vez que hayas aceptado el desafío de conocerte y cambiar tu realidad de adentro hacia afuera, me contactás y buscamos un huequito. Ten en cuenta que los horarios posibles quedarán comprendidos entre las 8am a 7pm (horario Buenos Aires) de lunes a viernes. 
</p>
            </li>
        </ul>
        <Button text={"PONTE EN CONTACTO"}/>
    </>
  )
}

export default Sessions1