import { Link } from "react-router-dom";

export default function Main() {
    return (
        <div className="choose">
            <div>
                <h3>Welcome to the Tic Tac Toe Game and the Simple Shopping Cart</h3>
            </div>
            <div className="chooseoption">
              <div className="tictac">
                <Link to="/tic-tac-toe">
                   <button>Tic Tac Toe</button>
                </Link>
              </div>
              <div className="shoppingcart">
                <Link to="/shoppingcart">
                  <button>ShoppingCart</button>
                </Link>
              </div>
            </div>
        </div>
    )
}
