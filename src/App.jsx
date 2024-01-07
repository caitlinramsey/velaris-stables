import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import Navigation from './components/navigation/Navigation';
// import Footer from './components/footer/Footer'

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  // Define an array of paths where you want to hide the navigation
  const pathsWithoutNavigation = ['/'];

  // Check if the current path is in the array of paths without navigation
  const showNavigation = !pathsWithoutNavigation.includes(location.pathname);

  // Redirect to the home page if the user tries to access a path without navigation
  if (!showNavigation) {
    navigate('/');
  }

  return (
    <>
      {showNavigation && <Navigation />}
      <main>
        <Outlet />
        {/* <Footer /> */}
      </main>
    </>
  );
}

export default App;
