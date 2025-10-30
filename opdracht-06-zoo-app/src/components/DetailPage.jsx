import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import animalData from '../animals';

const DetailPage = () => {
  const { animalId } = useParams();
  const navigate = useNavigate();

  const [animalList, setAnimalList] = useState(animalData);
  
 
  const animalFind = animalList.find(a => a.id === Number(animalId));

  if (!animalFind) {
    return <div>Dier niet gevonden!</div>;
  }

  return (
    <section className="detailContainer">
      
      <img className="img2" src={animalFind.imageUrl}/>
      <h1>{animalFind.name}</h1>
      <h2>Leefgebied: <span>{animalFind.habitat}</span></h2>
      <h2>Dieet: <span>{animalFind.diet}</span></h2>
      <p><b>Beschrijving:</b> {animalFind.description}</p>

      <button onClick={() => navigate('/')}>
        ← Terug
      </button>
    </section>
  );
};

export default DetailPage;