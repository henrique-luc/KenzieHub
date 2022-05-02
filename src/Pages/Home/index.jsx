import SmallButton from "../../Components/ButtonSmall";
import { ContainerHome } from "./style";

export default function Home() {
  return (
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
        <SmallButton padding={"7px 12px"} onClick={() => ""}>
          +
        </SmallButton>
      </section>
      <section className="container_home-list">
        <div>
          <h2>React JS</h2>
          <h3>Intermediário</h3>
        </div>
        <div>
          <h2>Next JS</h2>
          <h3>Iniciante</h3>
        </div>
        <div>
          <h2>Material UI</h2>
          <h3>Avançado</h3>
        </div>
        <div>
          <h2>Styled-Components</h2>
          <h3>Intermediário</h3>
        </div>
      </section>
    </ContainerHome>
  );
}
