import { Outlet } from 'react-router-dom';
import Navigation from './components/navigation/Navigation';
// import Footer from './components/footer/Footer'

function App() {
  return (
    <>
      <Navigation />
      <main>
        <Outlet />
        {/* <Footer /> */}
      </main>
    </>
  );
}

export default App;