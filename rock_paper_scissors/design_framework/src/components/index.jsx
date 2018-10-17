import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
});

function OutlinedButtons(props) {
    const {classes, name, mathFunction} = props;
    return (
        <Button variant="outlined" color="secondary" className={classes.button}
                onClick={() => mathFunction(name)}>{name}
        </Button>
    );
}

OutlinedButtons.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OutlinedButtons);

