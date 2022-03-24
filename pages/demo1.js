import React from "react";
import { navMenu } from "../src/data";

const demo1 = () => {
  return (
    <div className="" style={{ background: "#e7e7e7", height: "100vh" }}>
      Demo Menu
      <div className="flex felx-col gap-3 justify-center items-center">
        {navMenu.map((nav) => (
          <div key={nav.id}>
            <h1 className="text-3xl">{nav.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default demo1;
