import React,{useState} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios';
const Login = () => {
    const navigate = useNavigate()
    
    const [email,setEmail] = useState()
    const [password,setPassword] = useState()
    const [err,setErr] = useState('')

    const handleSubmit =(e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/login',{email,password})
        .then(result =>{console.log(result)
            if(result.data === "Success"){
                navigate('/home')
            }else if(result.data === "No record existed"){
               setErr("not registred")
            }else if(result.data === "password incorrect"){
                setErr('password incorrect')
            }
        })
        .catch(err => console.log(err))
    }
  return (
    <div className='d-flex justify-content-center align-items-center  bg-secondary vw-100 vh-100'>
    <div className='bg-white p-3 rounded w-25'>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
           
            <div className='mb-3'>
                <label htmlFor="email">
                    <strong>Email</strong>
                </label>
                <input
                type="email"
                placeholder="Enter Email"
                autoComplete="off"
                name="email"
                className='form-control rounded-0'
                onChange={(e) => setEmail(e.target.value)}

                />
            </div>
            <div className='mb-3'>
                <label htmlFor="email">
                    <strong>Password</strong>
                </label>
                <input
                type="password"
                placeholder="Enter password"
                autoComplete="off"
                name="password"
                className='form-control rounded-0'
                onChange={(e) => setPassword(e.target.value)}

                />
            </div>
            <p>{err}</p>
            <button type="submit" className='btn btn-success w-100 rounded-0'>
                Login
            </button>
            
            
        </form><p>Already have an account</p>
        <Link to='/register'>
       
        <button className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'> 
                Register
            </button> </Link>
    </div>

</div>
  )
}

export default Login