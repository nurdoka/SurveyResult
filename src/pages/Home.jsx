import {useState, useEffect} from "react"
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
import {useAnswerOptions} from "../context/AnswerOptionContext.jsx";


function Home() {
    const [surveyResponses, setSurveyResponses] = useState([]);
    const questionCount = countQuestionIds(surveyResponses)
    const {answerOptions} = useAnswerOptions();
    useEffect(() => {
        getSurveyResponses().then((data) => setSurveyResponses(data))
            .catch((err) => alert(err));
    }, [])

    return (
        <div className="w-full">
            <NavBar/>
            <div className="w-full flex flex-wrap gap-8 justify-center ">
                {Object.keys(questionCount).map((questionId) => {
                    const selectedOptions = questionCount[questionId];
                    // console.log(formatForPieChart(answerGrouper(selectedOptions)));
                    return (

                            <Card key={questionId} title="Example">
                                <MyPieChart data={formatForPieChart(answerGrouper(selectedOptions), answerOptions)}/>
                            </Card>

                    )
                })}
            </div>
        </div>
    )
}

export default Home