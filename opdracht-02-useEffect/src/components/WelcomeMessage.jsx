
import {useEffect, useState} from 'react';


const WelcomeMessage = () => {

const [message, setMessage] = useState();


useEffect(()=>{
const currentTimeOfDay = new Date();
const hours = currentTimeOfDay.getHours();
let newMessage = "";
if (hours < 12 && hours > 6) {newMessage="Goedemorgen!"};
if (hours > 12 && hours < 18) {newMessage="Goedemiddag!"};
if (hours > 18 && hours < 6) {newMessage="Goedenacht!"};
setMessage(newMessage);
},[])

return (<>

<h1>{message}</h1>

</>)

}
 
export default WelcomeMessage;