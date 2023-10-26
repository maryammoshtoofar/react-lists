import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AddList from "../../components/addList";
const Header = (props) => {
  return (
    <Row>
      <Col xs={8}>{props.children}</Col>
      <Col>
        <AddList />
      </Col>
    </Row>
  );
};

export default Header;
