const InfoCard = ({imageurl, servicename, servicedesc}) => {
    return ( <>
    
    
        <img src={imageurl} />
        <div>
        <h1>{servicename}</h1>
        <p>{servicedesc}</p>
        </div>
    
    
    </> );
}
 
export default InfoCard;