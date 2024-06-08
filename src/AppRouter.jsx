import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Navbar from './components/navbar';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        index:true,
        element: <App />
      },
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