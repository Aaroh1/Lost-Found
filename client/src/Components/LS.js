import React, { useEffect } from 'react'
import './LS.css'
import { useState } from 'react';
import axios from 'axios';
import {useNavigate} from "react-router-dom";
export default function LS() {
 /*  const[isLOST,sets]=useState(0)
  useEffect(()=>{
    const queryParams = new URLSearchParams(window.location.search);
    sets(queryParams.get("LOST"));
  }) */
  const [email,setemail]=useState('');
  const[pass,setpass]=useState('');
  let navigate=useNavigate();
  async function handleSubmit(e){
    e.preventDefault();
    const data = {
     email: email,
     pass: pass,
    }
     const response = await axios({
     method: 'POST',
     url: 'http://localhost:3001/login',
     data: data,
     withCredentials:true,
   })
   console.log(response);
   navigate(response.data,{replace:true});
   
   /* if(response.status===200)
    {
      navigate(response.data);
    }
    else
    alert("Wrong Entry"); */
   
 }
  return (
    <div>
      <section className="h-100 gradient-form"  style={{background: " linear-gradient(to right top, #8d1f36, #8c1b2f, #8a1828, #881521, #86121a, #8f171b, #981c1d, #a1211e, #b82d29, #cf3835, #e74342, #ff4f4f)"}}>
  {/* <div className="container py-5 h-100"> */}
    <div className="row d-flex justify-content-center align-items-center " style={{height:"100vh"}}>
      <div className="col-xl-10">
        <div className="card rounded-3 text-black">
          <div className="row g-0">
            <div className="col-lg-6">
              <div className="card-body p-md-5 mx-md-4">

                <div className="text-center">
                  <img src="https://freesvg.org/img/Claim-Your-Lost-and-Found-Clipart-2014081127.png"
                    style={{width: "185px"}} alt="logo"  fetchpriority="high" />
                </div>

                <form onSubmit={handleSubmit}>
                  <p>Login to your Account</p>

                  <div className="form-outline mb-4">
                    <input type="email" name="email" className="form-control"
                        value={email} onChange={(e)=>setemail(e.target.value)}/>
                    <label className="form-label" for="form2Example11">Institute Email Id</label>
                  </div>

                  <div className="form-outline mb-4">
                    <input type="password" name="pass" className="form-control"  value={pass} onChange={(e)=>setpass(e.target.value)}/>
                    <label className="form-label" for="form2Example22">Password</label>
                  </div>

                  <div class="text-center pt-1 mb-5 pb-1">
                    <button class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="submit" >Log
                      in</button>
                  </div>

                  <div className="d-flex align-items-center justify-content-center pb-4">
                    <p className="mb-0 me-2">Don't have an account?</p>
                    <a href="/register">
                    <button type="button" className="btn btn-outline-danger" >Register Here</button>
                    </a>
                  </div>

                </form>

              </div>
            </div>
            <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
              <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                <h4 className="mb-4">The Lost and Found Hub</h4>
                <p className="small mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  
</section>
    </div>
  )
  
}



