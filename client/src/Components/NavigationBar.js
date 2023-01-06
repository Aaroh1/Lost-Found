import React from 'react'
import './Nav.css'
import axios from 'axios';
import one from "../img/Group3.png"
import two from "../img/Group2.png"
import three from "../img/Group3.svg"
import { useNavigate, useLocation, Link } from 'react-router-dom';
import Button from 'react-bootstrap/esm/Button';
import Carousel from 'react-bootstrap/Carousel';


export default function NavigationBar(props) {
  const search = useLocation().search;
  const qparams = new URLSearchParams(search);
  const Navigate = useNavigate();
  async function logout() {
    await axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:3001/Logout",
    });
    Navigate("/", { replace: true });
  }
  function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.querySelector(".RightSide").style.opacity = "80%";
  }

  function closeNav() {
    document.getElementById("mySidebar").style.width = "70px";
    document.querySelector(".RightSide").style.opacity = "100%";
  }
  return (
    <div>
       <div id="mySidebar" className="sidebar" onMouseOver={openNav} onMouseLeave={closeNav} >
        <Link to={`/Home?q=${qparams.get('q')}`} className="link"><img fetchpriority="high" className='i' src="https://img.icons8.com/ios/50/000000/home--v1.png" />HOME</Link>
        <Link to={`/Home/Upload?q=${qparams.get('q')}`} className="link"><img fetchpriority="high" className='i' src="https://img.icons8.com/external-those-icons-lineal-those-icons/100/000000/external-Add-notes-those-icons-lineal-those-icons.png" />ADD ITEM</Link>
        <Link to={`/Home/Dashboard?q=${qparams.get("q")}`} className="link"><img fetchpriority="high" className='i' src="https://img.icons8.com/ios-glyphs/90/000000/person-male.png" />USER PAGE</Link>
      </div>
      <div className='RightSide' >
        <div className="HorizontalNav">
          {/* <h2>Collapsed Sidebar</h2> */}
          <Carousel fade style={{width:"100%", marginLeft:"0"}} controls={false} >
      <Carousel.Item>
        <img
          className="d-block"
          src={three}
          alt="First slide"
        />
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={one}
          alt="Second slide"
        />

       {/*  <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={two}
          alt="Third slide"
        />
{/* 
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
          <Button variant="secondary" onClick={logout}>Logout</Button>{' '}
        </div>
        <div className='DisplayItems'>
        {props.children}
        </div>

        <div className="Footer">
        
        </div>
      </div>
     
    </div>
  )
}
