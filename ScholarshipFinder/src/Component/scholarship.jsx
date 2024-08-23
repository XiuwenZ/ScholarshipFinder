import React from 'react'
import Box from '@mui/material/Box';
import './scholarstyle.css';
import { Link } from "react-router-dom";
import ScholarshipList from './scholarship-list.tsx';
import AddNewScholarship from './add-new-scholarship.tsx';

export default function Scholarship() {
  const navigateToApplication = (url) => {
    window.location.href = url;
    
  }
  return (
    <div className="container-scholarship">
      <ScholarshipList  onScholarshipClick={navigateToApplication} />
      <AddNewScholarship onSuccess={true}/>
    </div>
  );
}