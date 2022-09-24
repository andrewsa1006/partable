import "./App.css";
import NavComponent from "./components/NavComponent";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <NavComponent />
      <div className="container content-wrap">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default App;
