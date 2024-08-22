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
        <div className="page">
          <Title/>
          <div className="body">
            <Filter/>
            <Scholarship/>
          </div>
          <Footer/>
        </div>
  },
  {
    path: "/creators",
    element: <div>Bradley Hung, Jinfeng Chen, Shuyi Zhou, Xiuwen Zhu</div>,
  },
]);

function App() {
  return (
    <div className="App">
        <RouterProvider router={router} />
    </div>
  );
}

export default App;
