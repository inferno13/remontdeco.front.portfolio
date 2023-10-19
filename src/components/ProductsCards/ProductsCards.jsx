import React from 'react';
import "./ProductsCards.css";
import ProductCard from "./ProductsCard.jsx";
import "./ProductCardsMedia.css";
import {dataMain} from "../../data/dataMain.js";

const ProductsCards = () => {

    return (

        <div className={"ProductsCards"}>

            <a name="products"></a>

            <div className="cards-container">
                {
                    dataMain.map(elem => (
                        <ProductCard key={elem.id} data={elem} />
                    ))
                }
            </div>
        </div>
    );
};

export default ProductsCards;
