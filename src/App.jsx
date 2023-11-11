import { Outlet } from 'react-router-dom';
import Navigation from './components/Nav/Nav';
// import Footer from './components/footer/Footer'

function App() {
  return (
    <>
      <Navigation />
      <main className='mx-3'>
        <Outlet />
        <Footer />
      </main>
    </>
  );
}

export default App;