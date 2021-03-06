import React from 'react'
import BookImage from '../assets/bookimage.png'
import '../css/BookDescription.css'
import Header from './Header'
import Footer from './Footer'

function BookDescription() {
    return (
        <div className = "descriptionpage" >
            {/* <Header/> */}
        <p className="paths">
             <button className = "gotohome"> Home / </button><span id="pathtobook">Book</span>
             </p>

        <div className="imagebox">
        <img src={BookImage} alt="Image" className = "booklogo" />
         </div>
        <div className="tagbuttons">
           
        <button id="addtobag">ADD TO BAG</button> 
       
       <button id="wishlist">❤ WISHLIST</button> 
       
        </div>
        <div className = "description">
             <div className="detailsofbook">
          <p id="booktitle">Don't Make Me Think</p>
            <p id ="authorbook">by Steve Krug</p>
          <div className="ratingbox">
                <span>4★</span>
            </div>
             <span className="countreviewbook">(20)</span>
             <span className="bookprice">Rs. 1500</span> 
             <span className="originalprice"><s>Rs. 2000</s></span>
             <hr className="borderline"></hr>

         <div className="descriptionofbookdetails">
        <ul id="caption"><li>Book Detail</li></ul>
         <p id="Bookparagraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint vero molestias blanditiis fuga ipsa voluptatem, atque consectetur repellat repellendus? Eaque libero quaerat tenetur obcaecati aliquam sint, sit illo veritatis quisquam.</p>
         <hr className="borderline"></hr> 
        </div>

        <div className="feedback">
        <div className="feedback-title">
            <p className="para-for-custfeedback">Customer Feedback</p>
        </div>
        <div className="rating-pad">
        <div className="overallrating">
        <p className="para-for-overallrating"> Overall rating</p>
           <div id="stars">☆ ☆ ☆ ☆ ☆ </div>
        <div className="writereview">
           <input className="input-for-review" type="text" placeholder="Write your review" /> 
        <div className="submitbutton">Submit</div>
        </div>
         {/* <Footer/> */}
        </div>
</div>
        </div>
        </div>
        </div>
        </div>
    )
 }

export default BookDescription
