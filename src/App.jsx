import { Outlet } from 'react-router-dom';
import Nav from './components/nav/Nav';
import Header from './components/header/Header';
// import Footer from './components/footer/Footer'

function App() {
  return (
    <>
    <Header />
      <Nav />
      <main>
        <Outlet />
        {/* <Footer /> */}
      </main>
    </>
  );
}

export default App;