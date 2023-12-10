import React from 'react'
import { Link,useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
    
  return (
    <Link to='/login'>
    <div className='d-flex justify-content-center align-items-center btn btn-success w-25 rounded-0'>Logout</div>

    </Link>
  )
}

export default Home