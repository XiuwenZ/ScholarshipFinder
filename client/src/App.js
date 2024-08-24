import './App.css';
import Title from './Component/title.jsx'
import Filter from './Component/filter.jsx'
import Scholarship from './Component/scholarship.tsx'
import Footer from './Component/footer.jsx'
import './Component/body.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import React from 'react';

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
