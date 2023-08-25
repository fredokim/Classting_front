import { styled } from "styled-components";

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const CheckBox = styled.label<{ checked: boolean }>`
  display: inline-block;
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 0.125rem;
  padding: 0.1875rem;
  -ms-grid-row-align: center;
  align-self: center;
  margin: 1.5rem 1rem;
  cursor: pointer;
  background-image: ${({ checked }) =>
    !checked
      ? "url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cmVjdCB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIGZpbGw9IiNFMUUxRTEiIHJ4PSIyIi8+PHBhdGggc3Ryb2tlPSIjRkZGIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIgZD0iTTUgOS4yMTlMOC4zIDEyLjVsNS44NjctNS44MzMiLz48L2c+PC9zdmc+)"
      : "url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cmVjdCB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIGZpbGw9IiMwMEM3QUUiIHJ4PSIyIi8+PHBhdGggc3Ryb2tlPSIjRkZGIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIgZD0iTTUgOS4yMTlMOC4zIDEyLjVsNS44NjctNS44MzMiLz48L2c+PC9zdmc+);"};
  background-repeat: no-repeat;
  background-position: center;
`;

export const HiddenCheckbox = styled.input`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: 0;
  padding: 0;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: row;
  margin: 0;
  flex-grow: 1;
`;

export const CheckboxLabel = styled.label`
  display: flex;
  flex-direction: row;

  margin: 0;
  flex-grow: 1;
`;

export const CheckboxSpan = styled.span`
  &:checked {
    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cmVjdCB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIGZpbGw9IiMwMEM3QUUiIHJ4PSIyIi8+PHBhdGggc3Ryb2tlPSIjRkZGIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIgZD0iTTUgOS4yMTlMOC4zIDEyLjVsNS44NjctNS44MzMiLz48L2c+PC9zdmc+);
  }
`;

export const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const InnerText = styled.div`
  font-size: 1rem;
  font-weight: 500;
  color: #323232;
`;
