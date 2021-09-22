import React from "react";
import styled from "styled-components";

const Container = styled.button`
  border: none;
  padding: 1rem 2rem;
  border-radius: 5px;
  position: fixed;
  bottom: 10px;
  right: 40px;
  background-color: #03c4a1;
  cursor: pointer;

  &:hover {
    background-color: #01a98a;
  }
`;

const ButtonTitle = styled.span`
  font-weight: 700;
  color: white;
`;

export default function FloatingButton({ title, onClick }) {
  return (
    <Container onClick={onClick}>
      <ButtonTitle>{title}</ButtonTitle>
    </Container>
  );
}
