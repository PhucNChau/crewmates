import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';

function App() {
  
  let router = createBrowserRouter([
    {
      path: "/",
      // element: 
    },
    {
      path: "/create",
      // element: 
    },
    {
      path: "/edit/:id",
      // element: 
    },
    {
      path: "/gallery",
      // element: 
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
};

export default App;
