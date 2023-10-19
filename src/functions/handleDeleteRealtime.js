import {remove,ref} from 'firebase/database'
import {realtimeDB} from "../database/firebase.js";

export const handleDeleteRealtime = url => {
	return remove(ref(realtimeDB, "/advertising" + url))
}
