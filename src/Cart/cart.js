import React from "react";
import { BiXCircle } from 'react-icons/bi';
import './cart.scss';

function Cart(props) {
    const { cart, onClickRemoveFromCart } = props;
    return (
        <React.Fragment>
            <div className="cart">
                {
                    cart?.length > 0 ? (
                        <>
                            {
                                cart.map((book, index) => (
                                    <div className='cart-item-container' key={`${book.id}-${index}`}>
                                        <img src={book.download_url} />
                                        <div className='book-details-container'>
                                            <div className='book-meta-details'>
                                                <div className='book-detail book-title'>
                                                    <strong>Title:</strong>
                                                    {`${book.author}-${book.index}`}
                                                </div>
                                                <div className='book-detail book-author'>
                                                    <strong>Author: </strong>
                                                    {book.author}</div>
                                                <div className=' book-detail book-description'>
                                                    <span><strong>Description</strong></span>
                                                    <div>
                                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                                                        but also the leap into electronic typesetting, remaining essentially unchanged.
                                                    </div>
                                                </div>

                                            </div>
                                            <div className='book-price'>$10</div>
                                        </div>
                                        <div className='book-remove'>
                                            <button onClick={() => onClickRemoveFromCart(book.id)} className='remove-book-button'>
                                                <BiXCircle />
                                                Remove From Cart
                                            </button>
                                        </div>
                                    </div>))
                            }
                            <div className='books-total'><strong>Total: </strong>${cart.length*10}</div>
                        </>
                    ) : (
                        <h2> Please Add Books to Cart</h2>
                    )
                }

            </div>
        </React.Fragment>
    );
}

export default Cart;
