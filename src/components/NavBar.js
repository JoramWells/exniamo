import { Input, Menu, message, Space } from "antd";
import React, { useState } from "react";
import { withRouter,Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {searchPost} from '../_actions/postActions'
import { HomeOutlined } from "@ant-design/icons";
const { Search } = Input;


function NavBar(props) {
  const dispatch = useDispatch()
  const [value,setValue] = useState("")

  async function getData(value){
    await dispatch(searchPost({keyword:value, min_videos:"2"}))
 }

  const onSearch = (value) => {
    
    if(value==="")
      return
    message.info("Connecting...");
    getData(value)
    setTimeout(() => {
       props.history.push(`/search/${value}`)
      
    });
  };
  return (
    <>
    <nav className="menu" style={{position:"fixed", width:"100%", zIndex:"1",top:"0"}}>
      <div className="menu__logo">
        <Link to="/" style={{color:"white"}}>
        <HomeOutlined style={{fontSize:"1.5rem"}}/> Home

        </Link>
      </div>
      <div className="menu__container">
        <Menu mode="horizontal" style={{backgroundColor:"#3f3b3b"}}>

          <Space direction="horizontal">
            <Search
              onSearch={onSearch}
              placeholder="Seach anything..."
              style={{ margin: "1rem" }}
              onChange={(e)=>setValue(e.target.value)}
              value={value}
            />
          </Space>
        </Menu>
      </div>
    </nav>
    </>
  );
}
export default withRouter(NavBar);
