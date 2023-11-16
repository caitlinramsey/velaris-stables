import { Outlet } from 'react-router-dom';
import Navigation from './components/Nav/Nav';
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