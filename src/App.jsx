import { useState, useEffect } from 'react';
import Shop from './components/Shop';

export default function App() {
  const walletState = useState(0);
  const cookiesPerSecondState = useState(1);
  const messageState = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      walletState[1](prevWallet => prevWallet + cookiesPerSecondState[0]);
    }, 1000);
    return () => clearInterval(timer);
  }, [cookiesPerSecondState[0]]);

  return (
    <section className="container">
      <h1>Hello, Cookie World!</h1>
      <section className="content">
        <div className="left">
          <img
            src="https://openclipart.org/image/800px/249534"
            alt="Cookie"
            className="cookie-image"
          />
        </div>
        <div className="right">
          <p>Wallet: <span>{walletState[0]}</span> cookies</p>
          <p>Cookies per second: {cookiesPerSecondState[0]}</p>
        </div>
      </section>
      <Shop 
        wallet={walletState[0]}
        setWallet={walletState[1]}
        cookiesPerSecond={cookiesPerSecondState[0]}
        setCookiesPerSecond={cookiesPerSecondState[1]}
        setMessage={messageState[1]}
      />
      <p id="message">{messageState[0]}</p>
    </section>
  );
}