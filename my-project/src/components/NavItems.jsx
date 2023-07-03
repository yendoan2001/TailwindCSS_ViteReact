import React from "react";

const NavItems = ({ items }) => {
  return (
    <ul className="my-3 px-4">
      {items.map((item, index) => (
        <li
          key={index}
          className={`flex justify-end items-center cursor-pointer ${
            item.active ? " bg-primary text-white" : ""
          }`}
        >
          <h3 className="text-3xl p-3">{item.label}</h3>
          {item.icon}
        </li>
      ))}
    </ul>
  );
};

export default NavItems;
