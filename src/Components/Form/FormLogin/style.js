import styled from "styled-components";

export const Login = styled.form`
  width: 90%;

  .container_input-label {
    color: var(--white-1);
    font-size: var(--headline);
    margin: 22px 0;
  }

  span {
    color: var(--red);
    font-size: var(--headline);
    margin: 10px 0;
  }

  .errors {
    border: 1.5px solid var(--red);
    input::placeholder {
      color: var(--red);
    }
    svg {
      color: var(--red);
    }
  }

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
