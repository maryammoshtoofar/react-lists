import Wrapper from "./layout/wrapper";
import Header from "./layout/header";
import TabsContaier from "./components/tabs";
import Items from "./components/items";
import Loader from "./components/loader";
import { useState } from "react";
import { lists } from "./data";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [allData, setAllData] = useState(lists);
  const [active, setActive] = useState("1");

  setTimeout(() => {
    setLoading(false);
  }, 2000);

  const handleActiveList = (k) => setActive(k);

  const selectedList = allData.find((list) => list.id === active).data;

  const addItemsToData = (newItem, id) => {
    const selectedList = allData.find((item) => item.id === id);
    selectedList.data.push(newItem);
    const index = allData.findIndex((item) => item.id === id);
    const updatedList = [...allData];
    updatedList.splice(index, 1, selectedList);
    setAllData(updatedList);
  };
  return (
    <Wrapper>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Header>
            <TabsContaier
              allData={allData}
              active={active}
              handleActiveList={handleActiveList}
            />
          </Header>
          <Items active={active} selectedList={selectedList} addToData={addItemsToData} />
        </>
      )}
    </Wrapper>
  );
};

export default App;
