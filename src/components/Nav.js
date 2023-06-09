import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

const Nav = ({ setLibraryStatus, libraryStatus }) => {
    const openLibraryHandler = () => {
      setLibraryStatus(!libraryStatus);
    };
  
    return (
      <nav>
        <h1>International Feeds</h1>
        <button
          className={libraryStatus ? "library-active" : ""}
          onClick={openLibraryHandler}
        >
          + International Feeds
          <FontAwesomeIcon icon={faMusic}></FontAwesomeIcon>
        </button>
      </nav>
    );
  };
  

export default Nav;
