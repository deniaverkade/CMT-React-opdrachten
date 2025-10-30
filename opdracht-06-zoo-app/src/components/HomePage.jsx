import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from './Card';
import animalData from '../animals';


const Home = () => {
    const navigate = useNavigate();

    const [animalList, setAnimalList] = useState(animalData);


    const goToDetail = (animalId) => {
        navigate(`/animals/${animalId}`);
    };
     const animalMapping = animalList.map(ani =>(
                
                <Card
                key={ani.id}
                animal={ani}
                onShowDetail={goToDetail}
                /> 
            
            ))

    return (  
        
        <section>
            <h1 className="frontpageTitle">Zoo App</h1>
            <span className="container">
            {animalMapping}
            </span>
        </section>
    );
}
 
export default Home;



