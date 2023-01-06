import React from 'react'
import './LandingPage.css'
import { useEffect } from 'react';
export default function LandingPage() {
  useEffect(()=>{
    const queryParams = new URLSearchParams(window.location.search);
    queryParams.delete("LOST");
  })
  return (
    <div className='container123' id='container123'>
      <span>HAVE YOU....?</span>
      <div className='split left' onMouseEnter={MouseOverLeft} onMouseLeave={MouseLeaveLeft}>
        <h1>LOST</h1>
        <a href='/login' className='button'>CLICK</a>
      </div>
      <div className='split right' onMouseEnter={MouseOverRight} onMouseLeave={MouseLeaveRight}>
        <h1>FOUND</h1>
        <a  className='button' href="/login" >CLICK</a>
      </div>
      </div>
    )
    
  function MouseOverLeft(e){
    document.querySelector('.container123').classList.add('hover-left');
  }
  function MouseLeaveLeft(e){
    document.querySelector('.container123').classList.remove('hover-left');
    }
  function MouseOverRight(e){
    document.querySelector('.container123').classList.add('hover-right');
  }
  function MouseLeaveRight(e){
    document.querySelector('.container123').classList.remove('hover-right');
  }
  }