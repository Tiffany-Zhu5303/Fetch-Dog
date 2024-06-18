import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Navbar from './components/navbar';
import Breeds from './pages/Breeds';
import Displays from './pages/Displays';
import Random from './pages/Random';
import Favorites from './pages/Favorites';
import About from './pages/About';

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
      },
      {
        path:"/Random",
        element: <Random />
      },
      {
        path:"/Random/Results",
        element: <Displays />
      },
      {
        path:"/Favorites",
        element: <Favorites />
      },
      {
        path:"/About",
        element: <About/>
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