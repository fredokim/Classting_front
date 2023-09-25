import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { styled } from "styled-components";
import OptionForm from "./components/Option/OptionForm";
import QuestionForm from "./components/Question/QuestionForm";
import Result from "./components/Result/Result";
import Review from "./components/Review/Review";

const Container = styled.div`
  padding: 1.25rem 0 0;
  max-width: 60.625rem;
  margin: 0 auto;
`;

function App() {
  return (
    <Container>
      <Router>
        <Routes>
          <Route path="/" element={<OptionForm />}></Route>
          <Route path="/quiz" element={<QuestionForm />}></Route>
          <Route path="/result" element={<Result />}></Route>
          <Route path="/reivew_note" element={<Review />}></Route>
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
