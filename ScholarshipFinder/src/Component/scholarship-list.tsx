import { useEffect, useState } from "react";

import { fetchScholarshipList } from "../api-client.ts";

import ScholarshipPreview from "./scholarship-preview.tsx";
import React from "react";

const ScholarshipList = ({ onScholarshipClick }) => {
  const [scholarship, setScholarship] = useState([{name:"", gpa:0, link:""}]
  );

  useEffect(() => {
      fetchScholarshipList().then((scholarship) => {
        setScholarship(scholarship);
      })
  }, []);

  return (
    <>

      <div className="scholarship-list">
        {scholarship.map((scholarship) => {
          return (
            <>
              <ScholarshipPreview
                key={scholarship.name}
                scholarship={scholarship}
                onClick={onScholarshipClick}
              />
              
            </>
          );
        })}
      </div>
    </>
  );
};

export default ScholarshipList;
