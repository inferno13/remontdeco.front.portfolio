import {ref, uploadBytesResumable} from "firebase/storage";
import {storageDB} from "../database/firebase.js";

export const handleAddImage = (image,advId) => {
	const fileRef = ref(storageDB,`/advertising/${advId}/${image.name}`);
	return uploadBytesResumable(fileRef, image)
}