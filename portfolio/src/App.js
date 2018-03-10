import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
// import About from "./pages/About";
import Story from "./pages/Story";
import Knowledge from "./pages/Knowledge";
import Experiments from "./pages/Experiments";
import Record from "./pages/Record";
import Communication from "./pages/Communication";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => (
  <Router>
    <div>
      <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/story" component={Story} />
        <Route exact path="/knowledge" component={Knowledge} />
        <Route exact path="/experiments" component={Experiments} />
        <Route exact path="/trackrecord" component={Record} />
        <Route exact path="/communication" component={Communication} />
      <Footer />
    </div>
  </Router>
);

export default App;
