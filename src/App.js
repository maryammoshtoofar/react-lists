import Wrapper from "./layout/wrapper";
import Header from "./layout/header";
import TabsContaier from "./components/tabs";

const App = () => {
  return (
    <Wrapper>
      <Header>
        <TabsContaier />
      </Header>
    </Wrapper>
  );
};

export default App;
