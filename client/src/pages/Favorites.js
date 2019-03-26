import React, { Component } from "react";
import db from "../../models/book";
import { List, ListItemToo } from "../component/list";

class Favorites extends Component {
    state = {
        favBooks: []
    };

    componentDidMount() {
        this.loadBooks();
    };

    loadBooks = () => {
        db.getBooks().then(res => {
            this.setState({ favBooks: res.data });
        });
    };

    deleteBook = bookID => {
        db.deleteBook(bookID).then(res => {
            this.loadBooks();
        });
    };

    render() {
        return (
            <div>
               

                {this.state.favBooks.length > 0 ? (
                    <List>
                        {this.state.favBooks.map(book => (
                            <ListItemToo
                                id={book._id}
                                key={book._id}
                                title={book.title}
                                authors={book.authors}
                                image={book.image || "N/A"}
                                description={book.description}
                                link={book.link}
                                deleteBook={this.deleteBook}
                            />
                        ))}
                    </List>
                ) : (
                        <h3>Nothing to Display</h3>
                    )}

            </div>
        );
    }
}

export default Favorites;