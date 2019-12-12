import { combineReducers } from "redux";

const dataReducer = (state = { from: 1, to: 20 }, action) => {
  switch (action.type) {
    case "UPDATE_DATA":
      return {
        ...state,
        from: action.payload.from,
        to: action.payload.to
      };
    default:
      return { ...state };
  }
};

const errorReducer = (state = { from: "", to: "" }, action) => {
  switch (action.type) {
    case "DISPATCH_ERROR":
      return {
        ...state,
        from: action.payload.from,
        to: action.payload.to
      };
    default:
      return { ...state };
  }
};

const dataApiReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_DATA":
      return action.payload;

    default:
      return [...state];
  }
};

const rootReducer = combineReducers({
  dataReducer: dataReducer,
  errorReducer: errorReducer,
  dataApiReducer: dataApiReducer
});

export default rootReducer;
