import SmallButton from "../../Components/ButtonSmall";
import { ContainerHome } from "./style";
import { useEffect, useState } from "react";
import api from "../../Services/api";
import { Redirect } from "react-router-dom";

import Modal from "../../Components/Modal";
import FormModalReg from "../../Components/Form/FormModalReg";

export default function Home({ authenticated, setAuthenticated }) {
  const [openModalReg, setOpenModalReg] = useState(false);
  const [openModalDet, setOpenModalDet] = useState(false);

  const [technology, setTechnology] = useState([]);
  const token = useState(localStorage.getItem("@KenzieHub:token") || "");
  const user = JSON.parse(localStorage.getItem("@KenzieHub:user") || "");

  const { name, course_module, id } = user;

  function loadtech() {
    api
      .get(`/users/${id}`)
      .then((response) => {
        setTechnology(response.data.techs);
      })
      .catch((err) => console.log(err));
  }

  function LeavePage() {
    localStorage.clear();
    setAuthenticated(false);
  }

  useEffect(() => {
    loadtech();
  }, []);

  return (
    <>
      <ContainerHome>
        <section className="container_home-logo">
          <div>
            <h1>Kenzie Hub</h1>
            <SmallButton padding={"10px 20px"} onClick={() => LeavePage()}>
              Sair
            </SmallButton>
          </div>
        </section>
        <section className="container_home-user">
          <div>
            <h2>Olá, {name}</h2>
            <h3>{course_module}</h3>
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
          {technology.length > 0 ? (
            <div
              className="container_home-list-div"
              onClick={() => setOpenModalDet(!openModalReg)}
            >
              {technology.map((tech) => (
                <div key={tech.id}>
                  <h2>{tech.title}</h2>
                  <h3>{tech.status}</h3>
                </div>
              ))}
            </div>
          ) : (
            ""
          )}
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
