import { Container, InputContainer } from "./style";

const Input = ({ className, onClick, label, icon: Icon, ...rest }) => {
  return (
    <Container>
      <section className="container_input-label">{label}</section>

      <InputContainer className={className}>
        <input {...rest} />
        <section className="container_input-icon">
          {Icon && <Icon onClick={onClick} />}
        </section>
      </InputContainer>
    </Container>
  );
};

export default Input;
