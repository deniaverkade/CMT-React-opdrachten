const Message = ({name, message}) => {
    return ( <>
    <div className="messsagediv" >
    <h2>{name}</h2>
    <p>{message}</p></div>
    </> );
}
 
export default Message;