const Message = (name, message, key) => {
    return ( <>
    <div className="messsagediv" key={key}>
    <h2>{name}</h2>
    <p>{message}</p></div>
    </> );
}
 
export default Message;