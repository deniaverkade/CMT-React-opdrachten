import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from './Card';
import animalData from '../animals';


const Home = () => {
    const navigate = useNavigate();


    const [searchInput, setSearchInput] = useState("");
    const [animalList, setAnimalList] = useState(animalData);


    const goToDetail = (animalId) => {
        navigate(`/animals/${animalId}`);
    };
    const animalMapping = animalList.map(ani => (

        <Card
            key={ani.id}
            animal={ani}
            onShowDetail={goToDetail}
        />

    ))



     const searchHandler = (e) => {
        console.log(e.target.value);
        let newSearch = e.target.value;
        setSearchInput(newSearch);
      
        const filteredAnimals = animalData.filter((animal)=>
        animal.name.toLowerCase().includes(newSearch.toLowerCase())
    )

    setAnimalList(filteredAnimals);
    };


    return (

        <section>
            <h1 className="frontpageTitle">Zoo App</h1>
            <input type="text" placeholder="Zoek hier uw dier" name="search" onChange={searchHandler} value={searchInput}/>
            <span className="container">
                {animalMapping}
            </span>
        </section>
    );
}

export default Home;



