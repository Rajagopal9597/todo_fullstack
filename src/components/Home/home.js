import React from 'react'
import './Home.css'
import {Link} from 'react-router-dom'
import Login from '../login/Login'
import Sidebar from './sidebar'
import Table from './table'
const home = () => {
  return (
    <div>
    
      <div className="navbar">
        <div></div>
        <div><h2>username</h2></div>
      </div>
      
      <div className="components">
        <Sidebar />
        <Table />
      </div>
      
    </div>
  )
}

export default home


    
             

        
