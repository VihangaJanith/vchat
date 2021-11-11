import { Button } from '@material-ui/core';
import { auth } from './firebase';
import React from 'react';
import "./Login.css";
import { provider} from './firebase';
import{ actionTypes } from './reducer';
import { useStateValue } from './StateProvider';
import { DeveloperBoard } from '@mui/icons-material';


function Login() {
const [{}, dispatch] = useStateValue();

    const signIn= () =>{
        auth
        .signInWithPopup(provider)
        .then((result) => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            });
        })
        
        .catch((error) => alert(error.message));
    };

    return (
        <div className="login">

            <div className="devcon">
                <p>V Chat is sample project which is inspired by WhatsApp. V chat allows you to keep Chat rooms. You need to login using your Gmail. </p>
            </div>
            
            <div className="login__container">

                <img src="https://scontent.fcmb8-1.fna.fbcdn.net/v/t1.6435-9/252454832_214149430836306_2422618702593317662_n.jpg?_nc_cat=104&_nc_rgb565=1&ccb=1-5&_nc_sid=730e14&_nc_ohc=pK2CsBAP-okAX_zgLk5&_nc_ht=scontent.fcmb8-1.fna&oh=42d716953813387c9604e8090da58b18&oe=61ADC296" alt="WhatsApp" />
                
                <div className="login__text">
                    <h1>Sign in to V Chat</h1>
                </div>

                <Button type="submit" onClick={signIn}>
                    Sign In With Google 
                </Button>
            </div>
            
            <a href="https://github.com/VihangaJanith?tab=overview&from=2021-10-01&to=2021-10-31" style={{textDecoration:'none'}}>
            <p>Developed By Vihanga Janith</p>
                </a>
        </div>
    )
}

export default Login
