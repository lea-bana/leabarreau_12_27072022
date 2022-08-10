import "./style/app.css";
import Header from "./components/header";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Dashboard from "./pages/dashboard";
import Error from "./pages/error";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/sport-see" element={<Home />} />
        <Route path="/user/:id" element={<Dashboard />} />
        <Route path="/sport-see/user/:id" element={<Dashboard />} />
        <Route path="/*" element={<Error />} />
        <Route path="sport-see/*" element={<Error />} />
        <Route path="/user/*" element={<Error />} />
        <Route path="/sport-see/user/*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
