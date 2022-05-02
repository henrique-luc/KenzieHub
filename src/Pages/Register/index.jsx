import { useHistory, Redirect } from "react-router-dom";

import FormRegister from "../../Components/Form/FormRegister";
import { ContainerRegister } from "./style";

export default function Register({ authenticated }) {
  const history = useHistory();

  if (authenticated) {
    return <Redirect to="/home" />;
  }

  return (
    <ContainerRegister>
      <section className="container_register-logo">
        <h1>Kenzie Hub</h1>
        <button
          className="container_register-button"
          onClick={() => history.push("/")}
        >
          Voltar
        </button>
      </section>
      <section className="container_register-form">
        <h2>Crie sua conta</h2>
        <p>Rapido e grátis, vamos nessa</p>
        <FormRegister />
      </section>
    </ContainerRegister>
  );
}
