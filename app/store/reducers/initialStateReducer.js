export default function reducer(state = {
  cvContent: [],
  fetching: false,
  fetched: false,
  error: null,
}, action) {

  switch (action.type) {
    case "FETCH_CV_CONTENT_PENDING":
      {
        return {...state,
          fetching: true
        }
      }
    case "FETCH_CV_CONTENT_REJECTED":
      {
        return {...state,
          fetching: false,
          error: action.payload
        }
      }
    case "FETCH_CV_CONTENT_FULFILLED":
      {
        return {
          ...state,
          fetching: false,
          fetched: true,
          cvContent: action.payload.data,
        }
      }
  }
  return state
};
