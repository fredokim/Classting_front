import { styled } from "styled-components";

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem 0;
`;

export const Label = styled.label`
  font-size: 0.9rem;
  padding 0.5rem 0;
`;

export const OptionInput = styled.input`
  border-radius: 0.25rem;
  border: 0.0625rem solid #e1e1e1;
  padding: 0.75rem;
  font-size: 1rem;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  color: #323232;
  outline: none;
`;

export const OptionItem = styled.div`
  border-radius: 0.5rem;
  border: 1px solid #d2d8e1;
  background-color: #fff;
  display: inline-flex;
  padding: 0.8125rem 1rem;
  justify-content: center;
  align-items: center;
`;

export const CustomSelect = styled.select`
  width: 100%;
  border-radius: 0.25rem;
  border: 0.0625rem solid #e1e1e1;
  padding: 0.75rem;
  font-size: 1rem;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  color: #323232;
  outline: none;
  background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMCAyMGgyMFYwSDB6Ii8+PHBhdGggc3Ryb2tlPSIjQjVCNUI1IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgZD0iTTE2LjAzOCA3LjUwMmwtNiA2LTYtNiIvPjwvZz48L3N2Zz4=)
    no-repeat right 0.75rem top 50%;
`;

export const CustomOption = styled.option`
  font-weight: normal;
  display: block;
  white-space-collapse: collapse;
  text-wrap: nowrap;
  min-height: 1.2em;
  padding: 0px 2px 1px;
`;
