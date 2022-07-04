import './Login.css'
import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {auth} from "../../firebase";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const history = useNavigate()

    const signIn = (e) => {
        e.preventDefault()

        signInWithEmailAndPassword(auth, email, password).then(auth => {
            history('/')
        })
            .catch(err => {
                alert(err.message)
            })
    }


    const register = (e) => {
        e.preventDefault()

        createUserWithEmailAndPassword(auth, email, password).then(auth => {
            console.log(auth)
        })
            .catch(err => {
                alert(err.message)
            })

    }

    return (<div className={"login"}>
        <Link to={'/'}>
            <img
                className={"login__logo"}
                width={"100%"}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png"
                alt=""/>
        </Link>
        <div className={"login__container"}>
            <h1 className={"login__title"}>Sign in </h1>
            <form>
                <h5>E-mail</h5>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type={"text"}/>
                <h5>Password</h5>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type={"password"}/>
                <button onClick={signIn} type={"submit"} className={'login__signInButton'}>Sign in</button>
            </form>
            <p>By signing-in you agree to the AMAZON FAKE CLONE Conditions of use & Sale. Please see our Privacy
                Notice, our Cookies Notice and our Interest-based Ads notice</p>
            <button className={"login__registerButton"} onClick={register}>Create Your Amazon Account</button>
        </div>
    </div>);
};

export default Login;


