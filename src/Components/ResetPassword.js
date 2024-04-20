import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import axios from "axios";
import {useNavigate} from "react-router-dom";
const ResetPassword = (props) => {
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const navigate=useNavigate();

    const togglePasswordVisibility = (field) => {
        if (field === 'password') {
            setShowPassword(!showPassword);
        } else if (field === 'confirmPassword') {
            setShowConfirmPassword(!showConfirmPassword);
        }
    };
    const resetPassword = () => {
        console.log("username is "+ props.username)
        try {
            if (password!==""){
                axios.post("http://localhost:8989/reset-password?",null,{
                    params:{
                        username:props.username,
                        newPassword:password
                    }
                }).then((response)=>{
                    if (response.data.success){
                        alert("password change successfully")
                        navigate("../")
                    }else {
                        alert(response.data.errorCode)
                    }
                })
            }else {
                alert("password is empty")
            }

        }catch (error){
            console.error("error changing password "+ error)
        }

    }


    const disableButton=()=>{
     let notValid=false;
      if (password!==repeatPassword || password===""|| repeatPassword===""){
          if ( password.length < 6)
               notValid=true;
      }
      return notValid;
    }
    return (
        <div>
            <div className="mainFrame">
                <div className="form-container">
                    <h2>Reset account password</h2>
                    <form>
                        <div>
                            <input
                                onKeyDown={(event) => {
                                    if (event.key === 'Enter')
                                        // Prevent default input behavior
                                        event.preventDefault();
                                }}
                                value={password}
                                onChange={(event)=>{setPassword(event.target.value)}}
                                type={showPassword ? "text" : "password"}
                                placeholder={"new password"}
                                required
                            />
                            <button onClick={() => togglePasswordVisibility('password')}>
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>
                        </div>
                        <div>
                            <input
                                onKeyDown={(event) => {
                                    if (event.key === 'Enter')
                                        // Prevent default input behavior
                                        event.preventDefault();
                                }}
                                type={showConfirmPassword ? "text" : "password"}
                                placeholder={"confirm new password"}
                                required
                                value={repeatPassword}
                                onChange={(event)=>{setRepeatPassword(event.target.value)}}
                            />

                            <button onClick={() => togglePasswordVisibility('confirmPassword')}>
                                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>
                            {
                                password!==""&&repeatPassword!==""&&
                                <div>
                                    {
                                        password!==repeatPassword &&
                                        <div style={{color:"red",marginBottom:"10px"}}>
                                            Password not match❗❗❗
                                        </div>
                                    }
                                    {
                                        password.length<6&&
                                        <div style={{color:"red",marginBottom:"10px"}}>Password need to be 6 length long❗❗❗</div>

                                    }


                                </div>
                            }


                        </div>
                        <button type="button" disabled={disableButton()} onClick={resetPassword}>
                            Reset Password
                        </button>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default ResetPassword;
