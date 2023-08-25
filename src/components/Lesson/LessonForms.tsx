import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { indexAction } from "../../redux/index";
import FormItemList from "../Form/FormItemList";
import * as Styled from "../Form/Forms.styled";

const LessonForms = () => {
  const dispatch = useDispatch<any>();
  const LessonFormData = useSelector((state: any) => state.Lesson);
  const { title, items, formId } = LessonFormData.data;

  useEffect(() => {
    dispatch(indexAction.reset());
    dispatch(indexAction.getApiLessonData());
  }, []);

  useEffect(() => {
    dispatch(
      indexAction.setDefaultForm({ id: formId, length: items.length, page: 1 })
    );
  }, [formId]);

  return (
    <>
      <Styled.FormTitle>{title}</Styled.FormTitle>
      <Styled.FormContainer>
        <FormItemList data={items} />
      </Styled.FormContainer>
    </>
  );
};

export default LessonForms;
