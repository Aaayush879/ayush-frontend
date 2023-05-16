import React from 'react'
import Email from '../Register/Email';
import Register from '../Register/Register';
import Signin from '../Signin/Signin';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

const Login = () => {
  return (
    <div style={{width:'500px' ,height:'500px'}}>
      <Router>
        <Routes>
          <Route exact path='' element={<Register/>}/>
          <Route path='verify' element={<Email/>}/>
          <Route path='signin' element={<Signin/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default Login;
