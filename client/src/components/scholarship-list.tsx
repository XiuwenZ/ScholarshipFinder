import { useEffect, useState } from "react";

import { fetchScholarshipList } from "../api-client.ts";

import ScholarshipPreview from "./scholarship-preview.tsx";
import React from "react";

const ScholarshipList = ({ initialScholarship, onScholarshipClick }) => {
  const [scholarship, setScholarship] = useState(
    initialScholarship ?? [],
  );

  useEffect(() => {
    if (!initialScholarship) {
      fetchScholarshipList().then((scholarship) => {
        setScholarship(scholarship);
      });
    }
  }, [initialScholarship]);

  return (
    <>

      <div className="contest-list">
        {scholarship.map((scholarship) => {
          return (
            <ScholarshipPreview
              key={scholarship.name}
              scholarship={scholarship}
              onClick={onScholarshipClick}
            />
          );
        })}
      </div>
    </>
  );
};

export default ScholarshipList;
