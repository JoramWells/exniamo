import React, { useEffect, useRef, memo } from "react";
import { Card, Col, Row, Result,Button } from "antd";
import {RedoOutlined} from '@ant-design/icons'
import { useDispatch, useSelector } from "react-redux";
import { listPost } from "../_actions/postActions";
import {
  List,
  AutoSizer,
  CellMeasurer,
  CellMeasurerCache,
} from "react-virtualized";

function reloadHandler () {
  window.location.reload();
};
function HomeScreen() {
  const PostList = useSelector((state) => state.postList);
  const { loading, posts, error } = PostList;
  const cache = useRef(
    new CellMeasurerCache({
      fixedWidth: true,
      defaultHeight: 100,
    })
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listPost());

    return () => {};
  }, [dispatch]);
  return (
    <div
      style={{
        maxWidth: "50%",
        display: "block",
        margin: "auto",
        padding: "1rem",
      }}
    >
      <Row justify="space-around" align="middle" gutter={[16, 16]}>
        {loading ? (
          <div>Loading..</div>
        ) : error ? (
          <Result
            status="500"
            title={error}
            extra={<Button icon={<RedoOutlined />} onClick={reloadHandler}>RETRY</Button>}
          />
        ) : (
          <div style={{ width: "100%", height: "100vh" }}>
            <AutoSizer>
              {({ width, height }) => (
                <List
                  width={width}
                  height={height}
                  rowHeight={cache.current.rowHeight}
                  rowCount={posts.length}
                  rowRenderer={({ key, index, style, parent }) => {
                    const post = posts[index];
                    return (
                      <CellMeasurer
                        key={key}
                        cache={cache.current}
                        parent={parent}
                        columnIndex={0}
                        rowIndex
                      >
                        <Col style={style}>
                          <Card>
                            <h3>{post.id}</h3>
                            {post.description}
                          </Card>
                        </Col>
                      </CellMeasurer>
                    );
                  }}
                />
              )}
            </AutoSizer>
          </div>
        )}
      </Row>
    </div>
  );
}
export default memo(HomeScreen);
