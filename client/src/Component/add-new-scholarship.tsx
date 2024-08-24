import { useState } from "react";
import { addScholarship } from "../api-client.ts";
import React from "react";

const AddNewScholarship = ({ onSuccess }) => {
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const newScholarshipData = {
      name: form.scholarshipName.value,
      link: form.link.value,
      gpa: form.gpa.value,
      
    };
    const newScholarship = await addScholarship(newScholarshipData);
  };

  return (
    <div className="add-new-scholarship">
      {!showForm && (
        <div className="link" onClick={() => setShowForm(true)}>
          Add New Scholarship
        </div>
      )}

      {showForm && (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="scholarship Name"
            name="scholarshipName"
          />
          <input
            type="text"
            placeholder="scholarship link"
            name="link"
          />
          <input
            type="text"
            placeholder="gpa requierment"
            name="gpa"
          />
          <button type="submit">Sumbit</button>
        </form>
      )}
    </div>
  );
};

export default AddNewScholarship;
