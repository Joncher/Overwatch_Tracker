import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Menu, Segment } from "semantic-ui-react";

class Navbar extends Component {
  state = { activeMenu: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <div>
        <Menu pointing secondary>
          <Link to="/home">
            <Menu.Item name="home" active={activeItem === "home"} />
          </Link>
          <Link to="/profile">
            <Menu.Item name="profile" active={activeItem === "profile"} />
          </Link>
          <Link to="/record">
            <Menu.Item name="record" active={activeItem === "record"} />
          </Link>
          <Link to="/history">
            <Menu.Item name="history" active={activeItem === "history"} />
          </Link>
          <Menu.Menu position="right">
            <Link to="/login">
              <Menu.Item name="login" />
            </Link>
            <Link to="/login">
              <Menu.Item
                name="logout"
                onClick={e => {
                  localStorage.clear();
                }}
              />
            </Link>
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}
export default Navbar;
