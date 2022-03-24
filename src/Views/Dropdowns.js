import React, { useState } from "react";

// Today date
const todayDate = new Date().toLocaleDateString();

// Future date
function futuredate(n) {
  var targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + n);

  var dd = targetDate.getDate();
  var mm = targetDate.getMonth() + 1; // 0 is January, so we must add 1
  var yyyy = targetDate.getFullYear();

  var dateString = mm + "-" + dd + "-" + yyyy;
  return dateString;
}

const Dropdowns = () => {
  const [currentDate, setCurrentDate] = useState(todayDate);

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
            <div class="px-4 py-3 flex flex-col justify-center gap-3 items-center">
              <p
                class="text-sm leading-5 p-2 mb-1 pointer text-base"
                onClick={() => setCurrentDate(futuredate(1))}
              >
                {futuredate(1)}
              </p>
              <p
                class="text-sm leading-5 p-2 mb-1 pointer text-base"
                onClick={() => setCurrentDate(futuredate(2))}
              >
                {futuredate(2)}
              </p>
              <p
                class="text-sm leading-5 p-2 mb-1 pointer text-base"
                onClick={() => setCurrentDate(futuredate(3))}
              >
                {futuredate(3)}
              </p>
              <p
                class="text-sm leading-5 p-2 mb-1 pointer text-base"
                onClick={() => setCurrentDate(futuredate(4))}
              >
                {futuredate(4)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdowns;
