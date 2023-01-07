import React from 'react'
import './Home.css'
import {Link} from 'react-router-dom'

const sidebar = () => {
  return (
    <div>
      <div className="sidebar">
        <div>
          <h2>To do List</h2><br></br>
          <h2>History</h2>
        </div>
        <div className="logout">
          <Link to="/">Logout</Link>
        </div>
    </div>
    </div>
  )
}

export default sidebar
