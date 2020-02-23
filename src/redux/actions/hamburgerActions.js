export const giveHamb = (amount) => ({
  type: 'giveHamb',
  payload: amount,
});

export const borrowHamb = (amount) => ({
  type: 'borrowHamb',
  payload: amount,
});

function eatAllHambAsyn() {
  return {
    type: 'eatAllHamb',
  };
}

function showMessage() {
  return {
    type: 'showMessage'
  }
}

const disableEnableButtons = () => ({
  type: 'disableEnableButtons'
});

export const eatAllHamb = () => {
  return (dispatch) => {
    dispatch(showMessage());
    dispatch(disableEnableButtons());
    new Promise((res) => {
      setTimeout(() => {
        res(dispatch(eatAllHambAsyn()));
      }, 2000);
    }).then(
      () => dispatch(showMessage())
    ).then(
      () => dispatch(disableEnableButtons())
    )
  }
}
