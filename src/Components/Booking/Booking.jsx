import React from "react";
import Gru from "../../assets/Gurudwara-Temple.png";
import './Booking.css'
import { useNavigate } from "react-router-dom";

function Booking() {
    const location = useNavigate();
    const handleImgClick = (name)=>{
        location('/map',{state:{Name:name}})
    }
  return (
    <div>
      <u>
        <center>
          <h1>One Day Trip Dhule</h1>
        </center>
      </u>
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100" src='https://source.unsplash.com/1600x1600/?mountain'  alt="First slide" />
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src='https://source.unsplash.com/1600x1600/?temple' alt="Second slide" />
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src='https://source.unsplash.com/1600x1600/?river' alt="Third slide" />
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
      <hr />
      <center>
        <h1>Location & Places to Visit on Dhule Map</h1>
      </center>
      <div class="ParentConatiner">
        <div class="Cards">
          <img src={Gru}  height={250} onClick={()=>{handleImgClick("Shirdi")}}/>
            Shirdi
        </div>
        <div class="Cards" onClick={()=>{handleImgClick("Guru")}}>
          <img src={Gru}  height={250}/>
            Guru
        </div>
        <div class="Cards" onClick={()=>{handleImgClick("Nashik")}}>
          <img src={Gru}  height={250}/>
            Nashik
            </div>
        <div class="Cards" onClick={()=>{handleImgClick("Aurg")}}>
          <img src={Gru}  height={250}/>
            Aurg
        </div>
      </div>
      Destinations near Dhule
      <div style={{ "text-align": "center" }}>
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
      </div>
    </div>
  );
}

export default Booking;
