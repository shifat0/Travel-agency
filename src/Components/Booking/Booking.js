import React, { useEffect, useState } from "react";
import "./Booking.css";
import { useForm } from "react-hook-form";
import { Link, useParams } from "react-router-dom";
import { Data } from "../Data/Data";
import Navbar from "../Navbar/Navbar";
import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";

const Booking = () => {
  const { name } = useParams();
  const [info, setInfo] = useState({});
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const minDate = new Date();

  useEffect(() => {
    const placeInfo = Data.find((place) => place.name.toString() === name);
    setInfo(placeInfo);
  }, [name]);

  const onSubmit = (data) => console.log(data);

  return (
    <div className="home">
      <div className="home-overlay">
        <div className="container">
          <Navbar />

          <div className="body-container">
            <div className="details">
              <h1>{info.name}</h1>
              <p>{info.description}</p>
            </div>

            <div className="booking-info">
              <form onSubmit={handleSubmit(onSubmit)}>
                <label>Origin</label>
                <input
                  placeholder="Where are you from"
                  {...register("origin", {
                    required: true,
                  })}
                />
                {errors.origin && (
                  <span style={{ color: "red" }}>*This field is required</span>
                )}
                <br />
                <label>Destination</label>
                <input
                  defaultValue={info.name}
                  disabled
                  {...register("destination", {
                    required: true,
                  })}
                />
                <br />
                <label>From</label>
                <DatePickerComponent
                  placeholder="Choose a date"
                  format="dd-MM-yyyy"
                  min={minDate}
                />

                <br />
                <label>To</label>
                <DatePickerComponent
                  placeholder="Choose a date"
                  format="dd-MM-yyyy"
                  min={minDate}
                />

                <br />
                <Link to={`/${info.name}/hotels`}>
                  <button className="start-booking">Start Booking</button>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
