import React from "react";
import Dropdowns from "../src/Views/Dropdowns";
import { FaHorseHead } from "react-icons/fa";
import DeliveryTime from "../src/Views/DeliveryTime";

const demo2 = () => {
  return (
    <div
      className="flex justify-center items-center text-4xl"
      style={{ height: "100vh" }}
    >
      <div>
        <h1 className="text-base flex gap-2 justify-center items-center">
          {" "}
          <FaHorseHead /> When would you like your{" "}
          <span className="font-bold">Express Delivery?</span>
        </h1>
        <div className="flex gap-4 justify-between">
          <Dropdowns />
          <DeliveryTime />
        </div>
      </div>
    </div>
  );
};

export default demo2;
