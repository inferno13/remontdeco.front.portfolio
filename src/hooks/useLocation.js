import {useEffect, useState} from "react";

export const useLocation = () => {

    const [coord,setCoord] = useState({});
    const [location,setLocation] = useState(NaN);
    // console.log(coord,'COORDS');
    // console.log(location);

    // данные для зпроса о адресе
    const url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/geolocate/address";
    const token = "ec03e0fc43259ac9304b0de051959f59496b3650";
    const optionsForQuery = {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": "Token " + token
        },
        body: JSON.stringify(coord)
    }

    //запрос на получение информации о геопозиции
    fetch(url, optionsForQuery)
        .then(response => response.text())
        // .then(res => console.log(JSON.parse(res)?.suggestions[0]))
        .then(res => setLocation(Number(JSON.parse(res)?.suggestions[0]?.data?.postal_code)))
        .catch(() => setLocation(undefined));


    useEffect(() => {
        //получаем координаты
        navigator.geolocation.getCurrentPosition(position => {
            const { latitude, longitude } = position.coords;
            setCoord({lat:latitude,lon:longitude});
        });
    },[])

    if (window.localStorage.getItem("city")){
        return window.localStorage.getItem("city");
    }else {
        return location;
    }
}