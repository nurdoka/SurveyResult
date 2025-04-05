import { useState, useEffect } from "react"
import {getRegions} from "../services/regionService.jsx";
import {getAnswerOptions} from "../services/answerOptionService.jsx";
import AnswerOption from "../components/AnswerOption";
import {getSurveyResponses} from "../services/surveyResponsesService.jsx";
import {countQuestionIds} from "../utils/questionCounter.jsx";
import MyPieChart from "../components/PieChart.jsx";
import NavBar from "../components/NavBar.jsx";
import Card from "../components/Card.jsx";
import {answerGrouper} from "../utils/answerGrouper.jsx";
import {formatForPieChart} from "../utils/pieChartFormatter.jsx";


function Home() {
    const [answerOptions, setAnswerOptions] = useState([]);
    const [surveyResponses, setSurveyResponses] = useState([]);
    const questionCount = countQuestionIds(surveyResponses)
    useEffect(() => {
        getAnswerOptions().then((data) => setAnswerOptions(data))
            .catch((err) => alert(err));
        getSurveyResponses().then((data) => setSurveyResponses(data))
            .catch((err) => alert(err));
    }, [])

    return (
        <>
        <NavBar/>
            <div className="flex flex-wrap gap-4 justify-center">
                {  Object.keys(questionCount).map((questionId) => {
                const selectedOptions = questionCount[questionId];
                return (
                    <Card key={questionId} title="Example">
                        <MyPieChart data={formatForPieChart(answerGrouper(selectedOptions))} />
                    </Card>)
            })}
            </div>
        </>
    )
}

export default Home