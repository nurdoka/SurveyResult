import React from "react";

function AnswerOption({answerOption}){
    return <div className="answeroption-container">
        <p>{answerOption.id}</p>
        <p>{answerOption.text_ru}</p>
        <p>{answerOption.text_kg}</p>
    </div>
}

export default AnswerOption;