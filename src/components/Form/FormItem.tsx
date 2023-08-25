import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { indexAction } from "../../redux";
import { FormItems, FormItemOption } from "../../redux/type";
import CustomCheckbox from "../input/CustomCheckbox";
import CustomSelect from "../input/CustomSelect";
import * as Styled from "./FormItem.styled";

interface FormItemProps {
  data: FormItems;
}

const FormItem = (props: FormItemProps) => {
  const dispatch = useDispatch<any>();

  const { data } = props;
  const { title, options, formType } = data;

  const outPutData = useSelector((state: any) => state.Output);
  const { items, page, selectedValue } = outPutData;

  const defaultValue = items[page - 1] ? items[page - 1] : selectedValue;

  const [chItem, setChItem] = useState<any>(defaultValue);

  //체크박스 클릭시
  const onClickItem = (item: FormItemOption) => {
    const isHave = chItem.find((ch: FormItemOption) => ch.id === item.id);
    if (isHave) {
      const newChItem = chItem.filter(
        (ch: FormItemOption) => ch.id !== item.id
      );
      setChItem(newChItem);
    } else {
      setChItem([...chItem, item]);
    }
  };

  // 값 변경시
  useEffect(() => {
    dispatch(indexAction.setSlectedValue(chItem));
  }, [chItem]);

  return (
    <Styled.Wrap>
      <Styled.Question>{title}</Styled.Question>
      <Styled.FormItem>
        {formType === "select" ? (
          <CustomSelect options={options} />
        ) : (
          <>
            {options.map((option: FormItemOption) => {
              const { id, text } = option;
              return (
                <CustomCheckbox
                  id={id}
                  key={id}
                  label={text}
                  onClickItem={onClickItem}
                />
              );
            })}
          </>
        )}
      </Styled.FormItem>
    </Styled.Wrap>
  );
};

export default FormItem;
