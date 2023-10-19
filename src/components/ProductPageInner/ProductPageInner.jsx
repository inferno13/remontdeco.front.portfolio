import React from 'react';
import "./ProductPageInner.css";
import "./ProductPageInnerMedia.css";
import {Link} from "react-router-dom";
import VideoPlayer from "../VideoPlayer/VideoPlayer.jsx";

const ProductPageInner = ({data}) => {
    return (
        <div className={"ProductPageInner"}>

            <header>
                <div className={"breadcrumbs"}>
                    <Link to={"/"}>Главная</Link>
                    <img src={"/images/dot.svg"} alt={"dot"} />
                    <p>Продукты</p>
                    <img src={"/images/dot.svg"} alt={"dot"} />
                    <p>{data.title}</p>
                </div>
                <h1>{data.title}</h1>
            </header>

            <div className="inner-body">
                <img
                    src={data.imageInner}
                    alt="product-image"
                />

                <div className="content">
                    <p>{data.text1}</p>

                    {/*<Link to={"/"}>*/}
                    {/*    <button className={"yellow-but"}>*/}
                    {/*        Контакты*/}
                    {/*    </button>*/}
                    {/*</Link>*/}
                </div>
            </div>

            {data.id === 2 && <div className={"mt-5"}><VideoPlayer /></div>}

            <footer>
                <h2>Дополнительная информация</h2>
                {
                    data.innerBlocks &&
                    data.innerBlocks.map(elem => (
                        <div
                            key={elem.id}
                            className={`content ${elem.location} ${elem.vertical ? "vert" : ""}`}
                        >
                            <div className="text">
                                <h3>{elem.title}</h3>
                                <h5 className="fw-normal">{elem.text}</h5>
                            </div>

                            {
                                elem.image ?
                                    <img
                                        src={elem.image}
                                        alt="product-image"
                                    />:
                                    <video
                                        autoPlay
                                        muted
                                        loop
                                    >
                                        <source src={elem.video} />
                                    </video>

                            }
                        </div>
                    ))
                }

                {
                    !data.innerBlocks &&
                    <div className="content">
                        <div className="text">
                            <h4>Страница</h4>
                            <p className="small">
                                В стадии разработки...
                            </p>
                        </div>

                        <img
                            src="https://www.yarkiy.ru//system/uploads/preview/good/27765/96218.jpg"
                            alt="product-image"
                        />
                    </div>
                }
            </footer>

            <div className="w-100 pt-4 pb-2 d-flex justify-content-center">
                <Link to={"/"}>
                    <button className={"yellow-but"}>
                        Вернуться на главную
                    </button>
                </Link>
            </div>

        </div>
    );
};

export default ProductPageInner;
