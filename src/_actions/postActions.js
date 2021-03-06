import axios from "axios";
import {
  POST_DETAIL_FAIL,
  POST_DETAIL_SUCCESS,
  POST_DETAIL_REQUEST,
  POST_LIST_FAIL,
  POST_LIST_REQUEST,
  POST_LIST_SUCCESS,
} from "../_constants/postConstants";

const listPost = () => async (dispatch) => {
  try {
    dispatch({ type: POST_LIST_REQUEST });
    await axios
      .get("https://fancynancyapi.herokuapp.com/posts")
      .then((response) => {
        dispatch({ type: POST_LIST_SUCCESS, payload: response.data });
      })
      .catch((err) => {
        dispatch({ type: POST_LIST_FAIL, payload: err.message });
      });
  } catch (error) {
    dispatch({ type: POST_LIST_FAIL, payload: error.message });
  }
};

const searchPost = (dataToSubmit) => async (dispatch) => {
  dispatch({ type: POST_DETAIL_REQUEST, payload: dataToSubmit });
  try {
    await axios
      .post("https://fancynancyapi.herokuapp.com/getDetail", dataToSubmit)
      .then((response) => {
        dispatch({ type: POST_DETAIL_SUCCESS, payload: response.data });
      })
      .catch((err) => {
        console.log(err);
      });
  } catch (error) {
    dispatch({ type: POST_DETAIL_FAIL, payload: error.message });
  }
};

export { listPost, searchPost };
