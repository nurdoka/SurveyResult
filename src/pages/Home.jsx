import {useState, useEffect} from "react"
import AnswerOption from "../components/AnswerOption";
import {getSurveyResponses} from "../services/surveyResponsesService.jsx";
import {countQuestionIds} from "../utils/questionCounter.jsx";
import MyPieChart from "../components/PieChart.jsx";
import NavBar from "../components/NavBar.jsx";
import Card from "../components/Card.jsx";
import {answerGrouper} from "../utils/answerGrouper.jsx";
import {formatForPieChart} from "../utils/pieChartFormatter.jsx";
import {useAnswerOptions} from "../context/AnswerOptionContext.jsx";
import {useQuestions} from "../context/QuestionContext.jsx";
import {useLanguage} from "../context/LanguageContext.jsx";


function Home() {
    const [surveyResponses, setSurveyResponses] = useState([]);
    const {answerOptions} = useAnswerOptions();
    const {questions} = useQuestions();
    const {language} = useLanguage();
    useEffect(() => {
        document.title = "Dashboard";
        getSurveyResponses().then((data) => setSurveyResponses(data))
            .catch((err) => console.log(err));
    }, []);

    const questionCount = countQuestionIds(surveyResponses);

    return (
        <>
            <NavBar/>
            <div className="flex flex-wrap gap-4 justify-center">
                {questionCount.map((questionEach) => {
                    const selectedOptions = questionEach.selectedOptions;
                    const title = questions.find(q => q.id === questionEach.question);
                    return (
                        selectedOptions.length > 0 ? (
                            <Card key={questionEach.question} title={language === "ru" ? title.text_ru : title.text_kg}>
                                <MyPieChart data={formatForPieChart(answerGrouper(selectedOptions), answerOptions)} />
                            </Card>
                        ) : null
                    );
                })}
            </div>
        </>
    );


}

export default Home