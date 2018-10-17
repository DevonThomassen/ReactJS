import React, {Component} from 'react';
import './App.css';
import 'typeface-roboto';
import Button from './components/index'
import Title from './components/title'
import Status from './components/status'

class App extends Component {
    state = {
        title: 'Rock, Paper, Scissors',
        user: null,
        computer: null,
        s: null,
        w: 0,
        g: 0,
        buttons: [
            {name: 'Rock', value: 0},
            {name: 'Paper', value: 1},
            {name: 'Scissor', value: 2}
        ]
    };

    mathFunction = (u) => {
        let w = this.state.w + 1;
        let g = this.state.g + 1;
        this.setState({user: u});
        let b = Math.floor(Math.random() * 3);
        switch (b) {
            case 0:
                this.setState({computer: 'Rock'});
                break;
            case 1:
                this.setState({computer: 'Paper'});
                break;
            case 2:
                this.setState({computer: 'Scissor'});
                break;
            default:
                this.setState({computer: 'Can\'t determine botmove'});
        }
        // user won
        if ((u === 'Rock' && b === 2) || (u === 'Paper' && b === 0) || (u === 'Scissor' && b === 1)) {
            console.log("You won");
            this.setState({s: 'You won'});
            this.setState({w: w});
            this.setState({g: g});
        }
        // user lost
        else if ((u === 'Rock' && b === 1) || (u === 'Paper' && b === 2) || (u === 'Scissor' && b === 0)) {
            console.log("You lost");
            this.setState({s: 'You lost'});
            this.setState({g: g});
        }
        // user tied
        else if ((u === 'Rock' && b === 0) || (u === 'Paper' && b === 1) || (u === 'Scissor' && b === 2)) {
            console.log("Tie");
            this.setState({s: 'Tie'});
            this.setState({g: g});
        }
        else {
            this.setState({s: 'Error'});
            this.setState({g: g});
        }
    };

    render() {
        return (
            <React.Fragment>
                <Title title={this.state.title}/>
                <div id="buttons">
                    {this.state.buttons.map(button => (
                        <Button key={button.value}
                                name={button.name}
                                mathFunction={this.mathFunction}>
                            {button.name}
                        </Button>))}
                </div>
                <Status player={this.state.user}
                        computer={this.state.computer}
                        status={this.state.s}
                        wins={this.state.w}
                        games={this.state.g}
                />
            </React.Fragment>
        );
    }
}

export default App;
