import { useEffect, useState } from "react";
import { fetchScholarshipList, fetchScholarshipByGPA } from "../api-client.ts";
import ScholarshipPreview from "./scholarship-preview.tsx";
import React from "react";

const ScholarshipList = ({ onScholarshipClick }) => {
  const [scholarships, setScholarships] = useState([{ name: "", gpa: 0, link: "" }]);
  

  useEffect(() => {
    // Fetch all scholarships on initial load
    fetchScholarshipList().then((data) => {
      setScholarships(data);
    });
  }, []);

  

  return (

      <div className="scholarship-list">
        {scholarships.map((scholarship) => (
          <ScholarshipPreview
            key={scholarship.name}
            scholarship={scholarship}
            onClick={onScholarshipClick}
          />
        ))}
      </div>
  );
};

export default ScholarshipList;
