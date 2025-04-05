import { createContext, useContext, useState, useEffect } from "react";
import {getAnswerOptions} from "../services/answerOptionService.jsx";

const AnswerOptionsContext = createContext();

export const AnswerOptionsProvider = ({ children }) => {
    const [answerOptions, setAnswerOptions] = useState([]);

    useEffect(() => {
        getAnswerOptions().then((data) => setAnswerOptions(data))
            .catch((err) => alert(err));
    }, []);

    return (
        <AnswerOptionsContext.Provider value={{ answerOptions }}>
            {children}
        </AnswerOptionsContext.Provider>
    );
};

export const useAnswerOptions = () => useContext(AnswerOptionsContext);
