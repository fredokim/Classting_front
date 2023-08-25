import { styled } from "styled-components";

export const Row = styled.div`
  gap: 0.5rem;
  display: flex;
`;

export const Card = styled.div`
  flex: 0 0 50%;
  max-width: 50%;
  border: none;
  border-radius: 4px;
  box-shadow: 0 0.0625rem 0.3125rem 0 rgba(0, 0, 0, 0.2);
`;

export const CardBody = styled.div`
  flex: 1 1 auto;
  min-height: 0.0625rem;
`;

export const CardTitle = styled.h4`
  text-align: center;
  margin: 1rem 0;
  font-size: 1rem;
`;

export const CardImageClean = styled.div`
  background-image: url(https://dmmj3ljielax6.cloudfront.net/upload/service/71c1ef33-506c-44de-9663-04cbf241fddd.png?webp=1);
  background-size: cover;
  background-position: 50% 50%;
  height: 9.375rem;
`;

export const CardImageLesson = styled.div`
  background-image: url(https://dmmj3ljielax6.cloudfront.net/upload/service/05389ab5-c05d-45c8-abe1-d0b90019cb75.png?webp=1);
  background-size: cover;
  background-position: 50% 50%;
  height: 9.375rem;
`;
