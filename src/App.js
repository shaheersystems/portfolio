import "./App.css";
import Wrapper from "./components/Wrapper";
import Sidebar from "./components/Sidebar";
function App() {
  return (
    <div className="App">
      <Wrapper>
        <Sidebar />
      </Wrapper>
    </div>
  );
}

export default App;
