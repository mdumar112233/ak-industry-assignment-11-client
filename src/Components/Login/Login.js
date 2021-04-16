import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebaseConfig';
import googleIcon from '../../image/googleIcon.png';
import './Login.css';
import { UserContext } from '../../App';

if(firebase.apps.length === 0){
    firebase.initializeApp(firebaseConfig);
  }

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    // const history = useHistory();
    // const location = useLocation();
    // let { from } = location.state || { from: { pathname: "/" } };

    const handleSignIn = () =>{
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
        .then((result) => {
          const user = result.user;
          const {displayName, email} = user;
          const signInUser = {name: displayName, email}; 
          setLoggedInUser(signInUser);
        //   history.replace(from);
        }).catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          const email = error.email;
          const credential = error.credential;
          console.log(errorCode, errorMessage, email, credential);
        });
    }
    return (
        <div>
            <div className="login-section">
                <h2>Login</h2>
                <div className="signIn">
                    <span> <img src={googleIcon} alt=""/></span>  <input className='login-btn' onClick={handleSignIn} type="button" value='Login with Google'/>
                </div>
            </div>
        </div>
    );
};

export default Login;