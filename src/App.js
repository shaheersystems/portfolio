import "./App.css";
import Navbar from "./components/Navbar";
import TabBar from "./components/TabBar";
import Wrapper from "./components/Wrapper";
import SearchBar from "./components/SearchBar";
function App() {
  return (
    <div className="App">
      <Wrapper>
        <Navbar />
        <TabBar />
        <SearchBar />
      </Wrapper>
    </div>
  );
}

export default App;
