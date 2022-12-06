import { RouterProvider } from 'react-router-dom';
import './App.css';
import { routes } from './Routes/Routes';

function App() {
  return (
    <div className="">
      
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
