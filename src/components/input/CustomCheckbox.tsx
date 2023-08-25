import { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import * as Styled from "./CustomCheckbox.styled";

interface CheckboxProps {
  id: string | number;
  label?: string | null;
  onClickItem: (item: any) => void;
}
const CustomCheckbox = ({ id, label, onClickItem }: CheckboxProps) => {
  const newId = id.toString();

  const [isChecked, setIsChecked] = useState<boolean>(false);

  const outPutData = useSelector((state: any) => state.Output);
  const { items, page } = outPutData;

  useEffect(() => {
    if (items[page - 1] !== undefined) {
      const check = items[page - 1].find((item: any) => {
        return item.id === id;
      });

      if (check) {
        setIsChecked(true);
      }
    }
  }, [page]);

  const clickItem = () => {
    setIsChecked((current: boolean) => !current);
    onClickItem({ id, text: label });
  };

  return (
    <Styled.CheckboxContainer>
      <Styled.CheckBox checked={isChecked} htmlFor={newId}>
        <Styled.HiddenCheckbox
          id={newId}
          type="checkbox"
          onChange={clickItem}
          checked={isChecked}
        />
      </Styled.CheckBox>
      {label ? <Styled.Label htmlFor={newId}>{label}</Styled.Label> : null}
    </Styled.CheckboxContainer>
  );
};

export default CustomCheckbox;
