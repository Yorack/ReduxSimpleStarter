import React, {Component} from 'react';
import {connect} from 'react-redux';

class BookDetails extends Component {

    render() {
        if (!this.props.activeBook) {
            return <div>Select a book to see the details</div>
        }

        return (
            <div>
                <h3>Details for:</h3>
                <div>title: {this.props.activeBook.title}</div>
                <div>page: {this.props.activeBook.page}</div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        activeBook: state.activeBook,
    };
};

export default connect(mapStateToProps)(BookDetails);