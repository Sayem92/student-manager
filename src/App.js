
import { RouterProvider } from 'react-router-dom';
import './App.css';
// import { AddStudent } from './components/AddStudent/AddStudent';
import { router } from './components/Routes/Routes';

function App() {
  return (
    <div className="">
      {/* <AddStudent></AddStudent> */}
      <RouterProvider router={router}></RouterProvider>
   
    
    </div>
  );
}

export default App;
