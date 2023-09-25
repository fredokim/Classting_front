import { styled } from "styled-components";

export const ProgressContent = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: #fff;
  padding: 0 1.25rem 4.62rem;
`;

interface SectionContentProps {
  active: string;
}

export const SectionContent = styled.div<SectionContentProps>`
  ${(props) =>
    props.active === "true"
      ? `
  display: block;
  opacity: 1;
  `
      : `
  display: none;
  animation: FadeinUp 0.7s ease 1 forwards;
  transform: translateY(15px);
  opacity: 0;
  `};
`;

export const choiceList = styled.div`
  padding: 0.4rem 0 13rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 0.25rem;
`;

export const words = styled.div`
  border-radius: 0.5rem;
  border: 1px solid #d2d8e1;
  background-color: #fff;
  display: inline-flex;
  padding: 0.8125rem 1rem;
  justify-content: center;
  align-items: center;
`;

export const word = styled.div`
  color: #16181b;
  text-align: center;
  font-feature-settings: "clig" off, "liga" off;
  /* button/button medium */
  font-family: Spoqa Han Sans Neo;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 100%; /* 0.875rem */
`;

export const BottomSection = styled.div`
  border-top: 1px solid #ebedef;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0.75rem 1.25rem;
  background-color: #fff;
`;

export const BottomButton = styled.button`
  display: flex;
  width: 10.5rem;
  padding: 1rem;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  background: #00d37a;
  border: none;
  border-radius: 0.5rem;
  color: #fff;
  cursor: pointer;
  &.disabled {
    background: #ebedef;
    color: #d2d8e1;
  }
`;
