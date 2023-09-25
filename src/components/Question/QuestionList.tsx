import { useDispatch, useSelector } from "react-redux";
import { indexAction } from "../../redux";

import parse from "html-react-parser";

import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import * as Styled from "./QuestionList.styled";
import moment from "moment";

const QuestionList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<any>();
  const [searchParms] = useSearchParams();

  const Question = useSelector((state: any) => state.Question);
  const activeIndex = Question.page ?? 1;
  const { results } = Question.result;

  const condition = useSelector((state: any) => state.Condition);
  const { conditionList } = condition;

  const review = useSelector((state: any) => state.Review);
  const { data } = review;

  const [answer, setAnswer] = useState<string>("");
  const [isDisable, setIsDisable] = useState<string>("false");

  const clickNext = () => {
    checkAnswer();

    if (activeIndex === Question.result.results.length) {
      const endTime = moment(new Date()).format("YYYY-MM-DD HH:mm:ss");
      dispatch(indexAction.setEndTime({ endTime }));
      navigate(`/result`);
    }

    dispatch(indexAction.setPage(1));
  };

  const clickWord = (e: any) => {
    setIsDisable("true");
    setAnswer(e.target.innerText);
  };

  const checkAnswer = () => {
    const question = results[activeIndex - 1];
    const rightAnswer = question.correct_answer ?? "";

    const correct = answer === rightAnswer ? "correct" : "wrong";

    if (correct === "wrong") {
      const worngQuiz = [{ ...results[activeIndex - 1], choice: answer }];
      const newArray = [...data, ...worngQuiz];

      dispatch(indexAction.setReviewData(newArray));
    }

    dispatch(indexAction.setShowAnswerModal({ show: true, answer: correct }));

    const newConditionList = conditionList.map((item: any, index: number) => {
      if (index === activeIndex - 1) {
        return correct;
      }
      return item;
    });

    dispatch(indexAction.setConditionList(newConditionList));
  };

  useEffect(() => {
    if (!results) {
      const form = {
        amount: searchParms.get("amount"),
        category: searchParms.get("category"),
        difficulty: searchParms.get("difficulty"),
      };
      dispatch(indexAction.getApiQuestionData(form));
    }
  }, []);

  return (
    <>
      <Styled.ProgressContent>
        {results &&
          results.map((item: any, index: number) => {
            const choiceList = [item.correct_answer, ...item.incorrect_answers];
            const mixList = choiceList.sort((a, b) => a - b);
            const active = activeIndex - 1 === index;
            return (
              <Styled.SectionContent key={index} active={active.toString()}>
                <Styled.QuestionDiv>{parse(item.question)}</Styled.QuestionDiv>
                <Styled.choiceList>
                  {mixList.map((_item: any, _index: number) => {
                    const isHave = answer === _item;
                    return (
                      <Styled.words
                        key={_index}
                        onClick={clickWord}
                        have={isHave.toString()}
                      >
                        <Styled.word have={isHave.toString()}>
                          {parse(_item)}
                        </Styled.word>
                      </Styled.words>
                    );
                  })}
                </Styled.choiceList>
              </Styled.SectionContent>
            );
          })}

        <Styled.BottomSection>
          <Styled.BottomButton onClick={clickNext} active={isDisable}>
            Next
          </Styled.BottomButton>
        </Styled.BottomSection>
      </Styled.ProgressContent>
    </>
  );
};

export default QuestionList;
