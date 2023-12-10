import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './Signup'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Login from './Login'
import Home from './Home'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route path='/register' element={<Signup/>}/>
            <Route  path='/login' element={<Login/>}/>
            <Route  path='/home' element={<Home/>}/>
          </Routes>
        </Router>
      </div>
      
    </>
  )
}

export default App
