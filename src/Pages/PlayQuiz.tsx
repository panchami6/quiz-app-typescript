import '../App.css';
import { quizOne } from "../Data/quizData";
import { useQuiz } from "../Context/quizContext";
import { Link } from "react-router-dom";
import {useStyles} from "../theme";
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

export default function PlayQuiz() {
  const { quizState, quizDispatch } = useQuiz();
  const classes = useStyles();

  return (
    <Box className={classes.playQuiz}>
        {quizState.initialQuestion + 1 > quizOne[0].questions.length ? (
          <Box className={classes.quizCard}>
            <Box className={classes.score}>You scored {quizState.score * 20} out of 100</Box>
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
            <Link to = "/answers">
            <button onClick = {() => quizDispatch({ type: "SHOW_ANSWERS" })}>Check Answers</button>
            </Link>
          </Box>
        ) : (
            <Box className={classes.quizCard}>
              <Box className={classes.questionCount}>
                Question {quizState.initialQuestion + 1}
              </Box>
              <Box className={classes.question}>
                {
                  quizOne[quizState.id].questions[quizState.initialQuestion]
                    .question
                }
              </Box>
              <Box>
                {quizOne[quizState.id].questions[
                  quizState.initialQuestion
                ].options.map((option) => (
                  <Button
                    style = {{margin : "0.5rem 0rem"}}
                    variant="contained" color = "primary" 
                    key={option.text}
                    onClick={() =>
                      quizDispatch({
                        type: "NEXT_QUESTION",
                        payload: option.isRight
                      })
                    }
                  >
                    {option.text}
                 </Button>
                ))}
              </Box>
            </Box>
        )}
      </Box>
  );
}
