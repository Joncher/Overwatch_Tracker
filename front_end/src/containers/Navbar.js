import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Menu, Segment, Divider } from "semantic-ui-react";

class Navbar extends Component {
  state = { activeMenu: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

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
              <Menu.Item name={localStorage.username} />
            </Link>
            <Divider />
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
