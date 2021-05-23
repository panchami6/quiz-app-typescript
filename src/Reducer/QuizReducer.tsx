import { QuizStateType } from "../Context/quizContext";

type Action =
  | { type: "RESET" }
  | { type: "NEXT_QUESTION"; payload: { isRight: boolean } }
  | { type: "SET_CURRENT_QUIZ"; payload: string }
  | { type: "CHOOSE_OTHER_SET" };

export function quizReducer(state: QuizStateType, action: Action) {
  const { score, initialQuestion } = state;
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
          initialQuestion: initialQuestion + 1,
          score: score + 1
        };
      }

      return {
        ...state,
        initialQuestion: initialQuestion + 1
      };

    case "SET_CURRENT_QUIZ":
      if (action.payload === "Fitness") {
        return {
          ...state,
          id: 0
        };
      } else {
        return {
          ...state,
          id: 1
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

    default:
      return state;
  }
}
