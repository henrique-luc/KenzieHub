import styled from "styled-components";

export const Register = styled.form`
  width: 90%;

  Button {
    margin-top: 16.16px;
    width: 100%;
  }

  select {
    background-color: var(--grey-2);
    border-radius: var(--radios-inputs-buttons);
    border: 1.5px solid transparent;
    color: var(--grey-1);
    padding: 1rem;
    width: 100%;
    display: flex;
    transition: 0.4s;
  }

  @media screen and (min-width: 769px) {
    Button {
      margin-top: 3.2vh;
    }
  }
`;
