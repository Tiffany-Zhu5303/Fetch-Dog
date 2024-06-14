import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Navbar from './components/navbar';
import Breeds from './pages/Breeds';
import Displays from './pages/Displays';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        index:true,
        element: <App />
      },
      {
        path:"/Breed",
        element: <Breeds />,
      },
      {
        path:"/Breed/Results",
        element: <Displays />
      }
    ],
  },
], {
  basename: "/Fetch-DogAPI",
});

const AppRouter = () => {
    return(
        <RouterProvider router={router} />
    );
};

export default AppRouter;