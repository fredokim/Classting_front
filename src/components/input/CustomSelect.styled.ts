import { styled } from "styled-components";

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
