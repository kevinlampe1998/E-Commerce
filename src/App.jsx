import './App.css'
import { BrowserRouter, Routes, Route , Link, Outlet} from 'react-router-dom';
import { useRef, useEffect, useReducer, createContext } from 'react';
import Home from './components/Home';
import Cars from './components/products/Cars';
import Electronics from './components/products/Electronics';
import Clothes from './components/products/Clothes';
import HouseAndGarden from './components/products/HouseAndGarden';
import FamilyAndFriends from './components/products/FamilyAndFriends';
import Business from './components/products/Business';
import Footer from './components/Footer';

const reducer = (state, action) => {
  if (action.type === "init") {
    let copyObj = action.payload;
    let all = []

    for (let cat in copyObj) {
      copyObj[cat].forEach(item => all.push(`/images/${cat}/${item}`));
    }

    return {...state, categorized: action.payload, all: all};
  }
  if (action.type === "advert") {
    // console.log('reducer got it');
    // console.log(action.payload);
  }
  return state;
};

export const TheContext = createContext();

const Layout = () => {
  const productsNav = useRef(null);

  const showProductsNav = () => {
    const currentTop = window.getComputedStyle(productsNav.current).getPropertyValue("top");
    currentTop === "0px" ? productsNav.current.style.top = "-160px"
      : productsNav.current.style.top = "0";
  };

  const setNavBack = () => {
    productsNav.current.style.top = '-160px';
  };

  return (
    <div className='layout' >
      <h1>LK-Commerce</h1>
      <nav className='main-nav'>
        <Link onClick={setNavBack} to="/">Home</Link>
        <Link onClick={showProductsNav}>Products</Link>
        <Link onClick={setNavBack}>About</Link>
        <Link onClick={setNavBack}>Contact</Link>
        <Link onClick={setNavBack}>Login</Link>
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
      <nav className='products-nav' ref={productsNav} onClick={setNavBack}>
        <Link to='/cars' >Cars</Link>
        <Link to='/electronics' >Electronics</Link>
        <Link to='/clothes' >Clothes</Link>
        <Link to='/house-and-garden' >House & Garden</Link>
        <Link to='/family-and-friends' >Family & Friends</Link>
        <Link to='/business' >Business</Link>
      </nav>
      <Outlet/>
      <Footer />
    </div>
  );
};

function App() {
  const [picPaths, dispatch] = useReducer(reducer, {});
  
  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await fetch("/data/picPaths.txt");
        let data =  await response.text();
        data = JSON.parse(data);
        dispatch({type: "init", payload: data});
      }
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <TheContext.Provider value={{picPaths, dispatch }} >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />}/>
            <Route path='/cars' element={<Cars />}/>
            <Route path='/electronics' element={<Electronics />}/>
            <Route path='/clothes' element={<Clothes />}/>
            <Route path='/house-and-garden' element={<HouseAndGarden />}/>
            <Route path='/family-and-friends' element={<FamilyAndFriends />}/>
            <Route path='/business' element={<Business />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </TheContext.Provider>
  )
}

export default App
