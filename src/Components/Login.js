import React, { useState } from 'react';
import '../Styles/LoginStyle.scss'; // Import your SCSS file

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [type, setType] = useState("login");
    const [isOpened, setIsOpened] = useState(false);

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
    }

    window.addEventListener("scroll", () => {
            if (window.scrollY > window.innerHeight / 3 && !isOpened) {
                setIsOpened(true);
                openModal();
            }
        });






    return (
        <div className="container">


            <div className={`modal ${isOpened ? 'is-open' : ''}`}>
                <div className="modal-container">
                    <div className="modal-left">
                        <h1 className="modal-title">Welcome!</h1>
                        <p className="modal-desc">Hey, wanna take a trip to Cookie Galaxy? Our cosmic cookie collection will have you floating in flavor space! Brace yourself for a taste journey that's totally outta this world! 🌌🍪✨.</p>
                        <div className="input-block">
                            <label htmlFor="email" className="input-label">Username</label>
                            <input type="text" id="email" placeholder="username" onChange={usernameChanged} value={username} />
                        </div>
                        <div className="input-block">
                            <label htmlFor="password" className="input-label">Password</label>
                            <input type="password" name="password" id="password" placeholder="Password" onChange={passwordChanged} value={password} />
                        </div>
                        {
                            type==="signUp"&&
                            <div className="input-block">
                                <label htmlFor="password" className="input-label">Repeat Password</label>
                                <input type="Repeat Password" name="password2" id="Repeat Password" placeholder="Repeat Password" onChange={password2Changed} value={password2} />
                            </div>

                        }


                        <div className="modal-buttons">
                             <a href=""> {type==="login"?"Forgot your password?":""}</a>
                            <button className="input-button" onClick={submit}>{type==="login"?"Login":"Sign Up"}</button>
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
