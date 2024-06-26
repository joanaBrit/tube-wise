import { Routes, Route } from "react-router-dom";

// Page components
import Home from "./components/Home";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Tubelines from "./components/TubeLines";
import RegisterAndLogin from "./components/FormLayout";
import Map from "./components/Map";
import Journey from "./components/Journey";

import "./styles/global.css";

function App() {
  return (
    <>
      <Nav />
      <div className="content-box">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/register"
            element={<RegisterAndLogin isRegisterTab={true} />}
          />
          <Route
            path="/login"
            element={<RegisterAndLogin isRegisterTab={false} />}
          />
          <Route path="/tube" element={<Tubelines />} />
          <Route path="/journey" element={<Journey />} />
          <Route path="/map" element={<Map />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
