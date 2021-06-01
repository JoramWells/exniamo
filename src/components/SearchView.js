import { Card, Empty, Row, Result, Button, Col } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Highlighter from "react-highlight-words";
import styles from "./styles.css";
import { HourglassOutlined, RedoOutlined } from "@ant-design/icons";
import Cookie from 'js-cookie'
import { searchPost } from "../_actions/postActions";

function reloadHandler() {
  window.location.reload();
}
export default function SearchView(props) {
  const dispatch = useDispatch()
  const value = props.match.params.val.split(" ");
  useEffect(() => {

    dispatch(searchPost({ keyword: Cookie.get('value'), min_videos: "2" }));
    
  
    return () => {
 
    }
  }, [dispatch])
  // const search = props.location.search;
  // const params = new URLSearchParams(search);
  // const category = params.getAll("val");
  const PostDetail = useSelector((state) => state.detail);
  const { loadingDetail, postDetail, errorDetail } = PostDetail;

  return (
    <Row justify="center" align="middle" style={{ marginTop: "5rem" }}>
      <Col style={{ maxWidth: "75%" }}>
        {loadingDetail ? (
          <Row justify="center">
            <HourglassOutlined
              spin
              style={{ fontSize: "2rem", color: "grey" }}
            />
          </Row>
        ) : errorDetail ? (
          <Result
            title={errorDetail}
            subTitle="Sorry, something went wrong."
            extra={
              <Button onClick={reloadHandler} icon={<RedoOutlined />}>
                RETRY
              </Button>
            }
          />
        ) : (
          <div>
            {postDetail ? (
              postDetail.map((post) => (
                <Card
                  style={{
                    height: 150,
                    overflowY: "scroll",
                    marginTop: "2px",
                    backgroundColor: "#3f3b3b",
                    color: "#278ea5",
                  }}
                >
                  <Highlighter
                    activeClassName={styles.Active}
                    highlightStyle={{
                      backgroundColor: "#eac100",
                      borderRadius: "5px",
                      padding: ".1rem",
                    }}
                    searchWords={value}
                    autoEscape
                    textToHighlight={post.description}
                  />
                </Card>
              ))
            ) : (
              <Empty />
            )}
          </div>
        )}
      </Col>
    </Row>
  );
}
