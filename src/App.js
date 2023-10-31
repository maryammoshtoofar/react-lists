import Wrapper from "./layout/wrapper";
import Header from "./layout/header";
import TabsContaier from "./components/tabs";
import Items from "./components/items";
import Loader from "./components/loader";
import { useState, useReducer } from "react";
import { lists } from "./data";
import Context from "./context/active-tab-context";

const App = () => {
  // const [loading, setLoading] = useState({ status: true });
  const loadingReducer = (state, action) => {
    switch (action.type) {
      case "PENDING":
        return { ...state, status: true };
      case "TRUE":
        return { ...state, status: true };
      case "FALSE":
        return { status: false, Errormessage: "" };
      default:
        return state;
    }
  };
  const [loading, dispatch] = useReducer(loadingReducer, {
    status: true,
    Errormessage: "Loading",
  });
  const [allData, setAllData] = useState(lists);
  const [active, setActive] = useState("1");

  setTimeout(() => {
    dispatch({ type: "FALSE" });
    // setLoading(false);
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
    <Context.Provider value={{active, setActive}}>
      <Wrapper>
        {loading.status ? (
          <Loader />
        ) : (
          <>
            <Header>
              <TabsContaier
                allData={allData}
                handleActiveList={handleActiveList}
              />
            </Header>
            <Items
              selectedList={selectedList}
              addToData={addItemsToData}
            />
          </>
        )}
      </Wrapper>
    </Context.Provider>
  );
};

export default App;
