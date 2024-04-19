import React, {useState} from 'react';
import axios from "axios";
import "../Styles/forgetPasswordStyle.scss";


const ForgetPassword = () => {
    const [username,setUsername]=useState("")
    const [securityQuestion,setSecurityQuestion]=useState("")

    const getSecurityQuestionByUsername=()=>{
        axios.get("http://localhost:8989/get-security-question?username="+username)
            .then((res)=> {
                if (res.data.success) {
                    setSecurityQuestion(res.data.securityQuestion)
                } else {
                    alert(res.data.errorCode)

                }
            })

    }


    return (
        <div className="mainFrame">
            <div className="form-container">
                <h2>Enter your username:</h2>
                <form>
                    <input value={username} onChange={(e)=>{setUsername(e.target.value)}} placeholder={"username"} required/>
                    <button disabled={username===""} onClick={getSecurityQuestionByUsername()}>Enter</button>
                </form>
                {
                    username!==""&&
                    <div>
                        <h2>{securityQuestion}</h2>

                    </div>
                }
            </div>
        </div>
        // <div  className="modal-container">
        //     <div className="centered">
        //         <h3>Enter your username: </h3>
        //         <input  placeholder="username" onChange={(e)=>{{setUsername(e.target.value)}}} value={username}/>
        //         <button></button>
        //
        //     </div>
        //
        //
        // </div>
    );
};

export default ForgetPassword;
