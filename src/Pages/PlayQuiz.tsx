import '../App.css';
import { quizOne } from "../Data/quizData";
import { useQuiz } from "../Context/quizContext";
import { Link } from "react-router-dom";

export default function PlayQuiz() {
  const { quizState, quizDispatch } = useQuiz();

  return (
    <div className="App">
      <div>
        {quizState.initialQuestion + 1 > quizOne[0].questions.length ? (
          <div className="quizCard">
            <h2>You scored {quizState.score * 20} out of 100</h2>
            <button
              onClick={() => {
                quizDispatch({ type: "RESET" });
              }}
            >
              Play Again
            </button>
            <Link to="/">
              <button
                onClick={() => quizDispatch({ type: "CHOOSE_OTHER_SET" })}
              >
                Choose other set
              </button>
            </Link>
          </div>
        ) : (
          <div className="quizCardOuter">
            {/* {quizOne.map((quiz) => ( */}
            <div className="quizCard">
              <div className="questionCount">
                <span>Question {quizState.initialQuestion + 1}</span>
              </div>
              <div>
                {
                  quizOne[quizState.id].questions[quizState.initialQuestion]
                    .question
                }
              </div>
              <div>
                {quizOne[quizState.id].questions[
                  quizState.initialQuestion
                ].options.map((option) => (
                  <button
                    key={option.text}
                    onClick={() =>
                      quizDispatch({
                        type: "NEXT_QUESTION",
                        payload: option.isRight
                      })
                    }
                  >
                    {option.text}
                  </button>
                ))}
              </div>
            </div>
            {/* )} */}
          </div>
        )}
      </div>
    </div>
  );
}
