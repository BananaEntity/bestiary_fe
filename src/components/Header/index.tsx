// import '../../css/someCss.css'
// import Auth from "../../utils/auth";

// import "bootstrap/dist/css/bootstrap.min.css";
// import { Nav, Navbar, Row, Col } from "react-bootstrap";

import "./header.css";

const Header = () => {
  return (
    <header>
      <div id="notice-message" className="notice">
        <a
          href="https://www.pathofexile.com/"
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          JOIN OUR GAME SENPAI
        </a>
      </div>
    </header>
  );
};

export default Header;
