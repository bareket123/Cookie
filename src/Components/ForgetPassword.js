import React, {useState} from 'react';
import axios from "axios";
import "../Styles/forgetPasswordStyle.scss";
import {useNavigate} from "react-router-dom";
import ResetPassword from "./ResetPassword";


const ForgetPassword = () => {
    const [username,setUsername]=useState("")
    const [securityQuestionIndex,setSecurityQuestionIndex]=useState("")
    const [securityQuestionAnswer,setSecurityQuestionAnswer]=useState("")
    const [isSubmit,setIsSubmit]=useState(false)
    const [authorizedToChange,setAuthorizedToChange]=useState(false)


    const securityQuestions=[
        "What city were you born in?",
        "What is your oldest sibling’s name?",
        "In what city or town did your parents meet?",
        "What was the name of your first school teacher?"
        ]
    const getSecurityQuestionByUsername=()=>{
        try {
            axios.get("http://localhost:8989/get-security-question?username=" + username)
                .then((res) => {
                    if (res.data.success) {
                        setSecurityQuestionIndex(res.data.securityQuestion)
                    } else {
                        alert(res.data.errorCode)

                    }
                })
        }catch (error){
            console.error("error in fetching security question "+error)
        }
       setIsSubmit(true)

    }
const getSecurityQuestionAnswer = () => {
        try{
            axios.get("http://localhost:8989/get-security-question-answer?username="+username)
                .then((res)=> {
                    if (res.data.success) {
                        const serverAnswer=res.data.securityQuestionAnswer;
                        if (serverAnswer===securityQuestionAnswer){
                          setAuthorizedToChange(true)
                        }else {
                            alert("Unfortunately your answer doesn't not match the one save in our system 😐")
                        }
                    } else {
                        alert(res.data.errorCode)

                    }
                })
        }catch (error){
            console.error("error in fetching security question answer "+error)
        }
}

    return (

          authorizedToChange ?
              <ResetPassword username={username}/>
              :
              <div className="mainFrame">
                  <div className="form-container">
                      <h2>{isSubmit?securityQuestions[securityQuestionIndex-1]:"Enter your username"}</h2>
                      <form>
                          <input
                              onKeyDown={(event) => {
                                  if (event.key === 'Enter')
                                      // Prevent default input behavior
                                      event.preventDefault();
                              }}
                              value={isSubmit ? securityQuestionAnswer : username}
                              onChange={(event) => {isSubmit ? setSecurityQuestionAnswer(event.target.value) : setUsername(event.target.value)}}
                              placeholder={isSubmit ? "write your answer here" : "username"}
                              required
                          />
                          <button
                              disabled={isSubmit ? securityQuestionAnswer === "" : username === ""}
                              onClick={(event) => {
                                  // Prevent default button click behavior
                                  event.preventDefault();
                                  if (isSubmit) {
                                      getSecurityQuestionAnswer();
                                  } else {
                                      getSecurityQuestionByUsername();
                                  }}}>
                              Submit Answer
                          </button>
                      </form>
                  </div>
              </div>









    );
};

export default ForgetPassword;
