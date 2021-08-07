import React, { useState, useEffect } from "react";
import "./Hotels.css";
import { useParams } from "react-router-dom";
import { Data } from "../Data/Data";
import NavbarBlack from "../Navbar/NavbarBlack";
import star from "../../images/star.png";

const Hotels = () => {
  const { name } = useParams();
  const [info, setInfo] = useState({});
  const hotels = info.hotels;

  useEffect(() => {
    const placeInfo = Data.find((place) => place.name.toString() === name);
    setInfo(placeInfo);
  }, [name]);

  return (
    <div className="container">
      <NavbarBlack />
      <div className="hotels-container">
        <div className="hotels">
          <h2>Hotels in {info.name}</h2>
          {hotels &&
            hotels.map((hotel) => {
              return (
                <div className="hotels-list" key={hotel.hotelId}>
                  <div className="hotel-image">
                    <img src={hotel.hotelImage} alt="hotelImage" />
                  </div>
                  <div className="hotel-info">
                    <h4>{hotel.hotelName}</h4>
                    <span className="details">{hotel.hotelDetails}</span>
                    <span className="details">{hotel.hotelCondition}</span>
                    <span className="details">{hotel.hotelFeature}</span>
                    <div className="rating-info">
                      <img src={star} alt="star" />
                      <span className="rating">{hotel.rating}</span>
                      <span className="cost">{hotel.cost}</span>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>

        <div className="google-map">Googel Map</div>
      </div>
    </div>
  );
};

export default Hotels;
