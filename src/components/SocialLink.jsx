
import instagram from '../assets/svg/instagram-svgrepo-com.svg'
import linkedin from '../assets/svg/linkedin-svgrepo-com.svg'
import Faceboock from '../assets/svg/facebook-svgrepo-com.svg'
import Spotify from '../assets/svg/spotify-svgrepo-com.svg'


const SocialLink = () => {
  return (
    <>
        <a href="">
            <img src={instagram} alt="" />
        </a>
        <a href="">
            <img src={linkedin} alt="" />
        </a>
        <a href="">
            <img src={Faceboock} alt="" />
        </a>
        <a href="">
            <img src={Spotify} alt="" />
        </a>
    </>
  )
}

export default SocialLink