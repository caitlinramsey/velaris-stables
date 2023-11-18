import ReactDOM from 'react-dom/client';
import './main.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Home from './pages/home/Home';
import About from './pages/about/About.jsx'
import Boarding from './pages/boarding/Boarding';
import Lessons from './pages/lessons/Lessons';
import Contact from './pages/contact/Contact';
import reportWebVitals from './reportWebVitals';
import Error from './components/error/Error.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/About',
        element: <About />,
      },
      {
        path: '/Boarding',
        element: <Boarding />,
      },
      {
        path: '/Lessons',
        element: <Lessons />,
      },
      {
        path: '/Contact',
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);

reportWebVitals();