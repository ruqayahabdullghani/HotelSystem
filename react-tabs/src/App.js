import './App.css';
import Dashbored from './components/Dashbored';
import Home from './components/Home';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
      <Route path="/" element={<Home/>}/>  
      <Route path="/dashbored" element={<Dashbored/>}/>  
      </Route>


    
    )

  );
  return (
    <RouterProvider router={router} />

    );
}

export default App;
