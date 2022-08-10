import { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
// import './App.css'

const cookieName = 'ARRAffinity'

export function Home() {

  const [cookieData, setCookieData] = useState('');
  const [url, setUrl] = useState('');

  useEffect(() => {
    init();
  }, []);

  const init = () => {
    setCookieData(Cookies.get(cookieName) || 'NULL');
    setUrl(window.location.hostname);
  };

  return (
    <div className="App">
      <h2>{url}</h2>
      <h2>{cookieName}: {cookieData} </h2>
    </div>
  )
}

