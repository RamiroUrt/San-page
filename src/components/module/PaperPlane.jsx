import PaperPlaneFt from '../../../public/paperairplane.png'

import AOS from 'aos';
import 'aos/dist/aos.css'

AOS.init({
  delay: 1,
  easing: 'ease',
  duration: 900,
});

const PaperPlane = () => {
  return (
    <img src={PaperPlaneFt} 
    alt=""
    loading='lazy'
    className='paper-plane'
    data-aos="fade-right" />
  )
}

export default PaperPlane