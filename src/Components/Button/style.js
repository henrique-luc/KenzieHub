import styled from "styled-components";

export const Container = styled.button`
  background-color: ${(props) => props.backgroundColor};
  color: var(--white-1);
  border-radius: 4px;
  border: 1.5px solid transparent;
  transition: 0.5s;
  padding: 10px;
  width: 90%;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: var(--title);

  :hover {
    background-color: ${(props) =>
      props.backgroundColor === "#ff427f" ? "#59323f" : "#343b41"};
  }
`;
