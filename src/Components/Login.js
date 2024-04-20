import React, { useState } from 'react';
import '../Styles/LoginStyle.scss';
import {useNavigate} from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [securityQuestion, setSecurityQuestion] = useState("");
    const [securityQuestionAnswer, setSecurityQuestionAnswer] = useState("");
    const [type, setType] = useState("login");
    const [isOpened, setIsOpened] = useState(false);



    const handleSecurityQuestionsChange = (event) => {
        setSecurityQuestion(event.target.value);
    };

    const navigate=useNavigate();

    const securityQuestionAnswerChange=(event)=>{
        setSecurityQuestionAnswer(event.target.value)
    }

    const usernameChanged = (event) => {
        setUsername(event.target.value);
    }

    const passwordChanged = (event) => {
        setPassword(event.target.value);
    }

    const password2Changed = (event) => {
        setPassword2(event.target.value);
    }

    const typeChanged = (event) => {
        setType(event.target.value);
    }

    const openModal = () => {
        setIsOpened(true);
        document.body.style.overflow = "hidden";
    }

    const closeModal = () => {
        setIsOpened(false);
        document.body.style.overflow = "initial";
    }

    const submit = () => {
        // Your submit logic goes here
        switch (type){
            case "login":
            axios.get("http://localhost:8989/login?username="+username+"&password="+password)
                .then((res)=>{
                if (res.data.success){
                    Cookies.set("token",res.data.token)
                    Cookies.set("username",username)
                    navigate("/home")
                }else{
                    alert(res.data.errorCode)

                }
            })

                break;
            case "signUp" :
                axios.get("http://localhost:8989/sign-up?username="+username+"&password="+password+"&securityQuestionNumber="+securityQuestion+"&answerSecurityQuestion="+securityQuestionAnswer)
                    .then((res)=>{
                        if (res.data.success){
                            setType("login")
                        }else{
                            alert(res.data.errorCode)
                        }
                    })

                break;
        }
    }

    window.addEventListener("scroll", () => {
            if (window.scrollY > window.innerHeight / 3 && !isOpened) {
                setIsOpened(true);
                openModal();
            }
        });


    const valid = () => {

       return (( password.length < 6) ||
                (password !== password2 && type === "signUp") ||
           (username.length === 0) );

    };


    return (
        <div className="mainFrame">
            <div className={`modal ${isOpened ? 'is-open' : ''}`}>
                <div className="modal-container">
                    <div className="modal-left">
                        <h1 className="modal-title">Welcome!</h1>
                        <p className="modal-desc">Hey, wanna take a trip to Cookie Galaxy? Our cosmic cookie collection will have you floating in flavor space! Brace yourself for a taste journey that's totally outta this world! 🌌🍪✨.</p>
                        <div className="input-block">
                            {/*<label htmlFor="email" className="input-label">Username</label>*/}
                            <input type="text" id="email" placeholder="Username" onChange={usernameChanged} value={username} />
                        </div>
                        <div className="input-block">
                            {/*<label htmlFor="password" className="input-label">Password</label>*/}
                            <input type="password" name="password" id="password" placeholder="Password" onChange={passwordChanged} value={password} />
                        </div>
                        {
                            type==="signUp"&&
                            <div>

                            <div className="input-block">
                                {/*<label htmlFor="password" className="input-label">Repeat Password</label>*/}
                                <input type="password" name="password2" id="Repeat Password" placeholder="Repeat Password"  onChange={password2Changed} value={password2} />
                            </div>
                                <div style={{marginBottom:"10px"}}>
                                    <select value={securityQuestion} onChange={handleSecurityQuestionsChange}>
                                        <option disabled={true} value="">Select a security questionAnswer</option>
                                        <option value="1">What city were you born in?</option>
                                        <option value="2">What is your oldest sibling’s name?</option>
                                        <option value="3">In what city or town did your parents meet?</option>
                                        <option value="4">What was the name of your first school teacher?</option>
                                    </select>
                                </div>
                            <div className="input-block">
                                    <input name="securityQuestionAnswer" placeholder="Write your Answer Here"  onChange={securityQuestionAnswerChange} value={securityQuestionAnswer} />
                            </div>

                            </div>


                        }


                        <div className="modal-buttons">
                             <a href={"forgetPassword"}> {type==="login"?"Forgot your password?":""}</a>
                            <button className="input-button" disabled={valid()} onClick={submit}>{type==="login"?"Login":"Sign Up"}</button>
                        </div>
                        {
                            type==="login"?
                            <p className="sign-up">Don't have an account? <button className="radio-button" onClick={()=>{setType("signUp")}}>Sign up now</button></p>
                            :
                            <p className="sign-up">Already have an account? <button className="radio-button" onClick={()=>{setType("login")}}>Login</button></p>


                        }

                    </div>
                    <div className="modal-right">
                        <img src="https://th.bing.com/th/id/OIG2.2I.vwhs3_8rg_GhMi5GI?w=1024&h=1024&rs=1&pid=ImgDetMain" alt="" />
                    </div>
                    <button style={{color:"white"}} className="icon-button close-button" onClick={closeModal}>
                        <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                            <path d="M 10 10 L 40 40 M 40 10 L 10 40" stroke="white" strokeWidth="3" />
                        </svg>
                    </button>
                </div>
                <div className="button-container">
                    <button className="modal-button" onClick={openModal}>Click here to begin your journey 🍪</button>
                </div>
            </div>
        </div>
    );
}

export default Login;
