import axios from "axios";
import {API_LINK, API_DELETE} from "../../constants/api";

export const fncSetDelete = e => {

    const options = {headers: {"Content-type": `multipart/form-data`},};

    axios.post(API_LINK + API_DELETE, {e}, options,
    )
        .then(res => {
            //console.log(res)
        })
        .catch(function (error) {
            //console.log(error)
        })
        .finally(() => {
            window.location.reload()
        });
}