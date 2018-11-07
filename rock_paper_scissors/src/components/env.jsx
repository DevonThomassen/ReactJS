import React, {Component} from 'react';
import players from '../classes/player';
import items from '../classes/item';

class Env extends Component {
  state = {
    items: [],
    status: NaN,
    player: NaN,
    bot: NaN,
  };
  getItem = voorwerp => {
    let bot = Math.floor(Math.random() * 3);
    let botPick = items[bot].name;
    this.setState({player: voorwerp.name});
    this.setState({bot: botPick});
    this.bepaaldWinnaar(voorwerp, botPick);
  };
  bepaaldWinnaar = (voorwerp, botPick) => {
    let status;
    if (voorwerp.winsFrom === botPick) status = 'Victory Royale🎉';
    else if (voorwerp.name === botPick) status = 'That was an epic fight, but nobody won😤';
    else status = 'Hard fight, but you lost. Don\'t give up!😤';
    this.setState({status: status});
  };

  render() {
    return (
      <React.Fragment>
        <h1>Rock Paper Scissors</h1>
        <div className='buttons'>
          {items.map(voorwerp => (
            <button key={voorwerp.name} onClick={() => this.getItem(voorwerp)}>
              {voorwerp.name}
            </button>
          ))}
        </div>
        <div className='stats'>
          <p>{players[0].name} picked: {this.state.player}</p>
          <p>{players[1].name} picked: {this.state.bot}</p>
          <p>Status: {this.state.status}</p>
        </div>
      </React.Fragment>
    );
  }
}

export default Env;