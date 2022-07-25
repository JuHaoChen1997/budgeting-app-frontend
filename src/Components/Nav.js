import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <nav>
      <h1 className="app_name">Budget App</h1>
      <Link to="/">
        <div className="homePage">Home Page</div>
      </Link>
      <Link to="/transactions">
        <div className="showTransactions">Show Transaction</div>
      </Link>
      <Link to="/transactions/new">
        <div className="newTransactions">New Transaction</div>
      </Link>
    </nav>
  );
}

export default Nav;
