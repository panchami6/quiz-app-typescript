import { QuizStateType } from "../Context/quizContext";
import {Quiz} from "../Data/quiz-types";

type Action =
  | { type: "RESET" }
  | { type: "NEXT_QUESTION"; payload: { isRight: boolean } }
  | { type: "SET_CURRENT_QUIZ"; payload: Quiz | null }
  | { type: "CHOOSE_OTHER_SET" }
  | { type: "SHOW_ANSWERS"}

export function quizReducer(state: QuizStateType, action: Action) {
  switch (action.type) {
    case "RESET":
      return {
        ...state,
        score: 0,
        initialQuestion: 0,
        showScore: true
      };

    case "NEXT_QUESTION":
      if (action.payload) {
        return {
          ...state,
          initialQuestion: state.initialQuestion + 1,
          score: state.score + 1
        };
      }

      return {
        ...state,
        initialQuestion: state.initialQuestion + 1
      };

    case "SET_CURRENT_QUIZ":
      if (action.payload?.quizName === "Fitness") {
        return {
          ...state,
          id: 0,
          genre: action.payload
        };
      } else {
        return {
          ...state,
          id: 1,
          genre: action.payload
        };
      }
    case "CHOOSE_OTHER_SET":
      return {
        ...state,
        id: 0,
        score: 0,
        showScore: false,
        initialQuestion: 0
      };
    case "SHOW_ANSWERS":
      return{
        ...state,
        score: 0,
        showScore: false,
      }

    default:
      return state;
  }
}
