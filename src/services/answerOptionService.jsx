import api from "./api.js";

export const getAnswerOptions = () => {
    return  api.get("/answers/")
        .then((res) => res.data )
        .catch((err) => alert(err))
};