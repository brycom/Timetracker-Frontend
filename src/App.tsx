import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './Header/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Planing from './Components/Planing';
import Statistics from './Components/Statistics';
import Login from './Components/Login';
import Admin from './Components/Admin';



function App() {
  const [page, setPage] = useState<string>('');

  useEffect(() => {
    let pageUrl = page;

    if (!pageUrl) {
      const queryparam = new URLSearchParams(window.location.search);
      const getUrl = queryparam.get('page');

      if (getUrl) {
        pageUrl = getUrl;
        setPage(getUrl);
      } else {
        pageUrl = 'home';
      }
    }

    window.history.pushState(null, '', `?page=${pageUrl}`);
  }, [page]);

  return (
    <>
    <div>
      <Navbar setPage={setPage} />
      {{
        "homePage": <Home/>,
        "about": <About/>,
        "planing": <Planing/>,
        "statistics": <Statistics/>,
        "admin": <Admin/>,
        "login": <Login/>
      }[page]}
      </div>
    </>
  );
}

export default App;
