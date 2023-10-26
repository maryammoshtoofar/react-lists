import Container from "react-bootstrap/Container";

const Wrapper = (props) => {
  return (
    <Container className="d-flex flex-column mt-5 p-3">
      {props.children}
    </Container>
  );
};

export default Wrapper;
