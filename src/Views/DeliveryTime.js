import React, { useState } from "react";

const time = [
  {
    id: 1,
    slot: "8:30 AM - 9:00 AM",
  },
  {
    id: 2,
    slot: "9:00 AM - 9:30 AM",
  },
  {
    id: 1,
    slot: "9:30 AM - 10:00 AM",
  },
  {
    id: 1,
    slot: "10:00 AM - 10:30 AM",
  },
  {
    id: 1,
    slot: "10:30 AM - 11:00 AM",
  },
  {
    id: 1,
    slot: "11:00 AM - 11:30 AM",
  },
  {
    id: 1,
    slot: "11:30 AM - 12:00 PM",
  },
  {
    id: 1,
    slot: "12:30 PM - 1:00 PM",
  },
  {
    id: 1,
    slot: "1:30 PM - 2:00 PM",
  },
  {
    id: 1,
    slot: "2:00 PM - 2:30 PM",
  },
  {
    id: 1,
    slot: "2:30 PM - 3:00 PM",
  },
  {
    id: 1,
    slot: "3:00 PM - 3:30 PM",
  },
  {
    id: 1,
    slot: "3:30 PM - 4:00 PM",
  },
  {
    id: 1,
    slot: "8:30 AM - 9:00 AM",
  },
];

const DeliveryTime = () => {
  const [currentDate, setCurrentDate] = useState("SELECT-TIME");

  return (
    <div className="">
      <div class=" text-left dropdown">
        <span class="rounded-md shadow-sm">
          <button
            class="inline-flex w-full px-4 justify-center items-center text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out bg-red-500  rounded-md hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800"
            type="button"
            aria-haspopup="true"
            aria-expanded="true"
            aria-controls="headlessui-menu-items-117"
          >
            <div className="py-2 px-3">
              <p className=" text-white">{currentDate}</p>
            </div>
          </button>
        </span>
        <div class="opacity-0 invisible dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95">
          <div
            class="absolute right-0 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none"
            aria-labelledby="headlessui-menu-button-1"
            id="headlessui-menu-items-117"
            role="menu"
          >
            <div class="px-4 py-3 flex-col items-center justify-center gap-3 items-center">
              {time.map((t) => (
                <div
                  key={t.slot}
                  class="text-sm leading-5 p-2 mb-1 pointer text-base"
                  onClick={() => setCurrentDate(t.slot)}
                >
                  {t.slot}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryTime;
