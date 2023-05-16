import logo from './logo.svg';
import './App.css';
import Register from './component/Register/Register';
import Email from './component/Register/Email';
import Signin from './component/Signin/Signin';
import Login from './component/Landing/Login';
import UploadForm from './component/Dashboard/UploadForm.';
import CloudinaryImages from './component/Dashboard/CloudinaryImages';
import Image from './component/Dashboard/Image';
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';
import Dashboard from './component/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' component={<Login/>}/ >
          <Route path="/dashboard"  component={<Dashboard/>}/>
        </Routes>
      </Router>
      <Login/>
    </div>
  );
}

export default App;
