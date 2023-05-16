import React,{useState} from 'react'
import {Form, Button} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const [formData , setFormData] = useState({
    name:'',
    email:'',
    password:'',
    dob:''
  })
  const history = useNavigate();
  const handleSubmit=async(e)=>{
    e.preventDefault();
    console.log(formData);
    axios.post('http://localhost:5000/register',formData)
    .then(response => {
      console.log(response);
      history("/dashboard" );
    })
    .catch(error => {
      console.log(error);
    });
        
        
    
    //e.preventDefault();
    
    

  }
  return (
    <div >
      <Form onSubmit={handleSubmit}>
        <Form.Label>Name</Form.Label>
        <Form.Control placeholder='name' value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})}/>
        <Form.Label>Email</Form.Label>
        <Form.Control placeholder='email' value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})}/>
        <Form.Label>Password</Form.Label>
        <Form.Control placeholder='password' type='password' value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})}/>
        <Form.Label>DOB</Form.Label>
        <Form.Control  type='date' value={formData.dob} onChange={(e) => setFormData({...formData, dob: e.target.value})}/>
        <Button type='submit'>Register</Button>
        
        <a href='/signin'>Already have a account</a>
      </Form>
    </div>
  )
}

export default Register;
