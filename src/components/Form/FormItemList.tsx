import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { indexAction } from "../../redux";
import { FormItemOption, FormItems } from "../../redux/type";
import FormItem from "./FormItem";
import * as Styled from "./FormItemList.styled";

interface FormItemListProps {
  data: [];
}

const FormItemList = (props: FormItemListProps) => {
  const { data } = props;
  const dispatch = useDispatch<any>();

  const outPutData = useSelector((state: any) => state.Output);
  const { id, page, items, length, selectedValue, lastItem } = outPutData;

  const [showResult, setShowResult] = useState<boolean>(false);
  const [result, setResult] = useState<any>([]);

  const nextPage = () => {
    if (checkValidation()) {
      if (page === length) {
        alert("제출되었습니다.");
        makeJsonResult();
        setShowResult(true);
        return;
      }
      if (items.length === 0) {
        const newItems: any = [];
        newItems.push(selectedValue);
        dispatch(indexAction.setItems(newItems));
      } else {
        const newItems: any = [...items];
        newItems[page - 1] = selectedValue;
        dispatch(indexAction.setItems(newItems));
      }
      dispatch(indexAction.setPage(1));
      dispatch(indexAction.setSlectedValue([]));
    } else alert("값을 입력해 주세요!");
  };

  const prevPage = () => {
    dispatch(indexAction.setPage(-1));
    dispatch(indexAction.setSlectedValue(items[page - 2]));
  };

  const checkValidation = () => {
    if (page === length) {
      return lastItem.length;
    }
    return selectedValue.length;
  };

  const makeJsonResult = () => {
    const lastArray = [...items, lastItem];
    const resultItems = lastArray.map((item: any) => {
      const answerArray = item.map((option: FormItemOption) => {
        return option.text;
      });
      const answer = answerArray.join(", ");
      return { id: Number(item[0].id), answer: answer };
    });
    const result = {
      id: id,
      items: resultItems,
    };
    setResult(result);
  };

  return (
    <>
      {showResult ? (
        <div>{<pre>{JSON.stringify(result, null, 2)}</pre>}</div>
      ) : (
        <Styled.FormItemList>
          <Styled.QuestionWrpa>
            {data.map((item: FormItems, index: number) => {
              const ItemPage = index + 1;
              return (
                <div key={index}>
                  {ItemPage === page ? <FormItem data={item} /> : <></>}
                </div>
              );
            })}
          </Styled.QuestionWrpa>
          <Styled.ButtonWrap>
            {page !== 1 ? (
              <Styled.StepButton className="prev" onClick={prevPage}>
                이전
              </Styled.StepButton>
            ) : (
              <></>
            )}
            <Styled.StepButton className="next" onClick={nextPage}>
              {page === data.length ? "제출" : "다음"}
            </Styled.StepButton>
          </Styled.ButtonWrap>
        </Styled.FormItemList>
      )}
    </>
  );
};
export default FormItemList;
