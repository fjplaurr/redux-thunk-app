import React from 'react';
import { connect } from 'react-redux';
import { giveHamb } from './redux/actions/hamburgerActions';
import { borrowHamb } from './redux/actions/hamburgerActions';
import { eatAllHamb } from './redux/actions/hamburgerActions';
import dragonPicture from './images/dragonPicture.svg';
import Button from './Button';

function App(props) {
  const { giveHamb, hamburgersNumber, borrowHamb, showMessage, eatAllHamb, eating } = props;
  return (
    <div className="App">
      <img src={dragonPicture} alt="Nice dragon flying" className="dragonPic" />
      <p className="intro">After hours of flying, the little dragon is coming back home and he is really hungry so please...</p>
      <h1>Feed the dragon!</h1>
      <div className="buttonsContainer">
        <Button action={() => giveHamb(1)} text='Give him a hamburger' disabled={eating}></Button>
        <Button action={() => borrowHamb(1)} text='Borrow a hamburger from him' disabled={eating}></Button>
        <Button action={() => eatAllHamb()} text="Make him eat his hamburgers" disabled={eating}></Button>
      </div>
      {showMessage ? <h2>The dragon is eating now...</h2> : <h2>He has {hamburgersNumber} hamburgers</h2>}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    hamburgersNumber: state.hamburgersNumber,
    showMessage: state.showMessage,
    eating: state.eating,
  };
}

const mapDispatchToProps = {
  giveHamb,
  borrowHamb,
  eatAllHamb,
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
