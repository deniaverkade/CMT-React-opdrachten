import Message from "./Message";

const MessageList = (name, message,key) => {
    return (  <>
    <Message name={name} message={message} key={key}/>
    </>);
}
 
export default MessageList;