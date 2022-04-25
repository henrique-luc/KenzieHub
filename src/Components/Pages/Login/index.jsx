import FormLogin from "../../Form/FormLogin";

export default function Login() {
  return (
    <div>
      <h1>Kenzie Hub</h1>
      <section>
        <h2>Login</h2>
        <FormLogin />
        <p>Ainda não possui uma conta?</p>
        <button>Cadastre-se</button>
      </section>
    </div>
  );
}
