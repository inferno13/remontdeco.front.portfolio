import {set,ref} from "firebase/database";
import {realtimeDB} from "../database/firebase.js";

export const handleAddVacancy = data => {

	const databaseURL = `/advertising/${data.idGroup}/${data.idAdv}`;

	return set(ref(realtimeDB, databaseURL),{
		...data,
		show: true,
		new: true,
		dateNoRedact: Date.now(),
		databaseURL: databaseURL,
	})
};
