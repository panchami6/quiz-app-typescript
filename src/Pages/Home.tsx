import "./home.css";
import { quizOne } from "../Data/quizData";
import { Link } from "react-router-dom";
import { useQuiz } from "../Context/quizContext";
import ChoiceBro from "../Images/ChoiceBro.png";
import Fitness from "../Images/Fitness.png";
import HealthyMeal from "../Images/HealthyMeal.png";
import { NavBar } from "./NavBar";

export default function Home() {
  const { quizDispatch } = useQuiz();

  return (
    <div className = "home-page">
      <NavBar />
      <div className = "header">
        <div className = "intro">
          <h1>Are You a Fitness Fanatic? <br /><span>Test your knowledge on Fitness and Nutrition</span></h1>
        </div>
        <div>
          <img className ="img-hero" src={ChoiceBro} alt="hero" />
        </div>
      </div>
      <div className="quiz-choices">
        {quizOne.map((genre) => (
          <div className="choice">
            <h2>{genre.quizName}</h2>
            <img className = "img-category" src={genre.quizName ==="Fitness" ? Fitness : HealthyMeal } alt="Fitness" />
            <Link style= {{textDecoration:"none"}} to={`/${genre.quizName}`}>
              <button className ="btn-category"
                onClick={() =>
                  quizDispatch({
                    type: "SET_CURRENT_QUIZ",
                    payload: genre.quizName
                  })
                }
              >
                Start
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
