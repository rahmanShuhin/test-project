import logo from "./logo.svg";
import "./styles/app.css";
import NavBar from "./Components/NavBar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Landing from "./Components/Landing";
import Featured from "./Components/Featured";
import NewsLetter from "./Components/NewsLetter";
import AllProduct from "./Components/AllProduct";
import ShoppingCart from "./Components/ShoppingCart";
import Footer from "./Components/Footer";
import About from "./Components/About";
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/cart">
            <NavBar></NavBar>
            <ShoppingCart></ShoppingCart>
            <Footer></Footer>
          </Route>
          <Route exact path="/">
            <NavBar></NavBar>
            <Landing></Landing>
            <Featured></Featured>
            <NewsLetter></NewsLetter>
            <AllProduct></AllProduct>
            <About></About>
            <Footer></Footer>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
