import { Input, Menu, message, Space } from "antd";
import React, { useState, memo } from "react";
import { withRouter, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { searchPost } from "../_actions/postActions";
const { Search } = Input;

function NavBar(props) {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  async function getData(value) {
    await dispatch(searchPost({ keyword: value, min_videos: "2" }));
  }
  const onSearch = (value) => {
    message.info("Connecting...");

    getData(value);
    setTimeout(() => {
      props.history.push(`/search/${value}`);
    });
  };
  return (
    <>

      <nav className="menu">
        <div className="menu__logo">
          <Link to="/">Logo</Link>
        </div>
        <div className="menu__container">
          <Menu mode="horizontal">
            <Space direction="horizontal">
              <Search
                onSearch={onSearch}
                placeholder="Seach anything..."
                style={{ margin: "1rem" }}
                onChange={(e) => setValue(e.target.value)}
                value={value}
              />
            </Space>
          </Menu>
        </div>
      </nav>
    </>
  );
}
export default withRouter(memo(NavBar));
