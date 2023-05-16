import React from 'react'
import Image from './Image';
import CloudinaryImages from './CloudinaryImages';
import UploadForm from './UploadForm.';

const Dashboard = () => {
  return (
    <div>
        <CloudinaryImages/>
        <UploadForm/>
    </div>
  )
}

export default Dashboard;
