import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";

class Navbar extends Component {
  render() {
    return (
      <div>
        <Menu pointing>
          <Link to="/home">
            <Menu.Item name="home" />
          </Link>
          <Link to="/record">
            <Menu.Item name="record" />
          </Link>
          <Link to="/history">
            <Menu.Item name="history" />
          </Link>

          <Menu.Menu position="right">
            <Link to="/profile">
              <Menu.Item
                name={`${localStorage.username} ${localStorage.ranking} SR `}
              />
            </Link>

            <Link
              to="/login"
              onClick={e => {
                localStorage.clear();
              }}
            >
              <Menu.Item name="Logout" />
            </Link>
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}
export default Navbar;
