import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {bookActions} from '../actions'

class BookList extends Component {
    renderList() {
        const bookList = this.props.books.map(book => {
            return (
                <li key={book.title} className={'list-group-item'} onClick={() => {this.props.bookActions.selectBook(book)}}>
                    {book.title}
                </li>
            );
        });

        return bookList;
    }

    render() {
        return (
            <ul className={'col-sm-4  list-group'}>
                {this.renderList()}
            </ul>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        books: state.books,
    };
};

const mapDispatchToProps = dispatch => ({
    bookActions: bindActionCreators(bookActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(BookList);