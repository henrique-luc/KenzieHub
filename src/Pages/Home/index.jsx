import SmallButton from "../../Components/ButtonSmall";
import { ContainerHome } from "./style";
import { useState } from "react";
import api from "../../Services/api";

import Modal from "../../Components/Modal";
import FormModalReg from "../../Components/Form/FormModalReg";
import { Redirect } from "react-router-dom";

export default function Home({ authenticated }) {
  const [openModalReg, setOpenModalReg] = useState(false);
  const [openModalDet, setOpenModalDet] = useState(false);

  const [technology, setTechnology] = useState([]);
  const { token, payload } = useState(
    localStorage.getItem("@KenzieHub:token") || ""
  );

  console.log(payload);
  function loadtech() {
    api.get(`/users/${payload.id}`);
  }

  //if (!authenticated) {
  //  return <Redirect to="/" />;
  //}

  return (
    <>
      <ContainerHome>
        <section className="container_home-logo">
          <div>
            <h1>Kenzie Hub</h1>
            <SmallButton padding={"10px 20px"}>Sair</SmallButton>
          </div>
        </section>
        <section className="container_home-user">
          <div>
            <h2>Olá, Henrique</h2>
            <h3>Primeiro mósulo (Introdução ao Frontend)</h3>
          </div>
        </section>
        <section className="container_home-tec">
          <h2>Tecnologias</h2>
          <SmallButton
            padding="7px 14px"
            onClick={() => setOpenModalReg(!openModalReg)}
          >
            +
          </SmallButton>
        </section>
        <section className="container_home-list">
          <div onClick={() => setOpenModalDet(!openModalReg)}>
            <h2>React JS</h2>
            <h3>Intermediário</h3>
          </div>
        </section>
      </ContainerHome>
      <div>
        <Modal open={openModalReg}>
          <section className="container_modal-header">
            <h1>Cadastrar Tecnologia</h1>
            <button onClick={() => setOpenModalReg(!openModalReg)}>X</button>
          </section>
          <FormModalReg />
        </Modal>

        <Modal open={openModalDet}>
          <section className="container_modal-header">
            <h1>Tecnologia Detalhes</h1>
            <button onClick={() => setOpenModalDet(!openModalDet)}>X</button>
          </section>
          <FormModalReg />
        </Modal>
      </div>
    </>
  );
}
