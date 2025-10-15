import menu from '../data';
import { useState } from "react";
import Menu from './Menu';


const MenuList = () => {
    const [gerechten, setGerechten] = useState(menu);
    return ( 
        gerechten.map(gerecht => (
            <Menu id={gerecht.id} img={gerecht.img} title={gerecht.title} category={gerecht.category} price={gerecht.price} desc={gerecht.desc}/>

        ) 

        )
     );
}
 
export default MenuList;