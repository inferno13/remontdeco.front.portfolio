import React from 'react';
import {Container} from "react-bootstrap";
import SliderPreview from "../components/SliderPreview/SliderPreview.jsx";
import ProductsCards from "../components/ProductsCards/ProductsCards.jsx";
//import AboutUs from "../components/AboutUs/AboutUs.jsx";
import Contacts from "../components/Contacts/Contacts.jsx";
import VideoPlayer from "../components/VideoPlayer/VideoPlayer.jsx";

const MainPage = () => {

    const animate = "animate__animated animate__fadeIn";

    /*<AboutUs />*/

    return (
        <div className={`MainPage ${animate}`}>

            <Container>

                <SliderPreview />

                <ProductsCards />
                <VideoPlayer />
                <Contacts />

            </Container>

        </div>
    );
};

export default MainPage;
