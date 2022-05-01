import styled from "styled-components";

export const Login = styled.form`
  width: 90%;

  section {
    display: flex;
    flex-direction: column;
  }

  Button {
    margin-top: 19.5px;
    width: 100%;
  }

  @media screen and (min-width: 769px) {
    Button {
      margin-top: 3.8vh;
      width: 100%;
    }
  }
`;
