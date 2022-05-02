import styled from "styled-components";

export const Form = styled.form`
  background-color: var(--grey-3);
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;

  .container_input-label,
  label {
    color: var(--white-1);
    font-size: var(--headline);
    margin: 18px 0;
  }

  section {
    width: 90%;
    margin: 0 auto;
  }

  section:first-child {
    margin-bottom: 18px;
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

  Button {
    margin: 18px auto;
  }
`;
