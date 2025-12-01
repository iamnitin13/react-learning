const redux = require("redux");
const axios = require("axios");
const thunkMiddleware = require("redux-thunk").default;

const createStore = redux.legacy_createStore;
const applyMiddleware = redux.applyMiddleware;

//types
const FETCH_USER_REQUEST = "FETCH_USER_REQUEST";
const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
const FETCH_USER_FAILURE = "FETCH_USER_FAILURE";

//intial state
const initialState = {
  loading: true,
  users: [],
  error: "",
};

//actions
const fetchUserRequest = () => {
  return {
    type: FETCH_USER_REQUEST,
  };
};

const fetchUserSuccess = (users) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: users,
  };
};

const fetchUserFailure = (error) => {
  return {
    type: FETCH_USER_FAILURE,
    payload: error,
  };
};

//reducer
const reducer = (state = initialState, actions) => {
  switch (actions.type) {
    case FETCH_USER_REQUEST:
      return { ...state, loading: true };
    case FETCH_USER_SUCCESS:
      return { loading: false, users: actions.payload };
    case FETCH_USER_FAILURE:
      return { loading: false, error: actions.payload };
  }
};

//async action creator
// creating async action creatore that will return a function not the action
// thunk middleware will allow the action creator to return the function instead of action obhect
const fetchUsers = () => {
  // this func can have side effect(async api call) need not to be pure function

  // this is thunk function
  return async function (dispatch) {
    //dispatch user request before firing request
    dispatch(fetchUserRequest());

    try {
      // response.data will users array
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/user"
      );
      const users = response.data.map((user) => user.id);
      dispatch(fetchUserSuccess(users));
    } catch (error) {
      //error.message will give error message
      dispatch(fetchUserFailure(error.message));
    }
  };
};

const store = createStore(reducer, applyMiddleware(thunkMiddleware));
store.subscribe(() => console.log(store.getState()));

//thunk function not directly called need to pass in store.dispatch()
store.dispatch(fetchUsers());
