
import {ref,onValue} from "firebase/database";
import React, {useEffect, useState} from "react";
import {realtimeDB} from "../database/firebase.js";

//for get data from realtime database
export const useGetAllAdvert = (link = "") => {

	const [data,setData] = useState({})

	useEffect(() =>{
		onValue(ref(realtimeDB, "/advertising" + link),snapshot => {
			setData({})
			const dataInner = snapshot.val();
			if (dataInner){
				// eslint-disable-next-line
				setData(dataInner)
				// for (let elem of Object.values(dataInner)){
				// 	for (let elemInner of Object.values(elem)){
				// 		setData(prev => [...prev, elemInner])
				// 	}
				// }
			}else {
				return {}
			}
		})
		// eslint-disable-next-line
	},[])

	return data;
}
