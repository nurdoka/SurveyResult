import { createContext, useContext, useState, useEffect } from "react";
import {getQuestions} from "../services/questionService.jsx";

const QuestionsContext = createContext();

export const QuestionsProvider = ({ children }) => {
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        getQuestions().then((data) => setQuestions(data))
            .catch((err) => alert(err));
    }, []);

    return (
        <QuestionsContext.Provider value={{ questions }}>
            {children}
        </QuestionsContext.Provider>
    );
};

export const useQuestions = () => useContext(QuestionsContext);
