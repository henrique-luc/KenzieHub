import styled from "styled-components";

export const Register = styled.form`
  width: 90%;

  .container_input-label {
    color: var(--white-1);
    font-size: var(--headline);
    margin: 22px 0;
  }

  label {
    color: var(--white-1);
    font-size: var(--headline);
  }

  Button {
    margin-top: 16.16px;
    width: 100%;
  }

  span {
    color: var(--red);
    font-size: var(--headline);
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

  section:nth-child(4) {
    margin-bottom: 22px;
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
    margin-top: 22px;
    cursor: pointer;
  }

  @media screen and (min-width: 769px) {
    Button {
      margin-top: 3.2vh;
    }
  }
`;
