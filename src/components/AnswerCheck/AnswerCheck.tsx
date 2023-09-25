import { useDispatch, useSelector } from "react-redux";
import * as Styled from "./AnswerCheck.styled";
import { useEffect } from "react";
import { allowScroll, preventScroll } from "../../utils/scroll";
import { indexAction } from "../../redux";

const AnswerCheck = () => {
  const dispatch = useDispatch<any>();

  const Answer = useSelector((state: any) => state.Modal);
  const { showAnswerModal } = Answer;
  const { answer, show } = showAnswerModal;

  const setClose = () => {
    dispatch(indexAction.setShowAnswerModal({ show: false, answer: "" }));
  };

  useEffect(() => {
    const prevScrollY = preventScroll();
    return () => {
      allowScroll(prevScrollY);
    };
  }, []);

  return (
    <>
      {show && (
        <Styled.BackDrop>
          <Styled.Modal_Container>
            <Styled.ShowResult>
              <img src={`${answer}.svg`} />
              <Styled.ResultText active={answer.toString()}>
                {answer === "wrong" ? "Wrong!" : "Correct!"}
              </Styled.ResultText>
              <Styled.StyledButton onClick={setClose}>
                Close
              </Styled.StyledButton>
            </Styled.ShowResult>
          </Styled.Modal_Container>
        </Styled.BackDrop>
      )}
    </>
  );
};

export default AnswerCheck;
