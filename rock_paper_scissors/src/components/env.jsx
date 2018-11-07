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
  getItem = item => {
    let bot = Math.floor(Math.random() * 3);
    let botPick = items[bot].name;
    this.setState({});
    this.setState({player: item.name, bot: botPick});
    this.determinedWinner(item, botPick);
  };
  determinedWinner = (item, botPick) => {
    let status;
    if (item.winsFrom === botPick) status = 'Victory Royale🎉';
    else if (item.name === botPick) status = 'That was an epic fight, but nobody won😤';
    else status = 'Hard fight, but you lost. Don\'t give up!😤';
    this.setState({status: status});
  };

  render() {
    return (
      <React.Fragment>
        <h1>Rock Paper Scissors</h1>
        <div className='buttons'>
          {items.map(item => (
            <button key={item.name} onClick={() => this.getItem(item)}>
              {item.name}
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
