import React,{useState} from 'react'
import {Form, Button} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';

const Signin = () => {
  const [formData , setFormData] = useState({
    email:'',
    password:'',
  })
  const history=useNavigate();
  
  const handleSubmit=async(e)=>{
    e.preventDefault();
    console.log(formData);
    axios.post('http://localhost:5000/signin',formData)
    .then(response => {
      console.log(response);
      history('/dashboard');
    })
    .catch(error => {
      console.log(error);
    });
  }
    
    

  
  return (
    <div>
      <Form  onSubmit={handleSubmit}>
        <Form.Label>email</Form.Label>
        <Form.Control placeholder='email' value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})}/>
        <Form.Label>Password</Form.Label>
        <Form.Control placeholder='password' type='password' value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})}/>
        <Button>Signin</Button>
        
      </Form>
    </div>
  )
}

export default Signin;