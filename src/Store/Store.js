import React, { useReducer } from "react";
import { AppContext } from "./AppContext";

const initialState = {
  editlist: false,
  filterDetails: true,
  isModalOpen: false,
  handleCancel: false,
  listData: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "EDIT_LIST":
      state.editlist = action.payload;
      return {
        ...state,
      };
    case "FILTER_DETAILS":
      state.filterDetails = action.payload;
      return {
        ...state,
      };
    case "MODAL_OPEN":
      state.isModalOpen = action.payload;
      return {
        ...state,
      };
    case "LIST_DATA":
      state.listData = [...action.payload];
      return {
        ...state,
      };
    case "HANDLE_CANCEL":
      state.handleCancel = action.payload
      return{
        ...state
      }
    default:
      return {
        ...state,
      };
  }
};

function StateWrapper(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{ appState: state, appDispatch: dispatch }}>
      <React.Fragment>{props.children}</React.Fragment>
    </AppContext.Provider>
  );
}

export default StateWrapper;
