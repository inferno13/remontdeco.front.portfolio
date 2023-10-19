import {useEffect, useState} from "react";
import axios from "axios";
import {API_LINK} from "../constants/api.js";
import {checkCity} from "./checkCity";
import {useLocation} from "./useLocation";

export const useFetch = url => {

	const [data, setData] = useState(null);
	const [load, setLoad] = useState(false);
	const [error, setError] = useState(null);

	const getData = () => {

		setLoad(true)
		setData(null)
		setError(null)

		axios(API_LINK + url)
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
