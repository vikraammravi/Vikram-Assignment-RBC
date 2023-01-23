import React, { useEffect, useState } from "react";
import { BsFillCartCheckFill } from 'react-icons/bs';
import './books.scss'

function Books(props) {
    const [books, setBooks] = useState([]);

    const { onClickAddToCart, cart } = props;

    useEffect(() => {
        fetch('https://picsum.photos/v2/list')
            .then(r => r.json())
            .then(books => setBooks(books));
    }, []);

    return (
        <React.Fragment>
            <div className="books">
                {
                    books.map((book, index) => (
                        <div className='book-container' id={book.id} key={book.id}>
                            <div className='image-container'>
                                <button className='add-to-cart' onClick={() => onClickAddToCart({ ...book, index })} disabled={cart.find(b => b.id === book.id) ? true : false}>
                                    <BsFillCartCheckFill />
                                </button>
                                <img className='book-image' src={book.download_url} />
                            </div>
                            <div className='book-content'>
                                <div className='book-label-value-wrapper book-title'>
                                    <strong>Book Title:</strong>
                                    <span className='book-content-value'>{`${book.author}-${index}`}</span>
                                </div>
                                <div className='book-label-value-wrapper  book-author'>
                                    <strong>Author:</strong>
                                    <span className='book-content-value'>{book.author}</span>
                                </div>
                                <div className='book-label-value-wrapper  book-price'>
                                    <strong>Price:</strong>
                                    <span className='book-content-value'>$10</span>
                                </div>
                                <div className='book-label-value-wrapper  book-description'>
                                    <span><strong>Description:</strong></span>
                                    <span className='book-content-value'>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                                        but also the leap into electronic typesetting, remaining essentially unchanged.
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </React.Fragment>
    );
}

export default Books;
