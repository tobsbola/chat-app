import { IRoomMessage } from './Chat';
import './Message.css'

const Message = ({ id, message, timestamp, user, userImage }: IRoomMessage) => {
    console.log({ id, message, timestamp, user, userImage });
  return (
    <div className='message'>
        <img src={userImage} alt="img" />
        <div className="message__info">
            <h4>
                {user} <span className='message__timestamp'>{new Date(timestamp).toUTCString()}</span>
            </h4>
            <p>{message?.text}</p>
        </div>
    </div>
  )
}

export default Message;