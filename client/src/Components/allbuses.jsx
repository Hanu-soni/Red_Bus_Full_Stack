import React, { useState, useEffect } from "react";
import BusCard from "../Components/BusCard";
import Filters from "../Components/Filters";
import axios from "axios";
//import BusData from "../Data/BusData";
import { useSelector } from "react-redux";

const Allbus = () => {
  const [showBus, setShowBus] = useState("");
  const [filteredBus, setFilteredBus] = useState([]);
  const fromTo = useSelector((state) => state.fromTo);
  // getting the data from redux
  const dataredux = useSelector((state) => state.fromTo);
  const { From, To, Days } = dataredux;

  useEffect(() => {
    // making api call
    GetbusData();
  }, []);

  const GetbusData = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_DATABASE_URI}/allbus`
      );
      setFilteredBus(response.data);
      // console.log(response.data[0].seatsLower);
      // Return the response data from the promise
    } catch (error) {
      throw error; // Re-throw the error to be caught in the calling code
    }
  };

  return (
    <div className="flex flex-row ">
      <Filters />
      <div className="basis-3/4 mt-24 mb-5 mr-5">
        {filteredBus.map((bus, id) => (
          <BusCard
            key={id}
            busid={bus._id}
            busName={bus.BusName}
            busRating={bus.Rating}
            busFrom={bus.From}
            busTo={bus.To}
            // busFromDate={fromTo.INIT_STATE.FromDate}
            busFromTime={bus.FromTime}
            // busToDate={fromTo.INIT_STATE.ToDate.format("ll")}
            busToTime={bus.ToTime}
            // busTimeInterval={bus.TimeInterval}
            busSeatsUpper={bus.seatsUpper}
            busSeatsLower={bus.seatsLower}
            bustravtime={bus.TimeInterval}
            showBus={showBus}
            setShowBus={setShowBus}
          />
        ))}
      </div>
    </div>
  );
};

export default Allbus;
