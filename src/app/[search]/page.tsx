"use client"
import React, { useState } from "react";
import DropdownFilter from "../components/Dropdown";
import MenuDropdown from "../components/MenuDropdown";
import TableSim from "../components/TableSim";

const SearchParam = (param: any) => {
  return (
    <div>
      <DropdownFilter />
      <div className="flex flex-col md:flex-row ">
        <MenuDropdown />
        <TableSim />
      </div>
    </div>
  );
};
export default SearchParam;
