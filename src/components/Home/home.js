import React from 'react'
import './Home.css'
import sidebar from './sidebar'
import table from './table'
const home = () => {
  return (
    <div>
    
      <div className="navbar">
        <div></div>
        <div><h2>username</h2></div>
      </div>
      <div>
        <sidebar />
        <table />
      </div>
      
    </div>
  )
}

export default home
