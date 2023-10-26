import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const AddFormModal = ({ show, handleClose, addToData, active }) => {
  const [inputValue, setInputValue] = useState("");
  const addItem = (e) => {
    e.preventDefault();
    const newItem = {
      id: uuidv4(),
      title: inputValue,
      isCompleted: false,
    };
    addToData(newItem, active);
    setInputValue("");
  };
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add a New Item</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={addItem}>
          <Form.Group className="mb-3">
            <Form.Label>Item</Form.Label>
            <Form.Control
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Item Title Goes Here"
            ></Form.Control>
          </Form.Group>
          <Alert variant="danger" dismissible>
            You Can't Add an Empty Item!
          </Alert>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={addItem}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddFormModal;
