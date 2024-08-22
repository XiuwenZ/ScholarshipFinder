import './App.css';
import Title from './Component/title'
import Filter from './Component/filter'
import Scholarship from './Component/scholarship'
import Footer from './Component/footer.jsx'
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
