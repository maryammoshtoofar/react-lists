import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
const AddList = () => {
  return (
    <Form className="d-flex">
      <Form.Group className="w-100 me-2" controlId="formBasicEmail" >
        <Form.Control type="text" />
      </Form.Group>
      <Button variant="success" type="submit">
        ADD
      </Button>
    </Form>
  );
};

export default AddList;
