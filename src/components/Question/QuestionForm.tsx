import AnswerCheck from "../AnswerCheck/AnswerCheck";
import Condition from "../Condition/Condition";
import QuestionList from "./QuestionList";

const QuestionForm = () => {
  return (
    <div>
      <AnswerCheck />
      <Condition />
      <QuestionList />
    </div>
  );
};

export default QuestionForm;
