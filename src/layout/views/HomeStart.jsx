import { useState } from "react";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

import Logo from "../../../public/S0-sf.png";
import Psicologa from "../../../public/psychology.jpg";
import PaperPlane from "../../components/module/PaperPlane";

const HomeStart = () => {
  const [show, setShow] = useState(false);

  useState(() => {
    setShow(true); 
  }, []);

  return (
    <>
      <section className="home-main">
        <div className="logo-main">
          <img 
            src={Logo} 
            alt="Sandra Ortellado Psicologa" 
            loading="lazy" 
          />
        </div>
        <div className="main-picture">
          <img 
            src={Psicologa} 
            alt="Sandra Ortellado Psicologa" 
            loading="lazy" 
          />
        </div>
        <div className="main-text">
          <h1>
            ¡ Hola soy{" "}
            <RoughNotationGroup show={show} >
              <RoughNotation type="underline" show={true} color="#FAD4D8" padding={2}>
                Sandra
              </RoughNotation>
            </RoughNotationGroup>
            !
          </h1>
          <PaperPlane />
        </div>
      </section>
    </>
  );
};

export default HomeStart;
