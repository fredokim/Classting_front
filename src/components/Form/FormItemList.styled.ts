import { styled } from "styled-components";

export const FormItemList = styled.ul`
  margin: 0;
`;

export const QuestionWrpa = styled.div`
  padding: 2.5rem 0;
`;

export const ButtonWrap = styled.div`
  flex-direction: row;
  width: 100%;
  text-align: right;
  display: flex;
  justify-content: flex-end;
`;

export const StepButton = styled.button`
  height: 3rem;
  text-align: center;
  font-size: 1rem;
  font-weight: 500;
  border-radius: 4px;
  outline: none;
  flex: none;
  width: 7.5rem;
  cursor: pointer;
  &.prev {
    background-color: #fff;
    color: #00c7ae;
    border: 0.0625rem solid #e1e1e1;
  }

  &.next {
    margin-left: 0.75rem;
    background-color: #00c7ae;
    color: #fff;
    border: none;
  }
`;
