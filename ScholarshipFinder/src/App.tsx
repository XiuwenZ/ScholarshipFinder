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
