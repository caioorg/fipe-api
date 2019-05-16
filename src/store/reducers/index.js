const initialState = {
  list: [],
  brand: "",
  model: "",
  year: "",
  details: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "LIST_BRAND":
      return {
        ...state,
        list: action.payload
      };
    default:
      return state;
  }
};
