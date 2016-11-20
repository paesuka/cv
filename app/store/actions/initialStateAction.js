// import axios from "axios";
import data from '../../content';

export default function fetchInitialState() {
  return function(dispatch) {
    dispatch({
      type: 'FETCH_CV_CONTENT_FULFILLED',
      payload: data//axios.get('http://localhost:9000/api/v0/movies/')
    })
    // dispatch({
    //   type: 'FETCH_CV_CONTENT',
    //   payload: data//axios.get('http://localhost:9000/api/v0/movies/')
    // })
  }
}
