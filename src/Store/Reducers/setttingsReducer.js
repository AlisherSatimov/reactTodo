const initialState = {
  lang: "uz",
  theme: "light",
  showSidebar: false,
};

function settingsReducer(state = initialState, action) {
  switch (action.type) {
    case "TOGGLE_SIDEBAR": {
      return { ...state, showSidebar: !state.showSidebar };
    }
    case "CHANGE_LANGUAGE": {
      return { ...state, lang: action.payload };
    }
    default:
      return state;
  }
}

export default settingsReducer;
