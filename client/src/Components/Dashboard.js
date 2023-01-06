import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { CCard, CRow, CCol, CCardImage, CCardBody, CCardTitle, CCardText } from '@coreui/react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
export default function Dashboard() {
  const [userItems, setuserItems] = useState([]);
  const search = useLocation().search;
  const qparams = new URLSearchParams(search);
  const imgpath = 'http://localhost:3001/public/img/';
  const [show, setShow] = useState(false);
  const [currentdata,setcurrentdata]=useState('');
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  async function Delete(it) {
    console.log(it);
    await axios(
      {
        method: "DELETE",
        data: { email: qparams.get("q"), item: it._id },
        withCredentials: true,
        url: "http://localhost:3001/deleteitem",
      }
    ).then((da) => console.log(da));
  }
  useEffect(() => {
    axios({
      mehod: "GET",
      withCredentials: true,
      url: "http://localhost:3001/Dashboard",
      params: { email: qparams.get("q") }
    }).then((data) => { setuserItems(data.data); });
  },[])
  
  const ItemCard = (data) => {
    return (
      <CCard className="mb-3 border-dark" style={{ width: '440px', height: "200px" }}>
        <CRow className="g-0">
          <CCol md={4}>
            <CCardImage src={imgpath + data.item} style={{ width: "180px", height: "200px" }} />
          </CCol>
          <CCol md={6}>
            <CCardBody style={{ marginLeft: "40px", marginTop: "-10px", width:"240px" }}>
              <CCardTitle>{data.type}</CCardTitle>
              <CCardText>
                {data.desc}
              </CCardText>
              <CCardText>
                <small className="text-medium-emphasis">Found on {data.date.slice(0, 10)} in {data.location}</small>
              </CCardText>
              <Button variant="outline-danger" onClick={()=>{handleShow();setcurrentdata(data)}}><img src="https://img.icons8.com/color/48/000000/delete-forever.png" style={{ height: "25px", width: "25px" }} /></Button>{' '}
            </CCardBody>
          </CCol>
        </CRow>
      </CCard>
    )
  }
  function DisplayItemCards() {
    return (userItems?.map((it) => { return ItemCard(it) }));
  }

  return (

    <div className='DisplayUserItems' style={{ width: "100%", display: "flex", alignItems:"center",flexDirection: "column-reverse" ,marginLeft:"0%"}}> 
     {DisplayItemCards()} 
     <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Warning!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this item?</Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleClose}>
            NO
          </Button>
          <Button variant="danger" onClick={()=>{handleClose();Delete(currentdata)}}>
            YES
          </Button>
        </Modal.Footer>
      </Modal>
     
     </div>
    
  )
}
