import ListGroup from "react-bootstrap/ListGroup";
const Item = ({ item }) => {
  return <ListGroup.Item key={item.id}>{item.title}</ListGroup.Item>;
};

export default Item;
