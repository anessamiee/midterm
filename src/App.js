import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Blog from "./pages/Blog.jsx";
function App() {
  const BrowserHistory = require("react-router-dom").default;
  return (
    <div className="App">
      <BrowserRouter history={BrowserHistory}>
        <Header />
        <Switch>
          <Route path="/Home" exact component={Home} />
          <Route path="/About" exact component={About} />
          <Route path="/Blog" exact component={Blog} />
          <Route path="/Contact" exact component={Contact} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
export default App;
