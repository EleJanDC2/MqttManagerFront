import React, {useState} from "react";
import axios from "axios"
import useSignIn from "react-auth-kit/hooks/useSignIn";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import {useNavigate} from "react-router-dom";
import style from "./login.module.css"
// import dotenv from 'dotenv';

const Login: React.FC = () => {
    const signIn = useSignIn();
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // useEffect(() => {
    //     dotenv.config();
    // }, []);

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const onSubmit = async (event) => {
        event.preventDefault();

        const usernameValue = username.trim(); // Trim whitespaces for validation
        const emailValue = email.trim();
        const passwordValue = password.trim();

        const data = {
            userData: {
                username: usernameValue,
                email: emailValue,
                password:passwordValue
            }
        }

        console.log("usernameValue type of: ", typeof(usernameValue));
        console.log("usernameValue: ", usernameValue);

        console.log("emailValue type of: ", typeof(emailValue));
        console.log("emailValue: ", emailValue);

        try{
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            // const response = (await axios.get("http://localhost:3100/api/user/login"));
            const response = await axios.post("http://localhost:3100/api/user/login", data, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if(response.status == 200){
                console.log("Zalogowano pomyślnie.")
                signIn({auth: {token: response.data.JWT}, userState: {username: usernameValue, email: emailValue}})
                navigate('/mainScreen');
            } else {
                console.error('Coś poszło bardzo nie tak');
            }

        }catch (error){
            console.log('error: ', error);
        }


    }
    return (
       <div className={style.wrapper}>
           <form onSubmit={onSubmit}>
               <h1>Login</h1>
               <div className={style.inputBox}>
                   <input className={style.input} type='text' placeholder='username' required onChange={(e) => setUsername(e.target.value)}/>
                   <FaUser className={style.icon}/>
               </div>
               <div className={style.inputBox}>
                   <input className={style.input} type='text' placeholder='email' required onChange={(e) => setEmail(e.target.value)}/>
                   <MdEmail className={style.icon}/>
               </div>
               <div className={style.inputBox}>
                   <input className={style.input} type='password' placeholder='password' required onChange={(e) => setPassword(e.target.value)}/>
                   <FaLock className={style.icon}/>
               </div>
               <div className={style.rememberForgot}>
                   <label> <input type='checkbox' />Remember me </label>
                   <a className={style.forgotPassword} href="#">Forgot password?</a>
               </div>
               <div>
                   <button type='submit'>Login</button>
               </div>
               <div className={style.registerLink}>
                   <p>Don't have an account? <a href='/registration'>Register</a></p>
               </div>
           </form>
       </div>
    );
}

export default Login;
