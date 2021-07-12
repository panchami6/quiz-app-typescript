import {quizArray} from "../Data/answersData";
import {useQuiz} from "../Context/quizContext";
import "./home.css";
import { Link } from "react-router-dom";
import {useStyles} from "../theme";
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { NavBar } from "./NavBar";

export function CheckAnswers(){
    const { quizState, quizDispatch } = useQuiz();
    const classes = useStyles();

    return(
        <Box>
          <NavBar />
            {quizArray[quizState.id].questions.map((question) => (
                <Box className={classes.answerBox}>
                    <Box className = {classes.quest}>Question: {question.quest}</Box>
                    <Box className = {classes.answer}>Answer: {question.ans}</Box>
                </Box>
            ))}
            <Link style={{textDecoration:"none"}} to="/">
              <Button variant="contained" color = "primary"
                style={{width:"15%", fontWeight:"bold"}}
                onClick={() => quizDispatch({ type: "CHOOSE_OTHER_SET" })}
              >
                Choose other set
              </Button>
            </Link>
        </Box>
    )
}