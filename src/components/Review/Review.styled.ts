import styled from "styled-components";

export const QuestionDiv = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.125rem;
  font-weight: 500;
  padding: 0.4rem 0;
`;

export const choiceList = styled.div`
  padding: 0.4rem 0 2rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 0.25rem;
`;

interface wordProps {
  correct: string;
}

export const words = styled.div`
  border-radius: 0.5rem;
  border: 1px solid #d2d8e1;
  background-color: "#fff";
  display: inline-flex;
  padding: 0.8125rem 1rem;
  justify-content: center;
  align-items: center;
`;

export const word = styled.div<wordProps>`
  color: ${(props) => (props.correct === "correct" ? "#00d37a" : "#ff414d")};
  text-align: center;
  font-feature-settings: "clig" off, "liga" off;
  font-family: Spoqa Han Sans Neo;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 100%; /* 0.875rem */
`;
