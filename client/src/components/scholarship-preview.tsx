import * as React from "react";

const ScholarshipPreview = ({ scholarship, onClick }) => {
  const handleClick = (event) => {
    event.preventDefault();

    onClick(scholarship.name);
  };

  return (
    <div className="scholarship-preview link" onClick={handleClick}>
      <div className="gpa">{scholarship.gpa}</div>
      <div className="scholarship">{scholarship.name}</div>
    </div>
  );
};

export default ScholarshipPreview;
