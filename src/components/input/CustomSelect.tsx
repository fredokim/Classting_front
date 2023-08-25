import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { indexAction } from "../../redux";
import { FormItemOption } from "../../redux/type";

import * as Styled from "./CustomSelect.styled";

interface CustomSelectProps {
  options: FormItemOption[];
}

const CustomSelect = (props: CustomSelectProps) => {
  const { options } = props;

  const dispatch = useDispatch<any>();

  const outPutData = useSelector((state: any) => state.Output);
  const { page, length, items, selectedValue, lastItem } = outPutData;
  const defaultValue =
    page === length
      ? lastItem[0]
        ? lastItem[0]
        : { id: 0 }
      : selectedValue[0]
      ? selectedValue[0]
      : { id: 0 };
  const [selectItem, setSelectItem] = useState<FormItemOption[]>([
    defaultValue,
  ]);

  const onChangeSelect = (e: any) => {
    const id = Number(e.target.value);
    const text = e.target.options[e.target.selectedIndex].text;
    const selectValue = [{ id, text }];
    setSelectItem(selectValue);
    if (page === length) {
      dispatch(indexAction.setLastItem([{ id, text }]));
    }
  };

  // 값 변경시
  useEffect(() => {
    dispatch(indexAction.setSlectedValue(selectItem));
  }, [selectItem]);

  return (
    <Styled.CustomSelect onChange={onChangeSelect} value={defaultValue.id}>
      <option value={0} onChange={onChangeSelect} disabled>
        --선택해주세요--
      </option>
      {options.map((option: FormItemOption) => {
        const { id, text } = option;
        return (
          <Styled.CustomOption key={id} value={id}>
            {text}
          </Styled.CustomOption>
        );
      })}
    </Styled.CustomSelect>
  );
};

export default CustomSelect;
