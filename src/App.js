import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Drawer from './component/Drawer';
import Footer from './component/Footer';
import {MuiTypography} from './component/MuiTypography';
import { MuiButton } from './component/MuiButton';
import Home from './pages/Home'
import Menu from './pages/Menu'
import About from './pages/About'
import Contact from './pages/Contact'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/menu" exact component={Menu}></Route>
          <Route path="/about" exact component={About}></Route>
          <Route path="/contact" exact component={Contact}></Route>
        </Switch>
        <Footer />
        {/* <MuiTypography></MuiTypography> */}
        {/* <MuiButton></MuiButton> */}
      </Router>
    </div>
  );
}

export default App;
