import Home from "./containers/Home/Home";
import { globalStyles } from "./styles/globals";

function App() {
  return (
    <div className="App">
      {globalStyles}
      <Home></Home>
    </div>
  );
}

export default App;
