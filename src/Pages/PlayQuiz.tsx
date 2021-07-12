import '../App.css';
import { useQuiz } from "../Context/quizContext";
import { Link } from "react-router-dom";
import {useStyles} from "../theme";
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { NavBar } from "./NavBar";

export default function PlayQuiz() {

  const { quizState, quizDispatch } = useQuiz();
  const {genre} = quizState;
  const classes = useStyles();

  return ( 
    <Box className={classes.playQuiz}>
      <NavBar />
        {genre && quizState.initialQuestion + 1 > genre.questions.length ? (
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
                  genre && genre.questions[quizState.initialQuestion]
                    .question
                }
              </Box>
              <Box>
                {genre&& genre.questions[
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
