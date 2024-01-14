import { OrderForm } from "@/app/components";
import BanSim from "@/app/components/BanSim";
import DropdownFilter from "@/app/components/Dropdown";
import MenuDropdown from "@/app/components/MenuDropdown";
import React from "react";

const SDT = (param: any) => {
  const key = param.sdt;
  return (
    <div>
      <DropdownFilter />
      <div className="flex flex-col md:flex-row ">
        <div className="basis-1/6 order-1 md:order-none">
          <MenuDropdown />
        </div>
        <div className="basis-5/6 ">
          <BanSim />
          <OrderForm />
        </div>
      </div>
    </div>
  );
};
export default SDT;
