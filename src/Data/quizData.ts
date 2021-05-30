import { Quiz } from "./quiz-types";

const quizOne: Quiz[] = [
  {
    id: 0,
    quizName: "Fitness",
    questions: [
      {
        question: "Muscle weighs more than fat.",
        options: [
          {
            text: "True",
            isRight: false
          },
          {
            text: "False",
            isRight: true
          }
        ]
      },
      {
        question:
          "Maintaining physical fitness requires major lifestyle changes.",
        options: [
          {
            text: "True",
            isRight: false
          },
          {
            text: "False",
            isRight: true
          }
        ]
      },
      {
        question:
          "The workout term aerobic exercise is interchangeable with which term?",
        options: [
          {
            text: "Ballistic",
            isRight: false
          },
          {
            text: "Anabolic",
            isRight: false
          },
          {
            text: "Cardio",
            isRight: true
          },
          {
            text: "Metabolism",
            isRight: false
          }
        ]
      },
      {
        question: "What does HIIT stand for?",
        options: [
          {
            text: "Heat",
            isRight: false
          },
          {
            text: "High-interval intensity training",
            isRight: false
          },
          {
            text: "High-interval intensity therapy",
            isRight: false
          },
          {
            text: "High-intensity interval training",
            isRight: true
          }
        ]
      },
      {
        question:
          "The more you sweat during a workout, the more fat the body is burning.",
        options: [
          {
            text: "True",
            isRight: false
          },
          {
            text: "False",
            isRight: true
          }
        ]
      }
    ]
  },
  {
    id: 1,
    quizName: "Nutrition",
    questions: [
      {
        question:
          "What is the primary purpose of making sure your body receives carbohydrates?",
        options: [
          {
            text: "To minimise the body's ability to absorb calcium",
            isRight: false
          },
          {
            text: "To heighten cholesterol levels",
            isRight: false
          },
          {
            text: "To improve bone marrow",
            isRight: false
          },
          {
            text: "To provide the body with energy",
            isRight: true
          }
        ]
      },
      {
        question: "Citrus fruits are an excellent source of?",
        options: [
          {
            text: "calcium",
            isRight: false
          },
          {
            text: "vitamin C",
            isRight: true
          },
          {
            text: "vitamin B",
            isRight: false
          },
          {
            text: "vitamin D",
            isRight: false
          }
        ]
      },
      {
        question:
          "The amount of energy the body gets from food is measured in?",
        options: [
          {
            text: "Metabolism",
            isRight: false
          },
          {
            text: "Calories",
            isRight: true
          },
          {
            text: "Diet",
            isRight: false
          },
          {
            text: "Protein",
            isRight: false
          }
        ]
      },
      {
        question: "Among the given nutrients milk is a poor source of",
        options: [
          {
            text: "Calcium",
            isRight: false
          },
          {
            text: "Protein",
            isRight: false
          },
          {
            text: "Carbohydrate",
            isRight: false
          },
          {
            text: "Vitamin C",
            isRight: true
          }
        ]
      },
      {
        question: "Which of the following is not an artificial sweetener?",
        options: [
          {
            text: "saccharin",
            isRight: false
          },
          {
            text: "aspartame",
            isRight: false
          },
          {
            text: "sucrose",
            isRight: true
          },
          {
            text: "neotame",
            isRight: false
          }
        ]
      }
    ]
  }
];

export { quizOne };
