import { Button } from '@mui/material';
import React, { useState } from 'react'
import { useStateValue } from '../StateProvider';
import './ChatInput.css'

const ChatInput = ({ channelName, channelId }) => {
    const [input, setInput] = useState("");
    const [{ user }] = useStateValue();

    const sendMessage = (e) => {
        e.preventDefault();

        if (channelId) {
            // do some clever stuff
        }

    }

    return (
        <div className='chatInput'>
            <form>
                <input
                 placeholder={`Message #${channelName}`}
                 value={input}
                    onChange={(e) => setInput(e.target.value)}
                  />
                <Button type='submit' onClick={sendMessage}>SEND</Button>
            </form>
        </div>
    )
}

export default ChatInput;