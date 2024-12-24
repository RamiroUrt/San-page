import Logo from '../../../public/S0-sf.png'
import SocialLink from '../../components/module/SocialLink'

const Contact = () => {
  return (
    <>
    <footer className="mt-auto w-full py-10 px-4 sm:px-6 lg:px-40 mx-auto ">
  <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-5">
    <div>
      <div className="w-[100px] h-[100px]">
        <img className="flex-none w-full object-cover"  src={Logo}/>
    </div>
    </div>
  </div>
    <div className="md:text-end space-x-2 social-contact-contain">
        <SocialLink />
    </div>
</footer>
    </>
  )
}

export default Contact