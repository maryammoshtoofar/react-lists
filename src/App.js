import Wrapper from "./layout/wrapper";
import Header from "./layout/header";
import TabsContaier from "./components/tabs";
import Items from "./components/items";

const App = () => {
  return (
    <Wrapper>
      <Header>
        <TabsContaier />
      </Header>
      <Items />
    </Wrapper>
  );
};

export default App;
