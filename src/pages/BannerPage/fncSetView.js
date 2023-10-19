import axios from "axios";
import {API_LINK, API_BANNER_VIEW} from "../../constants/api";

export const fncSetView = e => {

    const options = {headers: {"Content-type": `multipart/form-data`},};

    axios.post(API_LINK + API_BANNER_VIEW, {e}, options,
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