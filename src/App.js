import "./App.css";
import Wrapper from "./components/Wrapper";
import Sidebar from "./components/Sidebar";
function App() {
  return (
    <div className="App">
      <Wrapper>
        <Sidebar />
        <div className="banner">
          <h1>
            Hello My name is <br /> Muhammad Shaheer
          </h1>
        </div>
      </Wrapper>
    </div>
  );
}

export default App;
