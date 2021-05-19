import { Card, Empty, Row, Result, Button } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import Highlighter from "react-highlight-words";
import styles from "./styles.css";
import { RedoOutlined } from "@ant-design/icons";


function reloadHandler () {
    window.location.reload();
  };
export default function SearchView(props) {
  const value = props.match.params.val.split(" ");
  // const search = props.location.search;
  // const params = new URLSearchParams(search);
  // const category = params.getAll("val");
  const PostDetail = useSelector((state) => state.detail);
  const { loadingDetail, postDetail, errorDetail } = PostDetail;

  return (
    <div>
      {loadingDetail ? (
        <Row justify="center">Loading...</Row>
      ) : errorDetail ? (
        <Result
          title={errorDetail}
          subTitle="Sorry, something went wrong."
          extra={<Button onClick={reloadHandler} icon={<RedoOutlined/>} >RETRY</Button>}
        />
      ) : (
        <div>
          {postDetail ? (
            postDetail.map((post) => (
              <Card style={{ height: 150, overflowY: "scroll", marginTop: 10 }}>
                <Highlighter
                  activeClassName={styles.Active}
                  highlightStyle={{
                    color: "blue",
                    padding: "0",
                    backgroundColor: "yellow",
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
    </div>
  );
}
