import { Button, Input, Menu, message, Space, Upload, Modal, Form } from "antd";
import React, { useState } from "react";
import { withRouter, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { searchPost } from "../_actions/postActions";
import {
  CloudUploadOutlined,
  HomeOutlined,
  UploadOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
const { Search } = Input;

function NavBar(props) {
  const dispatch = useDispatch();
  // const PostList = useSelector((state) => state.postList);
  // const { loading, posts, error } = PostList;
  const [value, setValue] = useState("");
  const [visible, setVisible] = useState(false);
  function handleOk() {
    setVisible(false);
  }
  function handleCancel() {
    setVisible(false);
  }
  function showModal() {
    setVisible(true);
  }

  async function getData(value) {
    await dispatch(searchPost({ keyword: value, min_videos: "2" }));
  }

  const onSearch = (value) => {
    if (value === "") return;
    message.info("Connecting...");
    getData(value);
    setTimeout(() => {
      props.history.push(`/search/${value}`);
    });
  };

  const prop = {
    name: "file",
    action: "http://localhost:8000/csv",
    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };
  //   if (loading) {
  //     return <div>loading...</div>;
  //   } else if (error) {
  //     return <div>error...</div>;
  //   }
  //   const filteredPosts = posts.filter((post) => {
  //     return post.description.toLowerCase().includes(value.toLowerCase());
  //   });
  // console.log(filteredPosts)

  return (
    <>

      <nav
        className="menu"
        style={{ position: "fixed", width: "100%", zIndex: "1", top: "0" }}
      >
        <div className="menu__logo">
          <Link to="/" style={{ color: "white" }}>
            <HomeOutlined style={{ fontSize: "1.5rem" }} /> Home
          </Link>
        </div>
        <div className="menu__container">
          <Menu mode="horizontal" style={{ backgroundColor: "#3f3b3b" }}>
            <Space direction="horizontal">
              <Search
                onSearch={onSearch}
                placeholder="Seach anything..."
                style={{ margin: "1rem" }}
                onChange={(e) => setValue(e.target.value)}
                value={value}
              />
            </Space>
            <Menu.Item
              style={{ float: "right", color: "white", marginTop: "0.9rem" }}
              icon={
                <UserAddOutlined
                  style={{
                    fontSize: "1.5rem",
                    margin: "0",
                    padding: "0",
                    color: "#a7ff83",
                  }}
                />
              }
            />
            <Menu.Item >
              <Link to="/demo" style={{color:"white"}} >
              Demo
              </Link>
            </Menu.Item>

            <Menu.Item
              onClick={showModal}
              style={{ float: "right", color: "white", marginTop: "0.9rem" }}
              icon={
                <CloudUploadOutlined
                  style={{
                    fontSize: "1.5rem",
                    margin: "0",
                    padding: "0",
                    color: "#a7ff83",
                  }}
                />
              }
            />

          </Menu>
        </div>
      </nav>
      {/* <div className="searchResults" style={{ marginTop: "5rem",width:"10rem" }}>{filteredPosts.map(post=>(
        <p>{post.description}</p>
      ))}</div> */}

      <Modal visible={visible} onOk={handleOk} onCancel={handleCancel}>
        <Form encType="multipart/form-data">
          <Form.Item>
            <Upload {...prop}>
              <Button icon={<UploadOutlined />}>UPLOAD IMAGE</Button>
            </Upload>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}
export default withRouter(NavBar);
