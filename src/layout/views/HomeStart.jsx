import Logo from '../../../public/S0-sf.png'
import Psicologa from '../../../public/psychology.jpg'
import PaperPlane from '../../components/module/PaperPlane'

const HomeStart = () => {
  return (
    <>
        <section className="home-main">
              <div className="logo-main">
                  <img src={Logo}
                  alt="Sandra Ortellado Psicologa"
                  loading='lazy' />
              </div>
              <div className="main-picture">
                  <img src={Psicologa}
                  alt="Sandra Ortellado Psicologa"
                  loading='lazy' />
              </div>
              <div className="main-text">
                  <h1>¡Hola soy Sandra!</h1>
                  <PaperPlane/>
              </div>
        </section>
    </>
  )
}

export default HomeStart