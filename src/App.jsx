import './App.css'
import { BrowserRouter, Routes, Route , Link, Outlet} from 'react-router-dom';
import { useRef, useEffect } from 'react';
import Home from './components/Home';

const Layout = () => {
  const productsNav = useRef(null);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await fetch("/data/picPaths.txt");
        let data =  await response.text();
        data = JSON.parse(data);
        console.log(data);
      }
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const showProductsNav = () => {
    const currentTop = window.getComputedStyle(productsNav.current).getPropertyValue("top");
    currentTop === "0px" ? productsNav.current.style.top = "-160px"
      : productsNav.current.style.top = "0";
  };

  return (
    <div className='layout'>
      <h1>E-Commerce</h1>
      <nav className='main-nav'>
        <Link to="/home">Home</Link>
        <Link onClick={showProductsNav}>Products</Link>
        <Link>About</Link>
        <Link>Contact</Link>
        <Link>Login</Link>
        <Link>
        <svg className='shopping-cart-logo' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 3H4.37144C5.31982 3 6.13781 3.66607 6.32996 4.59479L8.67004 15.9052C8.86219 16.8339 9.68018 17.5 10.6286 17.5H17.5" stroke="#000000"
            // stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
          />
          <path d="M6.82422 7H19.6743C20.3386 7 20.8183 7.6359 20.6358 8.27472L19.6217 11.8242C19.2537 13.1121 18.0765 14 16.7371 14H8.27734" stroke="#000000"
            // stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
          />
          <circle cx="16.5" cy="20.5" r="0.5" fill="#000000" stroke="#000000"
            // stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
          />
          <circle cx="0.5" cy="0.5" r="0.5" transform="matrix(1 0 0 -1 10 21)" fill="#000000" stroke="#000000"
            // stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
          />
        </svg>
        </Link>
      </nav>
      <nav className='products-nav' ref={productsNav}>
        <Link>Cars</Link>
        <Link>Electronics</Link>
        <Link>Clothes</Link>
        <Link>House & Garden</Link>
        <Link>Family & Friends</Link>
        <Link>Business</Link>
      </nav>
      <Outlet/>
    </div>
  );
};

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
