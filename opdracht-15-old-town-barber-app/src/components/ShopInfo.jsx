import { useState } from "react";
import InfoCard from "./InfoCard";


const ShopInfo = () => {
const [shopInfo, setShopInfo] = useState([
    {id: 0, name: "abc", desc: "abc", imgurl:"link"},
    {id: 1, name: "abc", desc: "abc", imgurl:"link"},
    {id: 2, name: "abc", desc: "abc", imgurl:"link"},
    {id: 3, name: "abc", desc: "abc", imgurl:"link"},
])
    return ( <>
    <div>
        
        {shopInfo.map(info => (

            <li key={info.id}>
            <InfoCard.jsx imageurl={info.imgurl} servicename={info.name} servicedesc={info.desc}/>
            </li>
        ))}
        

        <div>

        </div>
    </div>
    </>);
}
 
export default ShopInfo;