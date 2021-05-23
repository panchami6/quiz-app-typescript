import {quizArray} from "../Data/answersData";
import {useQuiz} from "../Context/quizContext";
import "./home.css";
import { Link } from "react-router-dom";

export function CheckAnswers(){
    const { quizState, quizDispatch } = useQuiz();

    return(
        <div>
            {quizArray[quizState.id].questions.map((question) => (
                <div className="answer-box">
                    <div className = "question">Question: {question.quest}</div>
                    <div className = "answer">Answer: {question.ans}</div>
                </div>
            ))}
            <Link to="/">
              <button className ="answer-btn"
                onClick={() => quizDispatch({ type: "CHOOSE_OTHER_SET" })}
              >
                Choose other set
              </button>
            </Link>
        </div>
    )
}