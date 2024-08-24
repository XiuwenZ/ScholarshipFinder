import * as React from "react";

const ScholarshipPreview = ({ scholarship, onClick }) => {
  const handleClick = (event) => {
    event.preventDefault();

    onClick(scholarship.link);
  };

  return (
    <div className="Box" onClick={handleClick}>
      <div className="scholarship">{scholarship.name}</div>
    </div>
  );
};

export default ScholarshipPreview;
