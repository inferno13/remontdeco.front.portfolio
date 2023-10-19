import React from 'react';
import {Container} from "react-bootstrap";
import ProductPageInner from "../../components/ProductPageInner/ProductPageInner.jsx";
import {dataMain} from "../../data/dataMain.js";
import {useParams} from "react-router-dom";
import {useGetAllAdvert} from "../../hooks/useGetAllAdvert.js";
import "./ProductPage.css";
import AdvertisingBlock from "../../general-components/AdvertisingBlock/AdvertisingBlock.jsx";

const ProductPage = () => {

    const path = useParams();
    const data = dataMain.find(elem => elem.id === path.productId);
    const dataAdv = useGetAllAdvert("/" + path.productId);
    const animate = "animate__animated animate__fadeIn";

    if (!data) {
        return (
            <h4 className={"w-100 text-center my-5 py-5"}>
                Данной страницы не существует. Пожалуйста вернитесь на главную.
            </h4>
        )
    }

    return (
        <div className={`ProductPage ${animate}`}>
            <Container>
                <ProductPageInner data={data} />
                {
                    !!(dataAdv && Object.values(dataAdv).length) &&
                    <>
                        <h2>Другие компании</h2>
                        <div className={"d-flex flex-column"}>
                            {
                                Object.values(dataAdv).map(block => (
                                    <AdvertisingBlock key={block.idAdv} data={block} />
                                ))
                            }
                        </div>
                    </>
                }
            </Container>
        </div>
    );
};

export default ProductPage;
