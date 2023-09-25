import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useSearchParams } from "react-router-dom";
import * as Styled from "./Condition.styled";
import { indexAction } from "../../redux";

const Header = () => {
  const dispatch = useDispatch<any>();

  const [searchParms] = useSearchParams();
  const length = searchParms.get("amount");

  const condition = useSelector((state: any) => state.Condition);
  const { conditionList } = condition;

  useEffect(() => {
    if (conditionList.length === 0) {
      const list = Array(Number(length)).fill("nonActive");
      dispatch(indexAction.setConditionList(list));
    }
  }, []);

  return (
    <Styled.ProgressBarContainer>
      {conditionList.map((item: any, index: number) => {
        return (
          <Styled.StepItem
            key={index}
            active={item.toString()}
          ></Styled.StepItem>
        );
      })}
    </Styled.ProgressBarContainer>
  );
};

export default Header;
