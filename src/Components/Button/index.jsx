import { Container } from "./style";

const Button = ({ children, backgroundColor = "#ff427f", ...rest }) => {
  return (
    <Container backgroundColor={backgroundColor} {...rest}>
      {children}
    </Container>
  );
};

export default Button;
