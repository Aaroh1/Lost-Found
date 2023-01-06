import React from 'react'
import NavigationBar from './NavigationBar';
import { Outlet } from 'react-router-dom';
/* import ItemDisplay from './ItemDisplay';
import Dashboard from './Dashboard';
import FileUpload from './FileUpload';
import { Routes,Route, BrowserRouter } from 'react-router-dom'; */
export default function MainPage() {
  return (
    <div>
        <NavigationBar>
          <Outlet />
        </NavigationBar>    
    </div>
  )
}
