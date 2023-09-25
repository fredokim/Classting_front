import { useSelector } from "react-redux";

import parse from "html-react-parser";

import * as Styled from "./Review.styled";

const Review = () => {
  const Review = useSelector((state: any) => state.Review);
  const { data } = Review;

  console.log(data);
  return (
    <>
      {data &&
        data.map((item: any, index: number) => {
          const { question, choice, correct_answer } = item;
          const choiceList = [correct_answer, choice];
          const mixList = choiceList.sort((a, b) => a - b);

          return (
            <>
              <Styled.QuestionDiv>{parse(question)}</Styled.QuestionDiv>
              <Styled.choiceList>
                <Styled.words>
                  <Styled.word correct={"wrong"}>
                    Choice :{parse(choice)}
                  </Styled.word>
                </Styled.words>
                <Styled.words>
                  <Styled.word correct={"correct"}>
                    Correct: {parse(correct_answer)}
                  </Styled.word>
                </Styled.words>
              </Styled.choiceList>
            </>
          );
        })}
    </>
  );
};

export default Review;
