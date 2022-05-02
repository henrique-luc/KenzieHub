import { Container } from "./style";

const SmallButton = ({
  children,
  padding,
  backgroundColor = "#212529",
  ...rest
}) => {
  return (
    <Container backgroundColor={backgroundColor} padding={padding} {...rest}>
      {children}
    </Container>
  );
};

export default SmallButton;
