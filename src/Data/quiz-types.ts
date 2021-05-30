export type Option = {
    text: string;
    isRight: boolean;
  };
  
  export type Question = {
    question: string;
    options: Option[];
  };
  
  export type Quiz = {
    questions: Question[];
    quizName: string;
    id: number;
  };



  