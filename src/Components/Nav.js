import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <h1>Budget App</h1>
      <Link to="/">
        <div>Home Page</div>
      </Link>
      <Link to="/transactions">
        <div>Show Transaction</div>
      </Link>
      <Link to="/transactions/new">
        <div>New Transaction</div>
      </Link>
    </nav>
  );
}

export default Nav;
