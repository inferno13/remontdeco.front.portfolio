import React from 'react';
import "./Contacts.css";
import "./ContactsMedia.css";
import {useLocation} from "../../hooks/useLocation.js";
import {checkCity} from "../../hooks/checkCity.js";

const Contacts = () => {

    const location = useLocation();

    return (
        <div className={"Contacts"}>
            <a name="contacts"></a>
            <h2>Контакты:</h2>
            <div className={"block"}>

                <img src="/images/city.svg" alt="city-bg"/>

                <div className="inner">
                    <h3>remontdeco@yandex.ru</h3>
                    <p className="small m-0">
                        Ответим вам в течение 24 часов.
                    </p>
                </div>

                <div className="inner">
                    <h3>

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

                    </h3>
                    <p className="small m-0">
                        Вы всегда можете позвонить нам.
                    </p>
                </div>

                <div className="inner">
                    <h3>

                        {checkCity(location) === "msk" && "Адрес уточняйте по телефону"}
                        {checkCity(location) === "nn" && "Н. Новгород, ул.Советская, д.34, стр.1"}

                        {checkCity(location) === "spb" && "Адрес уточняйте по телефону"}
                        {checkCity(location) === "smr" && "Адрес уточняйте по телефону"}
                        {checkCity(location) === "oms" && "Адрес уточняйте по телефону"}
                        {checkCity(location) === "kzn" && "Адрес уточняйте по телефону"}
                        {checkCity(location) === "rst" && "Адрес уточняйте по телефону"}
                        {checkCity(location) === "vgd" && "Адрес уточняйте по телефону"}
                        {checkCity(location) === "kry" && "Адрес уточняйте по телефону"}
                        {checkCity(location) === "ufa" && "Адрес уточняйте по телефону"}
                        {checkCity(location) === "vrn" && "Адрес уточняйте по телефону"}
                        {checkCity(location) === "prm" && "Адрес уточняйте по телефону"}


                        {!checkCity(location) && "Адрес уточняйте по телефону"}

                    </h3>
                </div>

            </div>
        </div>
    );
};

export default Contacts;
