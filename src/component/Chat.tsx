import React from 'react'
import { useParams } from 'react-router-dom';
// import StarBorderOutlinedIcon from '@mui/icons-material'
// import InfoOutlinedIcon from '@mui/icons-material';

const Chat = () => {
    const { roomId } = useParams();

    return (
        <div className='chat'>
            <h2>You are in the {roomId} room </h2>
            <div className="chat__header">
                <div className="chat__headerLeft">
                    <h4 className="chat__channelName">
                        <strong>#Room-name</strong>
                        {/* <StarBorderOutlinedIcon /> */}
                    </h4>
                </div>

                <div className="chat__headerRight">
                    <p>
                        {/* <InfoOutlinedIcon /> Details */}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Chat