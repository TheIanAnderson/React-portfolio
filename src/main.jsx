import ReactDOM from 'react-dom/client'
// Bringing in the required imports from 'react-router-dom' to set up application routing behavior
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

import App from './App';
import Error from './pages/Error';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Blog from './pages/Resume';

// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: '/React-portfolio',
    element: <App />,
    errorElement: <Error />,
    children: [
      { 
        index: true,
        element: <Home />,
      },
      {
        path: '/React-portfolio/Portfolio',
        element: <About />,
      },
      {
        path: '/React-portfolio/Contact',
        element: <Contact />,
      },
      {
        path: '/React-portfolio/Resume',
        element: <Blog />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
