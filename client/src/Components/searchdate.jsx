import React, { useState } from "react";

const SearchDays = ({ days, setdays }) => {
  const [Days, setDays] = useState([
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ]);

  return (
    <div>
      <input
        list="daysList" // Changed the "list" attribute value to match the datalist id
        onChange={(e) => setdays(e.target.value)}
        type="search"
        className="w-80 form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        placeholder="Select the day to travel"
      />
      <datalist id="daysList">
        {" "}
        {/* Changed the id to "daysList" */}
        {Days.map((op, id) => (
          <option value={op} key={id} />
        ))}
      </datalist>
    </div>
  );
};

export default SearchDays;
