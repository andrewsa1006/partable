import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import MainPage from "./pages/MainPage";
import About from "./pages/About";
import PartList from "./pages/PartList";
import Quote from "./pages/Quote";
import { Provider } from "react-redux";
import store from "./store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/" element={<MainPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/parts" element={<PartList />} />
            <Route path="/quote" element={<Quote />} />
            <Route
              path="*"
              element={
                <main style={{ padding: "1rem" }}>
                  {/* TO DO: Implment Error Page */}
                  <p>There's nothing here!</p>
                </main>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
