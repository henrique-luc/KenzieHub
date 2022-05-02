import FormLogin from "../../Components/Form/FormLogin";
import Button from "../../Components/Button";
import { ContainerLogin } from "./style";
import { useHistory, Redirect } from "react-router-dom";

export default function Login({ authenticated, setAuthenticated }) {
  const history = useHistory();

  if (authenticated) {
    return <Redirect to="/home" />;
  }

  return (
    <ContainerLogin>
      <h1>Kenzie Hub</h1>
      <section className="container_login-form">
        <h2>Login</h2>
        <FormLogin setAuthenticated={setAuthenticated} />
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
