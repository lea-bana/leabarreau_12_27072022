import "./style/App.css";
import Header from "./components/header";

function App() {
  return (
    <div className="App">
      <Header />
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
