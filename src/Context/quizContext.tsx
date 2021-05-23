import { createContext, useContext, useReducer, ReactNode } from "react";
import { quizReducer } from "../Reducer/QuizReducer";
type StatusState = "starting" | "finished" | "reset";

export type QuizStateType = {
  status: StatusState;
  score: number;
  id: number;
  initialQuestion: number;
  showScore: boolean;
};

const initialQuizState: QuizStateType = {
  score: 0,
  id: 0,
  status: "starting",
  initialQuestion: 0,
  showScore: false
};

type QuizProviderProps = {
  children: ReactNode;
};

type createContextType = {
  quizState: QuizStateType;
  quizDispatch: Function;
};

export const QuizContext = createContext<createContextType>({
  quizState: initialQuizState,
  quizDispatch: () => {}
});

export function QuizProvider({ children }: QuizProviderProps) {
  const [quizState, quizDispatch] = useReducer(quizReducer, initialQuizState);
  return (
    <QuizContext.Provider value={{ quizState, quizDispatch }}>
      {children}
    </QuizContext.Provider>
  );
}

export function useQuiz() {
  return useContext(QuizContext);
}
