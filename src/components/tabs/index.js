import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

const TabsContaier = () => {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="Home">
      </Tab>
      <Tab eventKey="profile" title="Profile">
      </Tab>
    </Tabs>
  );
};

export default TabsContaier;
