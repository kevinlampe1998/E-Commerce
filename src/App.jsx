import './App.css'
import { BrowserRouter, Routes, Route , Link, Outlet} from 'react-router-dom'

const Layout = () => {
  return (
    <div className='layout'>
      <h1>E-Commerce</h1>
      <nav className='main-nav'>
        <Link>Home</Link>
        <Link>Products</Link>
        <Link>About</Link>
        <Link>Contact</Link>
        <Link>Login</Link>
        <Link><svg className='shopping-cart-logo' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3 3H4.37144C5.31982 3 6.13781 3.66607 6.32996 4.59479L8.67004 15.9052C8.86219 16.8339 9.68018 17.5 10.6286 17.5H17.5" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M6.82422 7H19.6743C20.3386 7 20.8183 7.6359 20.6358 8.27472L19.6217 11.8242C19.2537 13.1121 18.0765 14 16.7371 14H8.27734" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <circle cx="16.5" cy="20.5" r="0.5" fill="#000000" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></circle> <circle cx="0.5" cy="0.5" r="0.5" transform="matrix(1 0 0 -1 10 21)" fill="#000000" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></circle> </g></svg></Link>
      </nav>
      <nav className='products-nav'>
        <Link>Cars</Link>
        <Link>Electronics</Link>
        <Link>Clothes</Link>
        <Link>House & Garden</Link>
        <Link>Family & Friends</Link>
        <Link>Business</Link>
      </nav>
    </div>
  );
};

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
