 import {ref,onValue} from "firebase/database";
import React, {useEffect, useState} from "react";
import {realtimeDB} from "../database/firebase.js";

//for get data from realtime database
export const useGetAdmin = () => {

	const [data,setData] = useState(null)

	useEffect(() =>{
		onValue(ref(realtimeDB, "/admin"),snapshot => {
			setData(null)
			const dataInner = snapshot.val();
			if (dataInner){
				setData(dataInner)
			}else {
				return null
			}
		})
		// eslint-disable-next-line
	},[])

	return data;
}
