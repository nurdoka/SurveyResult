import api from "./api.js";

export const getRegions = () => {
   return  api.get("/regions/")
        .then((res) => res.data )
        .catch((err) => console.log(err))
};