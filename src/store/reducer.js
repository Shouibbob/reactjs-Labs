const INITIAL_STATE = {
  Fav: [],
};

export default function favuoriteReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "SET_MOVIE":
      return {
        Fav: action.payload,
      };
    default:
      return state;
  }
}
