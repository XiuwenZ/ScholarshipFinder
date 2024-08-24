import React from 'react'
import './App.css';
import Title from './Component/title.tsx'
import Filter from './Component/filter.tsx'
import Scholarship from './Component/scholarship.tsx'
import Footer from './Component/footer.tsx'
import './Component/body.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element:
    <div className="body">
      <Filter/>
      <Scholarship/>
    </div>
  },
]);

function App() {
  return (
    <div className="App">
        <Title/>
        <RouterProvider router={router} />
        <Footer/>
    </div>
  );
}

export default App;

// import React, { useState } from 'react';
// import Filter from './Component/filter.tsx'
// import Scholarship from './Component/scholarship.tsx'
// import FetchScholarshipsByGPA from './Component/fetch-scholarship-by-gpa.tsx'

// interface Scholarship {
//   name: string;
//   income_range: string;
//   race: string;
//   awardAmount: string
// }

// function App() {
//   const [scholarships, setScholarships] = React.useState<Scholarship[]>([]);

//   return (
//     <div className="App">
//       <header className="App-header">

//         <FetchScholarshipsByGPA setScholarships={setScholarships} />
//         {scholarships.length > 0 ? (
//           scholarships.map((scholarship) => (
//             <div key={scholarship.name}>
//                   <h1>{scholarship.name}</h1>
//                   <h1>{scholarship.awardAmount}</h1>
//           </div>
//           ))
//         ) : (
//           <p>No scholarships found.</p>
//         )}

//       </header>
//     </div>
//   );
// }

// export default App