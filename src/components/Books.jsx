// eslint-disable-next-line react/prop-types
const Books = ({ portada, tittle, description }) => {
    return (
      <div className="book-container">
        <div className="img-book">
          <img src={portada} alt={tittle} loading='lazy' />
        </div>
        <div className="description-book">
          <h1 className="tittle">{tittle}</h1>
          <p className="text-cont">{description}</p>
        </div>
      </div>
    );
  };
  
  export default Books;
  