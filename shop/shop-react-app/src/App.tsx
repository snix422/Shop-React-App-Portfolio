
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/header/Header';
import ProductPage from './pages/ProductPage';
import SearchResultPage from './pages/SearchResultPage';
import WishListPage from './pages/WishListPage';
import { useState } from 'react';
import CartAside from './components/cart-aside/CartAside';
import ShopPage from './pages/ShopPage';
import SignUpContainer from './components/auth/signUp/SignUpContainer';
import SignInContainer from './components/auth/signIn/SignInContainer';
import { Toaster } from 'react-hot-toast';
import BurgerMenuAside from './components/burger-menu-aside/BurgeMenuAside';
import Menu from './components/header/Menu';
import HeaderActions from './components/header/HeaderActions';
import SearchForm from './components/header/SearchForm';
import useAuth from './hooks/useAuth';
import Logo from './components/header/Logo';
import DrawerSearch from './components/header/DrawerSearch';

function App() {

  const [isOpenCart, setIsOpenCart] = useState(false);
  const [isOpenBurger, setIsOpenBurger] = useState(false);
  const [isOpenSearchDrawer, setIsOpenSearchDrawer] = useState(false);
  const {user} = useAuth();

  return (
    <div className='w-[100vw] min-h-[100vh]'>
      <BrowserRouter>
      <Header>
        <Logo />
        <Menu isAuth={user}/>
        <HeaderActions setOpenCart={setIsOpenCart} setOpenBurger={setIsOpenBurger}
        setOpenSearch={setIsOpenSearchDrawer} isAuth={user} />
        <SearchForm  />
        <DrawerSearch isOpen={isOpenSearchDrawer} onClose={setIsOpenSearchDrawer} />
      </Header>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<ShopPage />} />
          <Route path='/product/:slug' element={<ProductPage />} />
          <Route path='/search' element={<SearchResultPage />} />
          <Route path='/wishlist' element={<WishListPage />} />
          <Route path='/signup' element={<SignUpContainer />} />
          <Route path='/signin' element={<SignInContainer />} />
        </Routes>
        <BurgerMenuAside isOpen={isOpenBurger} setOpen={setIsOpenBurger} auth={user} />
      </BrowserRouter>
      <CartAside isOpenCart={isOpenCart} setOpenCart={setIsOpenCart}/>
      <Toaster />
    </div>
  )
}

export default App
