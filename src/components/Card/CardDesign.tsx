import * as Styled from "./CardDesign.styled";

const CardDesign = () => {
  const onMove = (path: string) => {
    window.history.pushState({}, "", path);
    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
  };

  return (
    <Styled.Row>
      <Styled.Card onClick={() => onMove("/clean")}>
        <Styled.CardBody>
          <Styled.CardImageClean />
          <Styled.CardTitle>대청소</Styled.CardTitle>
        </Styled.CardBody>
      </Styled.Card>

      <Styled.Card onClick={() => onMove("/lesson")}>
        <Styled.CardBody>
          <Styled.CardImageLesson />
          <Styled.CardTitle>영어과외</Styled.CardTitle>
        </Styled.CardBody>
      </Styled.Card>
    </Styled.Row>
  );
};
export default CardDesign;
