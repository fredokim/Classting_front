import CleanForms from "./components/Clean/CleanForms";
import LessonForms from "./components/Lesson/LessonForms";
import Route from "./components/Route";
import CardDesign from "./components/Card/CardDesign";

import { styled } from "styled-components";

const Container = styled.div`
  padding: 6.25rem 0 0;
  max-width: 60.625rem;
  margin: 0 auto;
`;

function App() {
  return (
    <Container>
      <Route path="/">
        <CardDesign />
      </Route>

      <Route path="/clean">
        <CleanForms />
      </Route>
      <Route path="/lesson">
        <LessonForms />
      </Route>
    </Container>
  );
}

export default App;
