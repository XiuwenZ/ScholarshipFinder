
import React from 'react';
import FetchScholarshipsByGPA from './fetch-scholarship-by-gpa.tsx';
import ScholarshipList from './scholarship-list.tsx';

// //data will be the string we send from our server


interface Scholarship {
  name: string;
  income_range: string;
  race: string;
  awardAmount: string
}

function List() {
  const [scholarships, setScholarships] = React.useState<Scholarship[]>([]);

  
  

  return (
    <div className='scholarship' >
      
        <FetchScholarshipsByGPA setScholarships={setScholarships} />
        {scholarships.length > 0 ? (
          scholarships.map((scholarship) => (
            <div className="scholarship" key={scholarship.name}>
                  <h1>{scholarship.name}</h1>
                  <h1>{scholarship.awardAmount}</h1>
          </div>
          ))
        ) : (
          <ScholarshipList onScholarshipClick={undefined}/>
        )}
    </div>
  );
}

export default List