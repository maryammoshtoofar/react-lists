import { useState } from "react";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import AddFormModal from "../addFormModal";
import Item from "../item";

const Items = ({ selectedList, addToData, active }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // const handleAddToList = (item, active) => {
  //   addToData(item, active);
  // };
  return (
    <>
      <ListGroup className="my-3">
        {selectedList.map((item) => (
          <Item item={item} />
        ))}
      </ListGroup>
      <Button variant="primary" className="m-auto fw-bold" onClick={handleShow}>
        ADD TO LIST
      </Button>
      <AddFormModal
        active={active}
        show={show}
        handleClose={handleClose}
        addToData={addToData}
      />
    </>
  );
};

export default Items;
