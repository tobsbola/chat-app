import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import Message from './Message';
import { channelArr } from './Sidebar';
import ChatInput from './ChatInput';

interface IRoomDetails {
    roomId?: string;
    name?: string;
}

export interface IRoomMessage {
    id: number;
    message: {
        text?: string;
    };
    timestamp: string;
    user: string;
    userImage: string;
}

const roomMessageArr = [
    {
        id: 1,
        user: 'John',
        message: {
            text: 'Coaching Call Schecdule',
        },
        timestamp: '2021-09-01T12:00:00.000Z',
        userImage: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80'
    },
    {
        id: 2,
        user: 'Sam',
        message: {
            text: 'Welcome on board',
        },
        timestamp: '2021-10-01T12:00:00.000Z',
        userImage: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80'
    },
    {
        id: 3,
        user: 'Felix',
        message: {
            text: 'Coaching Call Schecdule',
        },
        timestamp: '2021-08-01T12:00:00.000Z',
        userImage: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80'
    },
    {
        id: 4,
        user: 'Johnson',
        message: {
            text: 'How are you today',
        },
        timestamp: '2022-09-01T12:00:00.000Z',
        userImage: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80'
    }
];

const Chat = () => {
    const { roomId } = useParams();
    const [roomDetails, setRoomDetails] = useState<IRoomDetails>({});
    const [roomMessages, setRoomMessages] = useState<IRoomMessage[]>(roomMessageArr);

    useEffect(() => {
        if (roomId) {
            // db.collection('rooms').doc(roomId).onSnapshot((snapshot) => (
            //     setRoomDetails(snapshot.data())
            // ))
            const foundChannl = channelArr.find((channel) => channel.id === roomId);
            if (foundChannl) {
                setRoomDetails(foundChannl);
            }
        }
    }, [roomId]);

    // console.log({ roomDetails, roomMessages });

    return (
        <div className='chat'>
            <div className="chat__header">
                <div className="chat__headerLeft">
                    <h4 className="chat__channelName">
                        <strong>#{roomDetails?.name}</strong>
                        <StarBorderOutlinedIcon />
                        <hr />
                    </h4>
                </div>

                <div className="chat__headerRight">
                    <p>
                        <InfoOutlinedIcon /> Details
                    </p>
                </div>
            </div>

            <div className="chat__messages">
                { roomMessages.map(({ id, message, timestamp, user, userImage }: any) => (
                    <Message
                        key={id}
                        id={id}
                        message={message}
                        timestamp={timestamp}
                        user={user}
                        userImage={userImage}
                    />
                )) }
            </div>

            <ChatInput channelName={roomDetails?.name} channelId={roomDetails?.roomId} />
        </div>
    )
}

export default Chat;