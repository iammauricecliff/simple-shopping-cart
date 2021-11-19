
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "./Main";
import ShoppingCart from "./Simple-Shopping-Cart/ShoppingCart";
import Game from "./Tic-Tac-Toe/Game";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
           <Route exact path="/">
              <Main />
           </Route>
           <Route path="/tic-tac-toe">
              <Game />
           </Route>
           <Route path="/shoppingcart">
             <ShoppingCart />
           </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
