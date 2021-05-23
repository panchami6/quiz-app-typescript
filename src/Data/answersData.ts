import { QuizArr } from "./answer-types";

const quizArray: QuizArr[] =[
  {
    quizName: "Fitness",
    questions: [
      {
        quest: "Muscle weighs more than fat.",
        ans: "False"
      },
      {
        quest: "Maintaining physical fitness requires major lifestyle changes.",
          ans: "False"
      },
      {
        quest: "The workout term aerobic exercise is interchangeable with which term?",
        ans: "cardio"
      },
      {
        quest: "What does HIIT stand for?",
        ans: "High-intensity interval training"
        
      },
      {
        quest:
          "The more you sweat during a workout, the more fat the body is burning.",
        ans: "False"
      }
    ]
  },
  {
    quizName: "Nutrition",
    questions: [
      {
        quest:
          "What is the primary purpose of making sure your body receives carbohydrates?",
        ans: "To provide the body with energy"
      },
      {
        quest: "Citrus fruits are an excellent source of?",
        ans: "vitamin C"
      },
      {
        quest:
          "The amount of energy the body gets from food is measured in?",
        ans: "Calories"
      },
      {
        quest: "Among the given nutrients milk is a poor source of",
        ans: "Vitamin C"
      },
      {
        quest: "Which of the following is not an artificial sweetener?",
        ans: "sucrose"
      }
    ]
  }
];

export { quizArray };
