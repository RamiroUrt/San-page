import Books from "../../components/Books"
import Container from "../../components/module/Container"
import Contact from "../views/Contact"
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import books from '../../assets/json/book.json'
import { useState } from "react";
const Recomendations = () => {
  const [show, setShow] = useState(false);

  useState(() => {
    setShow(true); 
  }, []);

  return (
  <>
        <Container>
        <div className="text-recomendations">
        <h1 className="tittle reco-tit">-{""}
          <RoughNotationGroup show={show} >
              <RoughNotation type="highlight" show={true} color="#FAD4D8" padding={2}>
              Recomendaciones
          </RoughNotation>
        </RoughNotationGroup>
        -</h1>
          <h2 className="text-cont">&quot;Riégate de amor propio y verás que bonito floreces&quot;</h2>
          <p className="tittle" >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus, praesentium. Praesentium doloremque sit distinctio ad sapiente quasi eum ipsum facere hic pariatur, tenetur quidem veniam nihil fugit nisi. Voluptas, autem.</p>
        </div>
        <div className="contain-books-recomendations">
        {books.map((book, index) => (
        <Books 
          key={index} 
          portada={book.portada} 
          tittle={book.tittle} 
          description={book.description} 
        />
      ))}
        </div>
          <Contact/>
        </Container>
  </>
  )
}

export default Recomendations