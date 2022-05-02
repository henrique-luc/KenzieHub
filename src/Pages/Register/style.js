import styled from "styled-components";

export const ContainerRegister = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;

  .container_register-logo {
    width: 296px;
    display: flex;
    justify-content: space-between;
    margin-top: 55.8px;
  }

  h1 {
    color: var(--color-primary);
    font-size: var(--title);
    margin-bottom: 35.7px;
  }

  .container_register-button {
    background-color: var(--grey-3);
    border: 0;
    color: var(--white-1);
    width: 79.5px;
    height: 25.5px;
    border-radius: var(--radios-inputs-buttons);
    font-size: var(--headline);

    &:hover {
      background-color: #343b41;
    }
  }

  .container_register-form {
    background-color: var(--grey-3);
    width: 296px;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 50px;
  }

  h2 {
    color: var(--white-1);
    font-size: var(--title);
    font-weight: bold;
    margin: 33.5px 0 0;
  }

  p {
    color: var(--grey-1);
    font-size: var(--headline);
    font-weight: 600;
    margin: 27.3px 0 17.6px;
  }

  @media screen and (min-width: 769px) {
    .container_register-logo {
      width: 370px;
    }

    .container_register-button {
      width: 5vw;
      height: 32px;
    }

    .container_register-form {
      width: 370px;
    }

    h2 {
      margin: 6.7vh 0 0;
    }

    p {
      margin: 3.5vh 0 3.5vh;
    }
  }
`;
