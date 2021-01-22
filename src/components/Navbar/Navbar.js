import React, { useState } from "react";
import "../../css/Navbar.css";
import { FiMenu } from "react-icons/fi";
import { IoIosClose } from "react-icons/io";
import { IconContext } from "react-icons";
import { RiReactjsLine } from "react-icons/ri";
import { Button } from "./Button";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <div>
      <nav className="Navbar_Items">
        <Link to="/">
          <IconContext.Provider value={{ color: "white", size: "3em" }}>
            <RiReactjsLine />
          </IconContext.Provider>
        </Link>

        <Link to="/messages">
          <div className={clicked ? "nav_menu active" : "nav_menu"}>
            <Button>Say Hello</Button>
          </div>
        </Link>

        <div className="menu_icon" onClick={handleClick}>
          {clicked ? (
            <IconContext.Provider value={{ color: "white", size: "2em" }}>
              <IoIosClose />
            </IconContext.Provider>
          ) : (
            <IconContext.Provider value={{ color: "white", size: "2em" }}>
              <FiMenu />
            </IconContext.Provider>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
