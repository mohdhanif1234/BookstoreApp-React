import React from 'react'
import '../css/Bookdetails.css'
import BookImage from '../assets/bookimage.png'
import Star from '../assets/starlogo.jpg'

function Bookdetails() {
    return (
        <div className="book-outer-container">
            <div className="div-for-image">
                <img className="my-image-div" src={BookImage} alt="" />
            </div>
            <div className="div-for-details">
                <p className="para-for-book-title">Don't Make Me Think</p>
                <p className="para-for-book-author">by Steve Krug</p>
                <div className="div-for-rating">
                <p className="para-for-rating">4.5</p>
                <img className="star-logo" src={Star} alt="" />
                <p className="para-for-bookcount">(20)</p>
                </div>
                <div className="div-for-price">
                <p className="para-for-discouted-price"><strong>Rs.1500</strong></p>
                <p className="para-fororiginal-price"><s>Rs.2000</s></p>
                </div>
            </div>
        </div>
    )
}

export default Bookdetails
