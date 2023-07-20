import React from 'react';
import { Routes, Route, Navigate, useLocation} from "react-router-dom";
import ErrorPage from '../pages/Error/Error-page';
import IntroPage from '../pages/Intro/Intro-page';
import JournalPage from '../pages/Journal/Journal-page';
import ServicesPage from '../pages/Services/Services-page';
import ServicesItemPage from '../pages/Services/ServicesItem-page';
import { AnimatePresence } from 'framer-motion'
import AboutPage from '../pages/About/About-page';
import GalleryPage from '../pages/Gallery/Gallery-page';
import GalleryItemPage from '../pages/Gallery/GalleryItem-page';
import JournalItemPage from '../pages/Journal/JournalItem-page';
import ShopPage from '../pages/Shop/Shop-page';
import ShopItemPage from '../pages/Shop/ShopItem-page';
import ShopCartPage from '../pages/Shop/ShopCart-page';
import ShopSoldPage from '../pages/Shop/ShopSold-page';
import UserPage from '../pages/User/User-page';
import AdminPanelPage from '../pages/Admin/AdminPanel-page';


const AppRouter = () => {
    const location = useLocation()

    return (
        <AnimatePresence mode="wait">
            <Routes key={location.pathname} location={location}>
                <Route  path='/'
                        element={<IntroPage/>}
                >
                </Route>
                <Route  path='/services'
                        element={<ServicesPage/>}
                >
                </Route>
                <Route  path='/services/item'
                        element={<ServicesItemPage/>}
                >
                </Route>
                <Route  path='/journal'
                        element={<JournalPage/>}
                >
                </Route>
                <Route  path='/journal/item'
                        element={<JournalItemPage/>}
                >
                </Route>
                <Route  path='/gallery'
                        element={<GalleryPage/>}
                >
                </Route>
                <Route  path='/gallery/item'
                        element={<GalleryItemPage/>}
                ></Route>
                <Route  path='/shop'
                        element={<ShopPage/>}
                >
                </Route>
                <Route  path='/shop/item'
                        element={<ShopItemPage/>}
                >
                </Route>
                {/* <Route path="/shop/:id" 
                        element={<ShopItemPage/>}
                /> */}
                <Route  path='/shop/sold'
                        element={<ShopSoldPage/>}
                >
                </Route>
                <Route  path='/about'
                        element={<AboutPage/>}
                >
                </Route>
                <Route  path='/cart'
                        element={<ShopCartPage/>}
                >
                </Route>
                <Route  path='/user'
                        element={<UserPage />}
                >
                </Route>
                <Route  path='/admin'
                        element={<AdminPanelPage />}
                >
                </Route>
                <Route  path='/error'
                        element={<ErrorPage />}
                >
                </Route>
                <Route  path='*'
                        element={<Navigate replace to="/error" />}
                >
                </Route>
            </Routes>
        </AnimatePresence>
    );
}

export default AppRouter;
