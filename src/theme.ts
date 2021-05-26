import { createMuiTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#ce8ed9",
      },
      secondary: {
        main: "#5e2a68",
      },
    },
});

export const useStyles = makeStyles((theme) => ({
  appBar: {
      backgroundColor: "#fff",
      borderBottom: "1px solid #e5dbe7",
      boxShadow: "0px 0px 20px 0px #ce8ed9",
      height: "10vh",
      display: "flex",
      justifyContent: "space-between",
      Alignitems: "center",
  },
  intro:{
      margin: "3rem 0rem",
      fontSize:"30px",
      color: "#5e2a68",
  },
  homePage: {
      fontFamily: "'Rubik', sans-serif",
      marginBottom: "2rem",
  },
  quizChoices: {
      position: "relative",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-evenly",
      alignItems: "center",
      textAlign: "center",
      marginTop: "1rem",
  },
  choice: {
      border: "1px solid #CE8ED9",
      display: "flex",
      flexDirection:"column",
      justifyContent:"space-around",
      borderRadius: "1rem",
      width: "300px",
      height: "280px",
      padding: "4rem",
      boxShadow: "10px 10px 42px 0px rgba(0, 0, 0, 0.2)",
  },
  quizName : {
      fontSize:25,
      color: "#5e2a68",
  },
  playQuiz : {
    fontFamily: "'Rubik', sans-serif",
    textAlign: "center",
  },
  quizCard: {
    border: "1px solid #5e2a68",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    position: "absolute",
    minHeight: "250px",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor:"#5e2a68",
    color: "#ffffff",
    borderRadius: "15px",
    padding: "1rem",
    boxShadow: "10px 10px 42px 0px rgba(0, 0, 0, 0.75)",
  },
  questionCount: {
    fontSize: "24px",
  },
  question: {
    fontSize: "18px",
  },
  score: {
    fontSize: "20px",
  },
  answerBox: {
    margin: "1.5rem 17rem",
    width: "60%",
    border: "1px solid #ce8ed9",
    minHeight: "50px",
    backgroundColor:"#fff",
    color: "#ffffff",
    borderRadius: "15px",
    padding: "1rem",
    boxShadow: "10px 10px 42px 0px rgba(0, 0, 0, 0.75)"
  },
  quest: {
    color: "rgb(224, 18, 18)",
    fontSize: "large",
    fontWeight: "bold",
  },
  answer: {
    color: "rgb(15, 167, 15)",
    fontSize: "large",
    paddingTop: "0.5rem"
  }
}));

export default theme;
