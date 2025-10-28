import {useEffect, useState} from 'react';


const Clock = () => {
    const [currentTime, setCurrentTime] = useState(new Date());


useEffect(()=> {
    

    const timer = setInterval(()=>{
        setCurrentTime(new Date());
        return () => {
            clearInterval(timer);
            
        }

    },1000)
  

    


},[]);
  

return (<>
    <h1>Huidige tijd: {currentTime.toLocaleTimeString()}</h1>
    </>)
}

        
        

 
export default Clock;