import React from "react";
import { Link } from "react-router-dom";
import LoadingDots from "./LoadingDots";

const Header = ({ loading, route }) => {
  return (
    <nav>
      <Link to="/" className={route === "home" ? "active" : ""}>
        Home
      </Link>
      {" | "}
      <Link to="/apps" className={route === "apps" ? "active" : ""}>
        Apps
      </Link>
      {loading && <LoadingDots interval={100} dots={20} />}
    </nav>
  );
};

export default Header;
