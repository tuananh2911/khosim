"use client"
import DropdownFilter from "./components/Dropdown";
import { Content } from "antd/es/layout/layout";
import MenuDropdown from "./components/MenuDropdown";
import TableSim from "./components/TableSim";
import request from "@/api/request";
import { useParams } from "next/navigation";
import {useEffect, useState} from "react";

export default  function  Home({params, searchParams} : any) {
    const [page, setPage] = useState<number>(1);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [data, setData] = useState<any[]>([])
    const fetchData = async () => {
        setIsLoading(true);
      const body = {
        ...searchParams,
        priceRange: searchParams.priceRange ? searchParams.priceRange.split("-") : undefined,
          supplier : searchParams.supplier ? searchParams.supplier.split(",") : undefined,
          pagination: {
            page,
              limit: 10
          }
      }
        try{
            const res = await request.post("sims", body);
            setData(res.data.sims)
        }catch (error){
            console.log(error)
        }
        setIsLoading(false)
    }
    useEffect(() => {
      fetchData()
    }, [searchParams])
  return (
    <>
      <Content>
        <DropdownFilter />
        <div className="flex flex-col md:flex-row ">
          <MenuDropdown />
          <TableSim page = {page} setPage = {setPage} isLoading = {isLoading} data={data} />
        </div>
      </Content>
    </>
  );
}
