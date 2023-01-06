import React, { useEffect } from 'react'
import './ID.css'
import { useState } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useNavigate } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
export default function ItemDisplay() {
  const [allItems, setallItems] = useState([]);
  const [searchValue, setsearch] = useState('');
  const imgpath = 'http://localhost:3001/public/img/';
  const Navigate = useNavigate();
  let itemarray=allItems
  function handleSearchChange() {
    if (!searchValue.length) { return DisplayItemCards(itemarray); }
    else {
      return DisplayItemCards(itemarray.filter((p) => {
        if (((p.type).toLowerCase()).includes(searchValue.toLowerCase()))
          return p
      }))
    }
  }
 
  useEffect(() => {
    axios({
      method: "get",
      withCredentials: true,
      url: "http://localhost:3001/Home",
    }).then((data) => {
      console.log("HERE")
      if (data.status === 200)
        Navigate(data.data, { replace: true });
    })
  }, [])
  useEffect(() => {
    axios({
      method: "get",
      withCredentials: true,
      url: "http://localhost:3001/getAllItems",
    }).then((data) => {
      console.log(data.data);
      setallItems(data.data);
    });
  }, [])
  function DisplayItemCards(filtereditems) {
    return (filtereditems?.map((it) => { return ItemCard(it) }));
  }
  const ItemCard = (itemdata) => {
    return (<Card style={{ width: '20rem', border: "black 1px solid", marginBottom: "7px" }}>
      <Card.Img variant="top" src={imgpath + itemdata.item} style={{ height: '12rem' }} />
      <Card.Body >
        <Card.Title>{itemdata.type}</Card.Title>
        <Card.Text>
          {itemdata.desc}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Found On: {itemdata.date.slice(0, 10)}</ListGroup.Item>
        <ListGroup.Item>Found in: {itemdata.location}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>)
  }

  function sortDate(){
    console.log("SortDate")
    itemarray.sort((a, b) => (a.date > b.date) ? 1 : -1)
    console.log(itemarray);
  }
  function sortLoc(){
    console.log("SortLoc")
    itemarray.sort((a, b) => (a.location > b.location) ? 1 : -1)
    console.log(itemarray);
  }
  
  return (
    <div style={{width:"100%",
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap"}}>
      
       
          <div className='Filtering' style={{ width: "100%", marginBottom: "5%", display:"flex",justifyContent:"space-around" }}>
            <div className='SearchBorder'>
              <input className='Search Bar' value={searchValue} placeholder="Type Item Name...." onChange={(e) => { setsearch(e.target.value); }} style={{ width: "450px", height: "50px", borderRadius: "50px", padding: "20px" }} />
            </div>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic" style={{marginTop:"10px"}}>
                Sort By
              </Dropdown.Toggle>

              <Dropdown.Menu >
                <Dropdown.Item href="#/action-1" onClick={sortDate}>Date</Dropdown.Item>
                <Dropdown.Item href="#/action-2" onClick={sortLoc}>Location</Dropdown.Item>
               </Dropdown.Menu>
            </Dropdown>
          </div>
          {handleSearchChange()}
        </div>
  )
}