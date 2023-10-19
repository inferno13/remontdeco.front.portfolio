import React from 'react';
import "./FooterBottom.css";
import "./FooterBottomMedia.css";
import {Container, Navbar} from "react-bootstrap";
import {useLocation} from "../../hooks/useLocation.js";
import {checkCity} from "../../hooks/checkCity.js";

const FooterBottom = () => {

    const location = useLocation();

    return (
        <footer className={"FooterBottom"}>
            <Container>
                <div className="left">
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src="/logo.png"
                            className="logo d-inline-block align-top"
                        />
                        <div className="line" />
                        RemontDeco
                    </Navbar.Brand>
                    <p className="small m-0">
                        Copyright ©{new Date().getFullYear()} | RemontDeco.<br />
                        Все права защищены.
                    </p>
                </div>

                <div className="right">
                    <div className={"inner"}>
                        <p className="small">
                            Телефон для связи:
                        </p>
                        <h6>

                            {checkCity(location) === "msk" && "+7 (961) 809-29-16"}
                            {checkCity(location) === "nn" && "+7 (980) 025-80-47"}

                            {checkCity(location) === "spb" && "+7 (980) 025-80-47"}
                            {checkCity(location) === "smr" && "+7 (980) 025-80-47"}
                            {checkCity(location) === "oms" && "+7 (980) 025-80-47"}
                            {checkCity(location) === "kzn" && "+7 (980) 025-80-47"}
                            {checkCity(location) === "rst" && "+7 (980) 025-80-47"}
                            {checkCity(location) === "vgd" && "+7 (980) 025-80-47"}
                            {checkCity(location) === "kry" && "+7 (980) 025-80-47"}
                            {checkCity(location) === "ufa" && "+7 (980) 025-80-47"}
                            {checkCity(location) === "vrn" && "+7 (980) 025-80-47"}
                            {checkCity(location) === "prm" && "+7 (980) 025-80-47"}

                            {!checkCity(location) && "+7 (980) 025-80-47"}
                        </h6>
                    </div>
                    <div className={"inner"}>
                        <p className="small">
                            Поддержка 24ч:
                        </p>
                        <h6>remontdeco@yandex.ru</h6>
                    </div>
                </div>
            </Container>
        </footer>
    );
};

export default FooterBottom;
