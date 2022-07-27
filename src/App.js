import "./style/app.css";
import Header from "./components/header";
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
    </div>
  );
}

export default App;
/*<Navbar />
        
          <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route path="/sport-see" element={<Home />}/>
            <Route path="/user/:id" element={<Dashboard />} />
            <Route path="/sport-see/user/:id" element={<Dashboard />} />
            <Route path="/*" element={<Error />}/>
            <Route path="sport-see/*" element={<Error />}/>
            <Route path="/user/*" element={<Error />}/>
            <Route path="/sport-see/user/*" element={<Error />}/>
          </Routes>*/
