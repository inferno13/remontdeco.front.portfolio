import React from 'react';
import {Route,Routes} from "react-router-dom";
import MainPage from "./pages/MainPage.jsx";
import NavbarTop from "./general-components/NavbarTop/NavbarTop.jsx";
import FooterBottom from "./general-components/FooterBottom/FooterBottom.jsx";
import ProductPage from "./pages/ProductPage/ProductPage.jsx";
import useScrollTop from "./hooks/useScrollTop.js";
import ServicesPage from "./pages/ServicesPage/ServicesPage.jsx";

import VacancyPage from "./pages/VacancyPage/VacancyPage.jsx";
import ResumePage from "./pages/ResumePage/ResumePage.jsx";

import AdminLogin from "./pages/AdminLogin/AdminLogin.jsx";

import AdvertisingPage from "./pages/AdvertisingPage/AdvertisingPage.jsx";

import WorkPage from "./pages/WorkPage/WorkPage.jsx";

import BannerPage from "./pages/BannerPage/BannerPage.jsx";
import ProfessionPage from "./pages/ProfessionPage/ProfessionPage.jsx";

const Router = () => {

    //чтобы при переходе на новую страницу она начиналась с начала а не с середины
    useScrollTop();

    return (
        <div className={"Router"}>
            <NavbarTop />
            <Routes>

                <Route path={"/"} element={<MainPage />} />
                <Route path={"/product/:productId"} element={<ProductPage />} />
                <Route path={"/admin"} element={<AdminLogin />} />
                <Route path={"/services"} element={<ServicesPage />} />

                <Route path={"/vacancy"} element={<VacancyPage />} />
                <Route path={"/resume"} element={<ResumePage />} />

                <Route path={"/advertising"} element={<AdvertisingPage />} />

                <Route path={"/work"} element={<WorkPage />} />
                <Route path={"/banner"} element={<BannerPage />} />
                <Route path={"/profession"} element={<ProfessionPage />} />

            </Routes>
            <FooterBottom />
        </div>
    );
};

export default Router;
