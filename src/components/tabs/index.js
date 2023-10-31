import { useContext } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Context from "../../context/active-tab-context";

const TabsContaier = ({ allData, handleActiveList }) => {
  const { active } = useContext(Context);
  console.log(active);
  return (
    <Tabs activeKey={active} onSelect={handleActiveList} className="mb-3">
      {allData.map((list) => (
        <Tab key={list.id} eventKey={list.id} title={list.value}></Tab>
      ))}
    </Tabs>
  );
};

export default TabsContaier;
