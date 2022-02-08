import { BrowserRouter as Router, Link } from "react-router-dom";
import { Button } from "@mui/material";
function Nav() {
  return (
    <>
      <Router>
        <Link to="/">
          <Button> Home </Button>
        </Link>
      </Router>
    </>
  );
}

export default Nav;
