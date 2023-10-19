import React, {useState} from 'react';
import {Container, Dropdown, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {Link, useNavigate} from "react-router-dom";
import "./NavbarTop.css";
import "./NavbarTopMedia.css";
import {useLocation} from "../../hooks/useLocation.js";
import {checkCity} from "../../hooks/checkCity.js";
import AdvertisingModal from "../AdvertisingModal/AdvertisingModal.jsx";
import {useMediaQuery} from "react-responsive";
import {getAdmin} from "../../functions/getAdmin.js";

const NavbarTop = () => {

    const navigate = useNavigate();
    const locations = checkCity(useLocation());
    const [showModal, setShowModal] = useState(false);
    const admin = getAdmin();

    const media991px = useMediaQuery({query: '(max-width: 991px)'});
    const media465px = useMediaQuery({query: '(max-width: 465px)'});

    const getCity = () => {

        switch(locations) {

            case 'msk': return "Москва";
            case 'nn': return "Н.Новгород";

            case 'spb': return "Санкт-Петербург";
            case 'smr': return "Самара";
            case 'oms': return "Омск";
            case 'kzn': return "Казань";
            case 'rst': return "Ростов на Дону";
            case 'vgd': return "Волгоград";
            case 'kry': return "Красноярск";
            case 'ufa': return "Уфа";
            case 'vrn': return "Воронеж";
            case 'prm': return "Пермь";

            default: return "Другой";
        }

    }

    const setCity = city => {
        window.localStorage.setItem("city",city)
        window.location.reload()
        return false;
    }

    const handleLogOut = e => {
        e.preventDefault();
        window.sessionStorage.clear();
        window.location.reload();
    }

    const handleLink = (link) => {
        navigate("/");
        setTimeout(() => globalThis.location.href = link, 100)
    }

    const animate = "animate__animated animate__fadeInDown animate__fast";

    return (
        <>
            <Navbar className={`NavbarTop`}>
                <Container>

                    <Link className={"navbar-brand"} to={"/"}>
                        <img
                            alt=""
                            src="/logo.png"
                            className="logo d-inline-block align-top"
                        />
                        <div className="line" />
                        <div className="text">
                            RemontDeco
                        </div>
                    </Link>

                    <Nav className={`small ${animate} menuContainer`}>
                        {
                            !admin &&
                            <>
                                <a onClick={() => handleLink("/#products")}>Продукция</a>
                                <a onClick={() => handleLink("/#contacts")}>Контакты</a>
                                <a onClick={() => setShowModal(true)}>Заказать рекламу</a>
                                <a onClick={() => handleLink("/vacancy")}>Вакансии</a>
                                <a onClick={() => handleLink("/resume")}>Резюме</a>
                            </>
                        }

                        {
                            admin &&
                            <>
                                <Link to={'/'}><b>Администратор</b></Link>
                                <Link to={'/banner'}>Баннеры</Link>
                                <Link to={'/profession'}>Професии</Link>
                                <Link to={'/advertising'}>Реклама</Link>
                                <Link to={'/work'}>Работа</Link>
                                <a onClick={handleLogOut}><b>Выйти</b></a>
                            </>
                        }
                    </Nav>

                    <div className="but-container">
                        <NavDropdown
                            className={"dropdown-city"}
                            title={getCity()}
                        >

                            <NavDropdown.Item onClick={() => setCity("140000")}>Москва</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => setCity("606029")}>Н.Новгород</NavDropdown.Item>

                            <NavDropdown.Item onClick={() => setCity("188800")}>Санкт Петербург</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => setCity("445350")}>Самара</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => setCity("644000")}>Омск</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => setCity("423450")}>Казань</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => setCity("347340")}>Ростов на Дону</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => setCity("400000")}>Волгоград</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => setCity("661970")}>Красноярск</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => setCity("452680")}>Уфа</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => setCity("396650")}>Воронеж</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => setCity("618900")}>Пермь</NavDropdown.Item>

                            <NavDropdown.Item onClick={() => setCity("999999")}>Другое</NavDropdown.Item>

                        </NavDropdown>

                        <Dropdown className={"dropdown-city"} hidden={!media991px} align="end">
                            <Dropdown.Toggle size={"sm"} className={"yellow-but small"}>
                                Меню
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                {
                                    !admin &&
                                    <>
                                        <Dropdown.Item onClick={() => navigate("/services")}>Услуги</Dropdown.Item>
                                        <Dropdown.Item onClick={() => handleLink("/#products")}>Подукция</Dropdown.Item>
                                        <Dropdown.Item onClick={() => handleLink("/#contacts")}>Контакты</Dropdown.Item>
                                        <Dropdown.Item onClick={() => setShowModal(true)}>Заказать рекламу</Dropdown.Item>
                                        <Dropdown.Item onClick={() => handleLink("/vacancy")}>Вакансии</Dropdown.Item>
                                        <Dropdown.Item onClick={() => handleLink("/resume")}>Резюме</Dropdown.Item>
                                    </>
                                }
                                {
                                    admin &&
                                    <>
                                        <Dropdown.Item><b>Администратор</b></Dropdown.Item>
                                        <Link className={"dropdown-item"} to={'/banner'}>Баннеры</Link>
                                        <Link className={"dropdown-item"} to={'/profession'}>Профессии</Link>
                                        <Link className={"dropdown-item"} to={'/advertising'}>Реклама</Link>
                                        <Link className={"dropdown-item"} to={'/work'}>Работа</Link>
                                        <Dropdown.Item onClick={handleLogOut}><b>Выйти</b></Dropdown.Item>
                                    </>
                                }
                                <Dropdown.Divider />
                                <Dropdown.Item href="tel:+79800258047">
                                    Позвонить
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                        {
                            !media465px &&
                            <Link to={"/services"}>
                                <button className={"yellow-but small"}>
                                    Услуги
                                </button>
                            </Link>
                        }

                        <a href="tel:+79800258047" hidden={media991px} className={"phone"}>
                            <button className={"yellow-but small"}>
                                Позвонить
                            </button>
                        </a>
                    </div>
                </Container>
            </Navbar>

            <AdvertisingModal show={showModal} onHide={() => setShowModal(false)} />
        </>
    );
};

export default NavbarTop;
