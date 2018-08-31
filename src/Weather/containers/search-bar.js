import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import classNames from 'classnames';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {weatherAction} from '../actions';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl/FormControl';
import InputLabel from '@material-ui/core/InputLabel/InputLabel';

const styles = theme => ({
    root: {
        display: 'flex',
        alignItems: 'baseline',
    },
    margin: {
        margin: theme.spacing.unit,
    },
    withoutLabel: {
        marginTop: theme.spacing.unit * 3,
    },
    textField: {
        // flexBasis: 500,
    },
});

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            term: '',
        };
    }

    onInputChange(event) {
        this.setState({term: event.target.value});
    }

    onFormSubmit(event) {
        event.preventDefault();

        // api.openweathermap.org/data/2.5/forecast?q=London&mode=json&appid=4a28263eff3cdf626dc7ece78ecb7cbf
        // 4a28263eff3cdf626dc7ece78ecb7cbf

        this.props.weatherAction.fetchWeather(this.state.term);
        this.setState({term: ''});
    }

    render() {
        let {classes} = this.props;

        return (
            <form className={classNames(classes.root, 'input-group')} onSubmit={(e) => this.onFormSubmit(e)}>
                <FormControl fullWidth className={classNames(classes.margin, classes.textField)}>
                    <InputLabel htmlFor="search">Search</InputLabel>
                    <Input
                        placeholder="Get a five-day forecast in your favorite cities"
                        type="text"
                        name="search"
                        id="search"
                        value={this.state.term}
                        onChange={(e) => this.onInputChange(e)}
                        autoComplete={'off'}
                        fullWidth
                    />
                </FormControl>

                <div className={classes.margin}>
                    <Button variant="contained" color="secondary" type="submit">
                        Submit
                    </Button>
                </div>
            </form>
        );
    }
};
//
// const mapStateToProps = (state) => {
//     return {};
// };

const mapDispatchToProps = dispatch => ({
    weatherAction: bindActionCreators(weatherAction, dispatch),
});

export default withStyles(styles)(connect(null, mapDispatchToProps)(SearchBar));