import { Input, Menu, message, Space,Alert } from "antd";
import React, { useState } from "react";
import { withRouter,Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {searchPost} from '../_actions/postActions'
import TextLoop from 'react-text-loop';
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
    <Alert message={
      <TextLoop mask>
        <div style={{fontSize:"1rem", color:"#3f3b3b"}}>x10 faster</div>
        <div style={{fontSize:"1rem", color:"#3f3b3b"}}>-50% discount</div>
        <div style={{fontSize:"1rem", color:"#3f3b3b"}}>Experiences that matter to your business</div>
      </TextLoop>
    } type="warning" banner showIcon closable/>
    <nav className="menu">
      <div className="menu__logo">
        <Link to="/">
        Logo

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
