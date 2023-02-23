import React from "react";

const RightSection = () => {
  return (
    <div className="px-4 bg-white py-3 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-md flex flex-col justify-center space-y-2">
      <h1 className=" text-xl font-bold">Make a Reservation</h1>
      <hr />
      <div className=" flex flex-col space-y-4">
        <div>
          <p className=" font-bold">Party size</p>
          <select name="" id="" className="w-full">
            <option value="">1 person</option>
            <option value="">2 person</option>
            <option value="">3 person</option>
          </select>
        </div>

        {/* date and time */}
        <div className=" flex  justify-between items-center space-x-1">
          <div className=" flex flex-col">
            <p className=" font-bold">Date</p>
            <input
              type="text"
              name=""
              id=""
              placeholder="Enter date"
              className="border"
            />
          </div>

          <div className=" flex flex-col">
            <p className=" font-bold">Time</p>
            <select name="" id="">
              <option value="">7:30 AM</option>
              <option value="">7:30 AM</option>
              <option value="">7:30 AM</option>
            </select>
          </div>
        </div>
      </div>
      <hr />
      <button className=" bg-red-500 text-center py-3 rounded-md font-bold text-xl">
        Find a Time
      </button>
    </div>
  );
};

export default RightSection;
