import styled from "styled-components";

export const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
`;

export const Div = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  position: fixed;
  top: 20%;
  left: 5%;

  .container_modal {
    width: 100vw;
    height: 100vh;
    background-color: red;
  }

  .container_modal-header {
    background-color: var(--grey-2);
    border-radius: var(--radios-inputs-buttons);
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
  }

  .container_modal-header h1 {
    color: var(--grey-0);
    font-size: var(--title);
    margin-left: 20px;
  }

  .container_modal-header button {
    background-color: transparent;
    border: 0;
    color: var(--grey-1);
    margin-right: 20px;
    font-size: var(--title);
  }

  @media screen and (min-width: 769px) {
    width: 27%;
    top: 30%;
    left: 35%;
  }
`;
