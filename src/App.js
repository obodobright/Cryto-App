// import Home from "./pixelsDesign/component/home";
import New from "./new/new";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Detail from "./new/detail";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={New}></Route>
        <Route path="/detail/:id" exact component={Detail}></Route>
      </Switch>
    </Router>
  );
}

export default App;
