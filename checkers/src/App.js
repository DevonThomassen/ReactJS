import React, {Component} from 'react';
import './App.css';
import Soldier from "./components/board";

class App extends Component {
    state = {
        v: [8, 7, 6, 5, 4, 3, 2, 1],
        h: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
    };

    render() {
        return (
            <table>
                {this.state.v.map(rowV => (
                    <tr>
                        {this.state.h.map(rowH => (
                            <td key={rowH + rowV}
                                id={rowH + rowV}>{rowH + rowV}</td>
                        ))}
                    </tr>
                ))}
            </table>
        );
    }
}

export default App;
