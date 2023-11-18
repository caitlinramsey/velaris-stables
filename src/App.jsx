import { Outlet } from 'react-router-dom';
import Navigation from './components/navigation/Navigation';
import Header from './components/header/Header';
// import Footer from './components/footer/Footer'

function App() {
  return (
    <>
    <Header />
      <Navigation />
      <main>
        <Outlet />
        {/* <Footer /> */}
      </main>
    </>
  );
}

export default App;