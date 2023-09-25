import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import { indexAction } from "../../redux";

import { Difficulty } from "../../const";
import * as Styled from "./OptionForm.styled";
import moment from "moment";

const OptionForm = () => {
  const dispatch = useDispatch<any>();

  const navigate = useNavigate();

  const categoryData = useSelector((state: any) => state.Category);
  const { trivia_categories } = categoryData.trivia_categories;

  const [form, setForm] = useState({
    amount: 1,
    category: "",
    difficulty: "",
  });

  useEffect(() => {
    dispatch(indexAction.getApiCategoryData());
  }, []);

  const changeAmount = (e: any) => {
    setForm({
      ...form,
      amount: e.target.value,
    });
  };

  const selectCategory = (e: any) => {
    setForm({
      ...form,
      category: e.target.value,
    });
  };

  const selectDifficulty = (e: any) => {
    setForm({
      ...form,
      difficulty: e.target.value,
    });
  };

  const getQuestion = () => {
    if (!form.amount) {
      alert("please input amount");
      return;
    }
    const startTime = moment(new Date()).format("YYYY-MM-DD HH:mm:ss");
    dispatch(indexAction.setStartTime({ startTime }));
    dispatch(indexAction.getApiQuestionData(form));
    navigate(
      `/quiz?amount=${form.amount.toString()}&category=${
        form.category
      }&difficulty=${form.difficulty.toLowerCase()}`
    );
  };

  return (
    <>
      <Styled.Row>
        <Styled.Label>Number of Questions</Styled.Label>
        <Styled.OptionInput
          type="number"
          onChange={changeAmount}
          defaultValue={1}
        />
      </Styled.Row>

      <Styled.Row>
        <Styled.Label>Select Category</Styled.Label>
        <Styled.CustomSelect onChange={selectCategory}>
          <Styled.CustomOption value="">Any Category</Styled.CustomOption>
          {trivia_categories &&
            trivia_categories.map((item: any) => {
              return (
                <Styled.CustomOption key={item.id} value={item.id}>
                  {item.name}
                </Styled.CustomOption>
              );
            })}
        </Styled.CustomSelect>
      </Styled.Row>

      <Styled.Row>
        <Styled.Label>Select Difficulty</Styled.Label>
        <Styled.CustomSelect onChange={selectDifficulty}>
          <Styled.CustomOption value="">Any Type</Styled.CustomOption>
          {Difficulty.map((item: any) => {
            return (
              <Styled.CustomOption key={item.id} value={item.name}>
                {item.name}
              </Styled.CustomOption>
            );
          })}
        </Styled.CustomSelect>
      </Styled.Row>

      <button onClick={getQuestion}>퀴즈 풀기</button>
    </>
  );
};

export default OptionForm;
