import React, {Component} from 'react';

class Status extends Component {
    render() {
        return (
            <React.Fragment>
                <p>Player: {this.props.player}</p>
                <p>Computer: {this.props.computer}</p>
                <p>Status: {this.props.status}</p>
                <p>Wins: {this.props.wins}</p>
                <p>Games: {this.props.games}</p>
            </React.Fragment>
        );
    }
}

export default Status;