import styled from "styled-components";

export const BackDrop = styled.div`
  height: calc(100% - 1rem);
  width: 100vw;
  -webkit-transition: 0.5s;
  overflow: auto;
  transition: all 0.3s linear;
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const Modal_Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--color-background);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 1 !important;
`;

export const ShowResult = styled.div`
  background-color: #fff;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

interface ResultProps {
  active: string;
}

export const ResultText = styled.div<ResultProps>`
color: ${(props) =>
  props.active === "corret"
    ? `#00d37a`
    : props.active === "wrong"
    ? `#ff414d`
    : `#16181b`}
font-family: Spoqa Han Sans Neo;
font-size: 1.5rem;
font-style: normal;
font-weight: 700;
line-height: 2rem;
text-align: center;
`;

export const StyledButton = styled.button`
  bottom: 0;
  width: 100%;
  background: #00d37a;
  border: none;
  border-radius: 0.5rem;
  color: #fff;
  display: flex;
  padding: 1rem;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
