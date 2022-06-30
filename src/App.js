import "./App.css";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Banner from "./components/Banner";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Wrapper>
        <Banner />
      </Wrapper>
    </div>
  );
}

export default App;
