import React from 'react'
import Box from '@mui/material/Box';
import './scholarstyle.css';
import { Link } from "react-router-dom";
import ScholarshipList from './scholarship-list.tsx';
import AddNewScholarship from './add-new-scholarship.tsx';
import FetchScholarshipsByGPA from './fetch-scholarship-by-gpa.tsx';
import List from './List.tsx';



export default function Scholarship() {
  const navigateToApplication = (url) => {
    window.location.href = url;
    
  }

  // const [page, setPage] = useState<"allList" | "filteredList">("allList");
  

  // useEffect(() => {
  //   window.onpopstate = (event) => {
  //     const newPage = event.state?.filter
  //       ? "filteredList"
  //       : "allList";
  //     setPage(newPage);
      
  //   };
  // }, []);

  
 

  // const pageContent = () => {
  //   switch (page) {
  //     case "allList":
  //       return (
  //         <div className="container-scholarship">
  //         <ScholarshipList  onScholarshipClick={navigateToApplication} />
  //         <AddNewScholarship onSuccess={true} />
      
  //   </div>
  //       );
  //     case "filteredList":
  //       return (
  //         <div className="container-scholarship">
  //         <ScholarshipList  onScholarshipClick={navigateToApplication} />
  //           <AddNewScholarship onSuccess={true} />
  //         </div>
          
  //       );
  //   }
  // };

  // return <div className="container">{pageContent()}</div>;

  return (
    <div className="container-scholarship">
      <List />
      <AddNewScholarship onSuccess={true} />
      
    </div>
  );
}