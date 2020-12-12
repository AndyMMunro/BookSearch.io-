import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Footer from "./components/Footer"
import Container from "./components/Container";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginForm from "./components/LoginForm/login";


function App() {
  // console.log("hope this works");
  return (
    <Router>
          <Container>
            <Nav />
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/projects" component={Projects} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/LoginForm" component={LoginForm} />
            <Footer/>
          </Container>
    </Router>
  );
}

export default App;