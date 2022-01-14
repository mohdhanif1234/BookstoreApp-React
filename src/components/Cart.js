import React from 'react'
import "../css/Cart.css";
import Header from './Header';
import bookImg from "../assets/bookimage.png";
import { useHistory } from "react-router";

function Cart() {
    let history = useHistory()
    const gotohomepage = function(){
        history.push("/Home")
      }
    return (
        <div className="cartpage">
      <Header />
      <p className="paths">
        <button className="homebutton"> Home / </button>
        <button id="pathtobookbutton">Mycart</button>
      </p>
      <div className="Mycartbox">
          <div className = "mycartdetails">
        <span id="mycart">My cart(5)</span>
        <div className="location-bar"></div>
        <br />
          <div className="jfsd">
            <img src={bookImg} alt="Image" className="booklogooo" />
            <div className="book-details-cart">
              <p id="cartitem-title">Don't Make Me Think</p>
              <p id="cartitem-author">by Steve Krug</p>
              <p id="Price">Rs. 1500</p>{" "}
              <span id="discount-price">
                {" "}
                Rs. 2000
              </span>
            </div>
            <div id="cartcount-buttons">
              <div
                className="less-button"
              >
                −
              </div>
              <div className="countbox-view">20</div>
              <div
                className="more-button"
              >
                ＋
              </div>
              <button
                className="remove-from-cart"
              >
                Remove
              </button>
          </div>
          </div>
        </div>
        <div className="placeorder">
             <p>PLACE ORDER</p>
        </div>
      </div>
      </div>
    )
}

export default Cart
