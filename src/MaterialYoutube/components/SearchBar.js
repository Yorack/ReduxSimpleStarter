import React, {useEffect, useState} from 'react';
import TextField from '@material-ui/core/TextField';
import {makeStyles} from '@material-ui/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {commonActions} from '../actions';

const useStyles = makeStyles(theme => ({
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    icons: {
        cursor: 'pointer',
    }
}));

const searchVideo = (term, callback) => {
    if (term && '' !== term) {
        callback(term);
    }
}

const SearchBar = (props) => {
    const classes = useStyles();
    const [searchTerm, setSearchTerm] = useState(props.search);

    const searchIcon = <SearchIcon color="secondary"
                                   onClick={() => searchVideo(searchTerm, props.commonActions.searchVideo)}
                                   className={classes.icons}
                                   fontSize="large"/>

    return (
        <div className='search-bar'>
            <TextField
                id="outlined-email-input"
                label="Search"
                className={classes.textField}
                type="text"
                name="Search"
                margin="normal"
                variant="outlined"
                value={searchTerm}
                onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                        searchVideo(searchTerm, props.commonActions.searchVideo)
                    }
                }}
                onChange={(e) => setSearchTerm(e.target.value)}
                InputProps={{
                    endAdornment: <InputAdornment position="end">{searchIcon}</InputAdornment>,
                }}
            />
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        search: state.common.search,
    };
};

const mapDispatchToProps = dispatch => ({
    commonActions: bindActionCreators(commonActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);