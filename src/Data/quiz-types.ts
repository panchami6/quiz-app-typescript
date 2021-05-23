export type Option = {
    /**
     * Text to show the player
     */
    text: string;
  
    /**
     * For the right answer make this true
     */
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
  