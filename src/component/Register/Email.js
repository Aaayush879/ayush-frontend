import React,{useState} from 'react';
import {Form, Button} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'
const Email = () => {
    const [name,setName]=useState('');
    const [msg,setMsg] = useState('');
    const navigate=useNavigate();
    const handleSubmit=(e)=>{
      
      console.log(name);
    
      
      if(name.length<1){
          setMsg("Pelase fill all fields");
          
      }
      else{
          setMsg("");
          navigate('/verify');
          
      }
      e.preventDefault();
      setName("");
      
      
  
    }
    return (
      <div>
        <Form>
          <Form.Label>OTP</Form.Label>
          <Form.Control placeholder='name' value={name} onChange={(e)=>{setName(e.target.value)}}/>
          <Button onClick={handleSubmit}>Verify</Button>
          {msg}
        </Form>
      </div>
    )
}

export default Email
