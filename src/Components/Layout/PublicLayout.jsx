import React from "react";
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';




const PublicLayout = () => {
    return (
        <div className="col-md-6">
            <div className="section-title">
                <figure>
                <img src="/images/set-password/dapl-logo.png" alt="" />
                </figure>
            </div>
             {/* <div id="testimonial" className="owl-carousel owl-theme"> */}
             <Carousel infiniteLoop useKeyboardArrows autoPlay>
                <div className="item">
                    <figure>
                        <img src="/images/set-password/set-password.svg" alt="" />
                    </figure>
                    <h2>Lorem Ipsum is simply dummy text</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type</p>
                </div>
                <div className="item">
                    <figure>
                        <img src="/images/set-password/set-password.svg" alt="" />
                    </figure>
                    <h2>Lorem Ipsum is simply dummy text</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type</p>
                </div>
                <div className="item">
                    <figure>
                        <img src="/images/set-password/set-password.svg" alt="" />
                    </figure>
                    <h2>Lorem Ipsum is simply dummy text</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type</p>
                </div>
             </Carousel>
        
        
           
        </div>
    )
}
export default PublicLayout;

