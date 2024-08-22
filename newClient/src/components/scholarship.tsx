import { useEffect, useState } from "react";

import {
  fetchScholarship,
} from "../api-client.ts";

import Header from "./header";
import React from "react";

const Scholarship = ({ onContestListClick }) => {
  const [scholarship, setScholarship] = useState({ name: " ", description: '' });

  useEffect(() => {
    if (!scholarship.name.length) {
      fetchScholarship(scholarship.name).then((scholarship) => {
        setScholarship(scholarship);
      });
    }
  }, [scholarship]);

  const handleClickContestList = (event) => {
    event.preventDefault();
    onContestListClick();
  };

 
  return (
    <>
      <Header message={scholarship.name} />
      <div className="scholarship">
        <div className="title">Scholarship Description</div>
        <div className="description">{scholarship.description}</div>

        <div className="title">Link</div>
        

        

        <a
          href="/"
          className="link"
          onClick={handleClickContestList}
        >
          Contest List
        </a>
      </div>
    </>
  );
};

export default Scholarship;
