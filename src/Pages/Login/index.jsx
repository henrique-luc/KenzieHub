import FormLogin from "../../Components/Form/FormLogin";
import Button from "../../Components/Button";
import { ContainerLogin } from "./style";
import { useHistory } from "react-router-dom";

export default function Login() {
  const history = useHistory();

  return (
    <ContainerLogin>
      <h1>Kenzie Hub</h1>
      <section className="container_login-form">
        <h2>Login</h2>
        <FormLogin />
        <p>Ainda não possui uma conta?</p>
        <Button
          backgroundColor="#868e96"
          onClick={() => history.push("/register")}
        >
          Cadastre-se
        </Button>
      </section>
    </ContainerLogin>
  );
}
