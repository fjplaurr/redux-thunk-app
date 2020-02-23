const initialState = {
  hamburgersNumber: 0,
  showMessage: false,
  eating: false,
};

export default function hamburgerReducer(state = initialState, action) {
  switch (action.type) {
    case 'giveHamb': {
      const newState = { ...state };
      newState.hamburgersNumber += action.payload;
      return newState;
    }
    case 'borrowHamb': {
      const newState = { ...state };
      newState.hamburgersNumber -= action.payload;
      if (newState.hamburgersNumber < 0) {
        newState.hamburgersNumber = 0;
      }
      return newState;
    }
    case 'showMessage': {
      const newState = { ...state };
      newState.showMessage = !state.showMessage;
      return newState;
    }
    case 'disableEnableButtons': {
      return { ...state, eating: !state.eating };
    }
    case 'eatAllHamb': {
      const newState = { ...state };
      newState.hamburgersNumber = 0;
      return newState;
    }
    default: {
      return state;
    }
  }
}
