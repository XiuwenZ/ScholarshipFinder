
import React from 'react';
import './App.css';
import AddNewScholarship from './components/add-new-scholarship.tsx';
import ScholarshipList from './components/scholarship-list.tsx';

// //data will be the string we send from our server
// const apiCall = async () => {
//   await fetch('http://localhost:3001/data').then((data) => {
//     //this console.log will be in our frontend console
//     console.log(data)
//   })
// }
// const apiPost = async () => {
//   await fetch('http://localhost:3001/data', {
//     method: "POST",
//     body: JSON.stringify({ name :"Bob Martin Memorial Scholarship",
//                           minimum_credits_needed: 6,
//                           race: "all",
//                           reward_amount: 1500,
//                           gpa: 2.5,
//                           link: "https://sps-cuny.scholarships.ngwebsolutions.com/CMXAdmin/Cmx_Content.aspx?cpId=1254"
// } ),
//     headers: { 'Content-Type': 'application/json'}
//   }).then((response) => {
//     //this console.log will be in our frontend console
//     console.log(response.json())
//   })
// }



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AddNewScholarship onSuccess={true} />
        <ScholarshipList initialScholarship={undefined} onScholarshipClick={undefined}/>

        {/* <button onClick={apiCall}>Make API Call</button>
        <button onClick={apiPost}>Post Data</button> */}

      </header>
    </div>
  );
}

export default App