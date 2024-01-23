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

    const [totalSims, setTotalSims]= useState<any>();
    const [data, setData] = useState<any[]>([])
    const fetchData = async (currentPage: number) => {
      setIsLoading(true);
      const body = {
        ...searchParams,
        priceRange: searchParams.priceRange ? searchParams.priceRange.split("-") : undefined,
        supplier: searchParams.supplier ? searchParams.supplier.split(",") : undefined,
        pagination: {
          page: currentPage,
          limit: 20,
        },
      };
        try{
            const res = await request.post("http://114.29.238.20:5000/sims", body);
            setData(res.data.sims);
            setTotalSims(res.data.total)
        }catch (error){
            console.log(error)
        }
        setIsLoading(false)
    }
    useEffect(() => {
      fetchData(page);
    }, [searchParams, page]);
    
  return (
    <>
      <Content>
        <DropdownFilter />
        <div className="flex flex-col md:flex-row ">
          <MenuDropdown />
          <TableSim page = {page} setPage = {setPage} isLoading = {isLoading} data={data} totalSims={totalSims} />
        </div>
      </Content>
    </>
  );
}
