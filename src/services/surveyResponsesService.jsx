import api from "./api.js";

export const getSurveyResponses = () => {
    return  api.get("/court-surveys-responses/")
        .then((res) => res.data )
        .catch((err) => console.log(err))
};