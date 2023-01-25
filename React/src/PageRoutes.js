import React, { useContext, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import AuthContext from './store/auth-context';
import Cart from './components/Cart/Cart';
import Reservation from './components/UI/Reservation';

/* Lazy loading the components. */
const Products = lazy(() => import('./pages/Products'))
const Profile = lazy(() => import('./pages/Profile'))
const AllNews = lazy(() => import('./components/Layout/news/AllNews'))
const News = lazy(() => import('./components/Layout/news/News'))
const AddProduct = lazy(() => import('./components/Layout/AdminPanel/AddProduct'))
const UpdateRemoveProduct = lazy(() => import('./components/Layout/AdminPanel/Products'))
const UpdateProduct = lazy(() => import('./components/Layout/AdminPanel/UpdateProduct'))
const AddNews = lazy(() => import('./components/Layout/AdminPanel/AddNews'))
const UpdateRemoveNews = lazy(() => import('./components/Layout/AdminPanel/News'))
const UpdateNews = lazy(() => import('./components/Layout/AdminPanel/UpdateNews'))
const NotFound = lazy(() => import('./pages/NotFound'))

function PageRoutes() {
    const authCtx = useContext(AuthContext);

    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/reservation' element={<Reservation />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/products' element={<Products />} />
            <Route path='/news' element={<AllNews />} />
            <Route path='/news/:id' element={<News />} />
            <Route path='/admin/addnewproduct' element={<AddProduct />} />
            <Route path='/admin/products' element={<UpdateRemoveProduct />} />
            <Route path='/admin/updateproduct/:id' element={<UpdateProduct />} />
            <Route path='/admin/addnews' element={<AddNews />} />
            <Route path='/admin/news' element={<UpdateRemoveNews />} />
            <Route path='/admin/updatenews/:id' element={<UpdateNews />} />
            {authCtx.isLoggedIn && <Route path='/admin' element={<Profile />} />}
            <Route path='*' element={<NotFound />} />
        </Routes>
    )
}

export default PageRoutes