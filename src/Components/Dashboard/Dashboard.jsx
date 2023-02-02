import React from 'react'
import { Link } from 'react-router-dom';


const Dashboard = () => {
  return (
    <div>
    <h1>Hello.....</h1>
    <br></br>
    <h2>Welcome to Dashboard</h2>
    <br></br>
    <Link to="/login">
        <button>Log out</button>
      </Link>
  
    
    </div>
  )
}

export default Dashboard