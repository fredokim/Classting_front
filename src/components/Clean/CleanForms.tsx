import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { indexAction } from "../../redux";
import FormItemList from "../Form/FormItemList";
import * as Styled from "../Form/Forms.styled";

const CleanForms = () => {
  const dispatch = useDispatch<any>();

  const cleanData = useSelector((state: any) => state.Clean);
  const { title, items, formId } = cleanData.data;

  // 페이지 초기화 시 데이터 가져오기 및 스토어 초기화
  useEffect(() => {
    dispatch(indexAction.reset());
    dispatch(indexAction.getApiCleanData());
  }, []);

  // 데이터 가져온 후 output에 formId 저장
  useEffect(() => {
    // setDefaultFrom
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

export default CleanForms;
