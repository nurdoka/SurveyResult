import api from "./api.js";

export const getCourts = () => {
    return  api.get("/courts/")
        .then((res) => res.data )
        .catch((err) => alert(err))
};