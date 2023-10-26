import Spinner from "react-bootstrap/Spinner";

const Loader = () => {
  return (
    <>
      <h1 className="m-auto mb-3">React Lists App</h1>
      <Spinner animation="border" role="status" className="m-auto">
        <span className="visually-hidden">Loading</span>
      </Spinner>
    </>
  );
};

export default Loader;
