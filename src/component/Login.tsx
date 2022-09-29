import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import './Login.css'
import { IUser } from '../App';
import { useState } from 'react';
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';

 const Login = () => {
    const navigator = useNavigate();
    // const [user, setUser] = useState<IUser>({});
    const [state, dispatch] = useStateValue();
    const { user: storedUser } = state;

    const signIn = (event: any) => {
        // do clever google login shiz...
        event.preventDefault();
        console.log('sign in button clicked');

        const loggedUser = {
            name: 'Tobs',
            email: 'bola@email.com',
        }

        dispatch({
            type: actionTypes.SET_USER,
            user: loggedUser,
        });

        // localStorage.setItem('user', JSON.stringify(loggedUser));

        console.log({ loggedUser });
        navigator('/room');
    }

    return (
        <div className='login'>
            <div className="login__container">
                <img
                src="https://creospan.com/wp-content/uploads/2022/09/creospan_logo_44.png"
                alt="img" 
                />
                <h1>Sign in to the chat portal</h1>
                <p>creospan-chat.com</p>
                <Button onClick={signIn}>Sign in with Google</Button>
                
            </div>
        </div>
    )
}

export default Login;