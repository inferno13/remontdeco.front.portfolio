import {useEffect, useState} from "react";
import axios from "axios";
import {API_LINK} from "../constants/api.js";
import {checkCity} from "./checkCity";
import {useLocation} from "./useLocation";
import {API_ADD_2} from "../constants/api";

export const useFetchPost = url => {

    const [data, setData] = useState(null);
    const [load, setLoad] = useState(false);
    const [error, setError] = useState(null);

    const locations = checkCity(useLocation());

    const getData = () => {

        setLoad(true)
        setData(null)
        setError(null)

        const options = {
            headers: {
                "Content-type": `multipart/form-data`
            },
        };

        axios.post(API_LINK + url, {
            city: locations,
        }, options,)
            .then(res => {
                if (res.data.result === 'success') {
                    setData(res.data.data)
                }else {
                    setError("Ошибка получения информации!")
                    return false;
                }
            })
            .catch(() => setError("Ошибка получения информации!"))
            .finally(() => setLoad(false))
    }

    useEffect(() => {
        getData()
    },[url])

    return {
        data,
        load,
        error
    }
}
