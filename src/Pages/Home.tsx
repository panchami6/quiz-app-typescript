import "./home.css";
import {useState, useEffect} from "react";
import { Quiz } from "../Data/quiz-types";
import { Link } from "react-router-dom";
import { useQuiz } from "../Context/quizContext";
import Fitness from "../Images/Fitness.png";
import HealthyMeal from "../Images/HealthyMeal.png";
import { NavBar } from "./NavBar";
import {useStyles} from "../theme";
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Image from "material-ui-image";
import axios from "axios";

export async function getQuizData(): Promise<Quiz[]>{
  const response = await axios.get<Quiz[]>("https://quizbackend.panchami6.repl.co/quiz")

  console.log(response.data)

  return response.data
}


export default function Home() {
  
  const [quiz, setQuiz] = useState<Quiz[] | null>(null)
  useEffect(()=> {
    (async function(){
      const quiz = await getQuizData();
      setQuiz(quiz)
    })()
  }, [])

  const { quizDispatch } = useQuiz();
  const classes = useStyles();
  return (
    <Box className = {classes.homePage}>
      <NavBar />
      <Box className={classes.intro}>
        Are you a fitness fanatic?
        <br />
        Checkout the below quizes and have fun!
      </Box>
      <Box className={classes.quizChoices}>
      {quiz && quiz.map((genre) => (
          <Box className={classes.choice}>
            <Typography variant="h5" style={{fontWeight:"bold"}} className={classes.quizName}>{genre.quizName}</Typography>
            <Image src={genre.quizName ==="Fitness" ? Fitness : HealthyMeal} imageStyle = {{width: 180, height: 200}} />
            <Link style= {{textDecoration:"none"}} to={`/${genre.quizName}`}>
              <Button
              variant="contained" color = "primary"
                onClick={() =>
                  quizDispatch({
                    type: "SET_CURRENT_QUIZ",
                    payload: genre
                  })
                }
              >
                <strong>Start</strong>
              </Button>
            </Link>
          </Box>
        ))}
    
      </Box>
    </Box>
  );
}


