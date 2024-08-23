import React, { useState } from 'react';
import { fetchScholarshipByGPA } from '../api-client.ts';

const FetchScholarshipsByGPA = ({ setScholarships }) => {
  const [gpa, setGpa] = useState('');


  const handleFetchByGPA = async (event) => {
    console.log("fetching scholarships by gpa")
    event.preventDefault();
    try {
      const scholarships = await fetchScholarshipByGPA(gpa);
      console.log('Fetched scholarships:', scholarships); // Log the response
      setScholarships(scholarships);
      console.log('Updated state:', scholarships); // Log the updated state
    } catch (error) {
      console.error('Error fetching scholarships:', error);
    }
  };

  return (
    <form onSubmit={handleFetchByGPA}>
      <input
        type="text"
        placeholder="Enter GPA to fetch scholarships"
        value={gpa}
        onChange={(e) => setGpa(e.target.value)}
      />
      <button type="submit">Fetch Scholarships</button>
    </form>
  );
};

export default FetchScholarshipsByGPA;