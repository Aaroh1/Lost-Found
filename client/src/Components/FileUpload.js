import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import axios from 'axios';
import {useNavigate, useLocation } from 'react-router-dom';
// import './'
export default function FileUpload() {
  
    const [item,setItem]=useState('');
    const [location,setLoc]=useState('');
    const [date,setDate]=useState('');
    const [type,setType]=useState('');
    const [desc,setDesc]=useState('');
    
    const search=useLocation().search;
    const qparams=new URLSearchParams(search);
    const Navigate=  useNavigate()


    async function handleSubmit(e)
    {
        e.preventDefault();
        if(!item||!location||!date||!type||!desc)
        {alert("Please Fill all subfields");return;}
        const formdata=new FormData();
        formdata.append('item',item);
        formdata.append('location',location);
        formdata.append('date',date);
        formdata.append('type',type);
        formdata.append('desc',desc);
        const response= await axios.post("http://localhost:3001/Upload",formdata,{params:{email:qparams.get("q")}})
        if(response.data)
        Navigate(`/Home?q=${qparams}`, { replace: true });
    }
    return (
    <div style={{display:"flex", justifyContent:"center"}}>
<Form  onSubmit={handleSubmit} style={{width:"80%", border:"1px black solid", borderRadius:"5px", marginTop:"5vh" }} enctype="multipart/form-data">
      <Form.Group className="mb-3" > 
        <Form.Label>Item Type</Form.Label>
        <Form.Control type="text" placeholder="Enter type of item" value={type} onChange={(e)=>setType(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" > 
        <Form.Label>Location Found</Form.Label>
        <Form.Control type="text" placeholder="Enter location of item recovery" value={location} onChange={(e)=>setLoc(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" > 
        <Form.Label>Date Found</Form.Label>
        <Form.Control type="date" placeholder="Enter date of item recovery" value={date} onChange={(e)=>setDate(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" > 
        <Form.Label>Item Description</Form.Label>
        <Form.Control type="text" placeholder="Describe the item" value={desc} onChange={(e)=>setDesc(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Upload File</Form.Label>
        <Form.Control type="file" placeholder="File" onChange={(e)=>setItem(e.target.files[0])}/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  )
}
