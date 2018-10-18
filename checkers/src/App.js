import React, {Component} from 'react';
import './App.css';

function Pieces(props) {
    const pieceLocation = props.location;
    let a = <td key={"td" + pieceLocation}>{pieceLocation}</td>;
    let y = pieceLocation.charAt(0);
    let z = pieceLocation.charAt(1);
    let even = isEven(z);
    let black = blackLocation(z);
    let white = whiteLocation(z);

    if ((even === true && black === true) || (even === true && white === true)) {
        if (y === 'A' || y === 'C' || y === 'E' || y === 'G') {
            return a = <td><span key={"span" + pieceLocation} className={black ? "soldier black" : "soldier white"}>{pieceLocation}</span></td>;
        }
    }
    else if ((even === false && black === true) || (even === false && white === true)) {
        if (y === 'B' || y === 'D' || y === 'F' || y === 'H') {
            return a = <td key={"span" + pieceLocation}><span className={black ? "soldier black" : "soldier white"}>{pieceLocation}</span></td>;
        }
    }
    return a;
}

// Math
function isEven(x) {
    return parseInt(x) % 2 === 0;
}
function blackLocation(x) {
    return parseInt(x) === 8 || parseInt(x) === 7 || parseInt(x) === 6;
}
function whiteLocation(x) {
    return parseInt(x) === 3 || parseInt(x) === 2 || parseInt(x) === 1;
}

class App extends Component {
    state = {
        v: [8, 7, 6, 5, 4, 3, 2, 1],
        h: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
    };

    render() {
        return (
            <table>
                {this.state.v.map(rowV => (
                    <tr key={"row" + rowV}>
                        {this.state.h.map(rowH => (
                            <Pieces location={rowH + rowV}/>))}
                    </tr>
                ))}
            </table>
        );
    }
}

export default App;
