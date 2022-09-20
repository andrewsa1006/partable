import "./App.css";
import NavComponent from "./components/NavComponent";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <NavComponent />
      <Outlet />
    </div>
  );
};

export default App;
