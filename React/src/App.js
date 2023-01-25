import { useState, Suspense } from 'react';
import useToggle from './custom-hooks/use-toggle'

import Nav from './components/Layout/NavBar/Nav'
import Footer from './components/Layout/Footer'
import Cart from './components/Cart/Cart';
import Reservation from './components/UI/Reservation';
import Loading from './components/UI/Loading'
import AuthForm from './components/Auth/AuthForm';
import PageRoutes from './PageRoutes';

import './App.css';


function App() {
  const [reservationIsShown, setReservationIsShown] = useToggle();
  const [CartIsShown, setCartIsShown] = useToggle();
  const [AuthIsShown, setAuthIsShown] = useToggle();
  const [theme, setTheme] = useState('light');

  /**
   * If the current theme is light, set the theme to dark. Otherwise, set the theme to light
   */
  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
  }

  return (
    <div id={theme}>
      <Suspense fallback={<div className='loading'><Loading /></div>}>
        {reservationIsShown && <Reservation onClose={setReservationIsShown} />}
        {CartIsShown && <Cart onClose={setCartIsShown} />}
        {AuthIsShown && <AuthForm onClose={setAuthIsShown} />}
        {<Nav onShowReservation={setReservationIsShown} onShowCart={setCartIsShown} onShowAuth={setAuthIsShown} onToggle={toggleTheme} />}
        <PageRoutes />
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
