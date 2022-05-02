import styled from "styled-components";

export const Container = styled.button`
  background-color: ${(props) => props.backgroundColor};
  color: var(--white-1);
  border: 0;
  border-radius: var(--radios-inputs-buttons);
  transition: 0.5s;
  padding: ${(props) => props.padding};
  height: fit-content;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: var(--headline);

  :hover {
    background-color: ${(props) =>
      props.backgroundColor === "#ff427f" ? "#59323f" : "#343b41"};
  }
`;
