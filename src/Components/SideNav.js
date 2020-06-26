import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faColumns } from "@fortawesome/free-solid-svg-icons";
import { Link, withRouter } from "react-router-dom";

class SideNav extends Component {
  componentDidMount() {
    console.log(this.props);
  }
  navList = [
    {
      name: "Home",
      icon: faHome,
      path: "/",
    },
    {
      name: "Explorer",
      icon: faColumns,
      path: "/explorer",
    },
  ];

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
          {this.navList.map((item, index) => (
            <div className="flex flex-row mb-4" key={index}>
              <div
                className={
                  this.props.location.pathname == item.path
                    ? "text-purple-600"
                    : ""
                }
              >
                <FontAwesomeIcon icon={item.icon} className="text-xl my-auto" />
                <Link to={item.path} className="ml-4">
                  {item.name}
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-gray-600 font-bold tracking-wider">
          MY MUSIC
        </div>
        <div className="mt-8"></div>
      </div>
    );
  }
}

export default withRouter(SideNav);
