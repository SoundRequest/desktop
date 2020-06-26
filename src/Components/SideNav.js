import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faMusic, faThLarge, faColumns } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

class SideNav extends Component {
  render() {
    return (
      <div id="sideNav" className="p-4 pl-6 bg-white shadow-sm">
        <div className="text-center">
          <img
            className="w-16 h-16 rounded-full mx-auto shadow-xl"
            src="/logo512.png"
          />
          <div className="mt-2 font-bold text-md">Default User</div>
          <div className="mt-1 text-sm text-gray-600">me@gangjun.dev</div>
        </div>
        <div className="mt-12">
          <div className="flex flex-row">
            <FontAwesomeIcon icon={faHome} className="text-xl my-auto" />
            <Link to="/" className="ml-4">
              Home
            </Link>
          </div>
          <div className="flex flex-row mt-4">
            <FontAwesomeIcon
              icon={faColumns}
              className="text-xl my-auto"
            />
            <Link to="/" className="ml-4">
              Explorer
            </Link>
          </div>
        </div>
        <div className="mt-8 text-gray-600 font-bold tracking-wider">
          MY MUSIC
        </div>
        <div className="mt-8"></div>
      </div>
    );
  }
}

export default SideNav;
