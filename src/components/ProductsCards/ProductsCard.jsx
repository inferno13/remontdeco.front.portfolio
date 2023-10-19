import React from 'react';
import {Card} from "react-bootstrap";
import {Link} from "react-router-dom";
import {getAdmin} from "../../functions/getAdmin.js";

const ProductCard = ({data}) => {

    // console.log(data);
    const admin = getAdmin();

    return (
        <Card className={`ProductCard ${data.sale ? "sale" : ""}`}>
            <Link
                to={(data.sale || admin) ? `/product/${data.id}` : ""}
                style={{position:"relative"}}
            >
                <Card.Img
                    className={"card-img"}
                    variant="top"
                    src={data.imageCard}
                />
                <h6>{data.title}</h6>
            </Link>

        </Card>
    );
};

export default ProductCard;
