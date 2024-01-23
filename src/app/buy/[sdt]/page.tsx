"use client"
import { OrderForm } from "@/app/components";
import BanSim from "@/app/components/BanSim";
import DropdownFilter from "@/app/components/Dropdown";
import MenuDropdown from "@/app/components/MenuDropdown";
import React, {useEffect, useState} from "react";
import request from "@/api/request";

const SDT = ({params}: any) => {
  const key = params.sdt;
  const [data, setData] = useState<any>();

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const getSim = async () => {
      setIsLoading(true)
      try{
        const res = await request.get(`http://114.29.238.20:5000/sims/${key}`)
          setData(res.data)
      }catch(err){

      }
      setIsLoading(false)
  }
  useEffect(() => {
      if(key){
          getSim()
      }
  }, [key])
  return (
    <div>
      <div className="flex flex-col md:flex-row ">
        <div className="basis-1/6 order-1 md:order-none">
          <MenuDropdown />
        </div>
        <div className="basis-5/6 ">
            {
                !isLoading && data && <>
                    <BanSim data = {data} />
                    <OrderForm data = {data} />
                </>
            }
        </div>
      </div>
    </div>
  );
};
export default SDT;
