import React from 'react'
import './Register.css'
import { useState } from 'react'
import axios from 'axios';
// import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
export default function Register() {
  const Navigate=useNavigate();
  const [name,setname]=useState('');
  const [email,setemail]=useState('');
  const [hostel,sethostel]=useState('');
  const [room,setroom]=useState(0);
  const [roll,setroll]=useState('');
  const [phone,setphone]=useState('');
  const [pass,setpass]=useState('');
    async function handleSubmit(e){
     e.preventDefault();

     const data = {
      email: email,
      pass: pass,
      name: name,
      hostel:hostel,
      room:room,
      roll:roll,
      phone:phone,
    }
    // alert("POST REQUET IN AXIOS")
      const response = await axios({
      method: 'POST',
      url: 'http://localhost:3001/register',
      data: data,
      withCredentials:true,
    })
    if(response.status===200)
    {
      Navigate(response.data,{replace:true});
    }
    else
    alert("Wrong Entry");
    
  }
  return (
    <div>
      <section className="vh-100 gradient-custom">
    <div className="row justify-content-center align-items-center h-100">
      <div className="col-12 col-lg-9 col-xl-7">
        <div className="card shadow-2-strong card-registration" style={{borderRadius:"15px"}}>
          <div className="card-body p-4 p-md-5">
            <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Registration Form</h3>
            <form onSubmit={handleSubmit}>

              <div className="row">
                <div className="col-md-6 mb-4">

                  <div className="form-outline" >
                    <input type="text" name="name" className="form-control form-control-lg" value={name} onChange={(e)=>setname(e.target.value)}/>
                    <label className="form-label" >Name</label>
                  </div>

                </div>
                <div className="col-md-6 mb-4">

                  <div className="form-outline" >
                    <input type="email" name="email" className="form-control form-control-lg" value={email} onChange={(e)=>setemail(e.target.value)}/>
                    <label className="form-label">Institute Email id</label>
                  </div>

                </div>
              </div>

              <div className="row">
                <div className="col-md-6 mb-4 d-flex align-items-center">

                  <div className="form-outline datepicker w-100">
                    <input type="text" className="form-control form-control-lg" name="hostel" value={hostel} onChange={(e)=>sethostel(e.target.value)}/>
                    <label  className="form-label">Hostel Name</label>
                  </div>

                </div>
                <div className="col-md-6 mb-4 d-flex align-items-center">

                  <div className="form-outline datepicker w-100">
                    <input type="Number" className="form-control form-control-lg" name="room" value={room} onChange={(e)=>setroom(e.target.value)} />
                    <label  className="form-label">Room Number</label>
                  </div>

                </div>
              </div>

              <div className="row">
                      <div className="col-md-6 mb-4 d-flex align-items-center">

                        <div className="form-outline datepicker w-100">
                          <input type="text" className="form-control form-control-lg" name="roll" value={roll} onChange={(e)=>setroll(e.target.value)}/>
                          <label  className="form-label">Roll Number</label>
                        </div>

                      </div>
                <div className="col-md-6 mb-4 pb-2">

                  <div className="form-outline">
                    <input type="tel" id="phoneNumber" className="form-control form-control-lg" name="phone" value={phone} onChange={(e)=>setphone(e.target.value)}/>
                    <label className="form-label" for="phoneNumber">Phone Number</label>
                  </div>

                </div>
              </div>

              <div className="s">

                  <div className="form-outline">
                    <input type="password" name="pass" className="form-control form-control-lg"  value={pass} onChange={(e)=>setpass(e.target.value)}/>
                    <label className="form-label" for="pass">Set Password</label>
                  </div>

                </div>

              <div className="mt-4 pt-2">
                <button className="btn11 " type="submit" value="Submit"
                // onClick={()=>{console.log("YOOO")}}
                >Submit</button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
</section>
    </div>
  )
}
