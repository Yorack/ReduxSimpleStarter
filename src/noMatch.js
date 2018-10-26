import React, {Component} from 'react';
import Image from '../img/poro.png'
import {withStyles} from "@material-ui/core";

const styles = {
    alignTextCenter: {
        textAlign: 'center',
    },
    img: {
        height: '500px',
        borderRadius: '50%',
    },
    divImg: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    }
};

class NoMatch extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {classes} = this.props;

        return (
            <div >
                <h1 className={classes.alignTextCenter}>The requested page doesn't exist</h1>
                <div className={classes.divImg}>
                    <img src={Image} alt="poro smiling" className={classes.img}/>
                </div>
                <div className={classes.alignTextCenter}>
                    <small><i>So here is a poro to cheer you up</i></small>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(NoMatch)