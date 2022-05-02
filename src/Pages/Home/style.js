import styled from "styled-components";

export const ContainerHome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;

  .container_home-logo {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin: 29px auto 0;
    border-bottom: 1px solid var(--grey-3);
  }

  .container_home-logo div {
    width: 90%;
    display: flex;
    justify-content: space-between;
  }

  h1 {
    color: var(--color-primary);
    font-size: var(--title);
    margin-bottom: 35.7px;
  }

  .container_home-user {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    border-bottom: 1px solid var(--grey-3);
    height: 131px;
  }

  .container_home-user div {
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .container_home-user h2 {
    color: var(--white-1);
    font-size: var(--logo);
    margin-bottom: 10px;
  }

  .container_home-user h3 {
    color: var(--grey-1);
    font-size: var(--headline);
  }

  .container_home-tec {
    width: 90%;
    display: flex;
    justify-content: space-between;
    margin: 27px 0;
  }

  .container_home-tec h2 {
    color: var(--white-1);
    font-size: var(--title);
  }

  .container_home-list {
    width: 90%;
    height: fit-content;
    background-color: var(--grey-3);
    border-radius: var(--radios-inputs-buttons);
  }

  .container_home-list-div div {
    background-color: var(--grey-4);
    border-radius: var(--radios-inputs-buttons);
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 18px auto;
    width: 95%;
    padding: 15px 0;
    cursor: pointer;

    &:hover {
      background-color: var(--grey-2);

      h3 {
        color: var(--grey-0);
      }
    }
  }

  .container_home-list div h2 {
    color: var(--white-1);
    font-size: var(--title);
    margin: 0 12px;
  }

  .container_home-list div h3 {
    color: var(--grey-1);
    font-size: var(--headline);
    margin: 0 12px;
  }

  @media screen and (min-width: 769px) {
    .container_home-logo div {
      width: 57%;
    }

    .container_home-user {
      height: 118px;
    }

    .container_home-user div {
      width: 57%;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }

    .container_home-user h2 {
      margin-bottom: 0;
    }

    .container_home-tec {
      width: 57%;
    }

    .container_home-list {
      width: 57%;
    }
  }
`;
