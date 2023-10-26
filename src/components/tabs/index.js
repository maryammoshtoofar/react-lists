import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

const TabsContaier = ({ allData, active, handleActiveList }) => {
  return (
    <Tabs activeKey={active} onSelect={handleActiveList} className="mb-3">
      {allData.map((list) => (
        <Tab key={list.id} eventKey={list.id} title={list.value}></Tab>
      ))}
    </Tabs>
  );
};

export default TabsContaier;
