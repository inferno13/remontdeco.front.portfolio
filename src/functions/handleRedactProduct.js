import {ref, update} from "firebase/database";
import {realtimeDB} from "../database/firebase.js";

export const handleRedactProduct = (data) =>{
	const url = `/advertising/${data.idGroup}/${data.idAdv}`;
	return update(ref(realtimeDB, url), data)
}
