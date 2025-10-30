
const Card = ({ animal, onShowDetail,}) => {
    return ( 

<div className="animalContainer">
      
      <img src={animal.imageUrl}/>
      <h2 className="frontpageNames">{animal.name}</h2>
      <button className="frontpageButtons" onClick={() => onShowDetail(animal.id)}>
        Meer info
      </button>
      </div>
     );
}
 
export default Card;