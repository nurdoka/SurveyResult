import api from "./api.js";

export const getQuestions = () => {
    return  api.get("/questions/")
        .then((res) => res.data )
        .catch((err) => alert(err))
};