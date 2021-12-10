import { BrowserRouter, Route, Switch,Redirect } from "react-router-dom";
import "./App.css";
import Main from "./page/main";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect exact from="/" to="/home" />
        <Route path="/home" component={Main} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
