import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {useSelector,useDispatch} from "react-redux"
import "./Login.css";
import axios from "axios";
import { login } from "../../actions/userAction";
import image1 from "../../Images/Rectangle1.jpg"
import { Metadata } from "../layout/Metadata";

export const Login = () => {
  const {user,error,loading,isAuthenticated}  = useSelector((state)=>state.user)

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");


  const handleSubmit = async(e)=>{
    e.preventDefault()
    
    try {
    
      dispatch(login(loginEmail,loginPassword))
    
    } 
    catch (error) {

      if(error){
        alert(error)
      }

    }
    
    
    }
   

  return (
    <>
    <Metadata title = "loginUser"/>
      <div className="login_container">
        <div className="login_form_container">
          <div className="login_left">
        
<img src={image1} alt="" />
      
          </div>
          <div className="login_right">
            <form onSubmit={handleSubmit} action="" className="form_container">
              <h1>Welcome!</h1>
<div className="input_label">
  <label htmlFor="email">Email</label>
              <input
                onChange={(e)=>(setLoginEmail(e.target.value))}
                type="email"
                placeholder="yourmail@gmail.com"
                name="email"
                required
                value={loginEmail}
                className="login_input"
              />
</div>

<div className="input_label">
<label htmlFor="Password">Password</label>

              <input
                onChange={(e)=>setLoginPassword(e.target.value)}
                type="password"
                placeholder="*************"
                name="password"
                required
                value={loginPassword}
                className="login_input"
                />
 </div>

              {error && <div className="error_msg">{error}</div>}

              <div className="btn_flex">
              <button type = "submit" className="login_btn white">Login</button>
              </div>
                
            </form>
          </div>
        </div>
      </div>
    </>
  );
  }
