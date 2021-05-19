import { Card, Empty} from "antd";
import React from "react";
import { useSelector } from "react-redux";
import Highlighter from "react-highlight-words";



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
        <div style={{justifyContent:"center" }}>Loading...</div>
      ) : errorDetail ? (
       <div>{errorDetail}</div>
      ) : (
        <div>
          {postDetail ? (
            postDetail.map((post) => (
              <Card style={{ height: 150, overflowY: "scroll", marginTop: 10 }}>
                <Highlighter
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
