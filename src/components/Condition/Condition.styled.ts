import { styled } from "styled-components";

export const ProgressBarContainer = styled.div`
  display: flex;
  gap: 0.19rem;
  background-color: #fff;
  width: 100%;
  padding: 1rem 1rem;
`;

interface StepProps {
  active: string;
}

export const StepItem = styled.div<StepProps>`
  border-radius: 0.25rem;
  height: 0.25rem;
  background-color: ${(props) =>
    props.active == "nonActive"
      ? "#8c8e91"
      : props.active === "correct"
      ? "#59dc94"
      : "#ff414d"};
  width: -webkit-fill-available;
`;
