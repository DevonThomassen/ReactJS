import React from 'react';
import PropTypes from 'prop-types';
import 'typeface-roboto';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';

const styles = {
    root: {
        width: '100%',
        maxWidth: 500,
    },
};

function Types(props) {
    const {classes, player, computer, status, wins, games} = props;

    return (
        <div className={classes.root}>
            <div id="left">
                <Typography className="inlineStyle" variant="button" gutterBottom>
                    Status:
                </Typography>
                <Typography className="inlineStyle" variant="body1" gutterBottom>
                    {status}
                </Typography>
                <br/>
                <Typography className="inlineStyle" variant="button" gutterBottom>
                    Player:
                </Typography>
                <Typography className="inlineStyle" variant="body1" gutterBottom>
                    {player}
                </Typography>
                <br/>
                <Typography className="inlineStyle" variant="button" gutterBottom>
                    Computer:
                </Typography>
                <Typography className="inlineStyle" variant="body1" gutterBottom>
                    {computer}
                </Typography>
            </div>
            <div id="right">
                <Typography className="inlineStyle" variant="button" gutterBottom>
                    Wins:
                </Typography>
                <Typography className="inlineStyle" variant="body1" gutterBottom>
                    {wins}
                </Typography>
                <br/>
                <Typography className="inlineStyle" variant="button" gutterBottom>
                    Games:
                </Typography>
                <Typography className="inlineStyle" variant="body1" gutterBottom>
                    {games}
                </Typography>
            </div>
        </div>
    );
}

Types.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Types);

// class Status extends Component {
//     render() {
//         return (
//             <div id="stats">
//                 <p>Player: {this.props.player}</p>
//                 <p>Computer: {this.props.computer}</p>
//                 <p>Wins: {this.props.wins}</p>
//                 <p>Games: {this.props.games}</p>
//                 <p>Status: {this.props.status}</p>
//             </div>
//         );
//     }
// }
//
// export default Status;