import DropdownFilter from "./components/Dropdown";
import { Content } from "antd/es/layout/layout";
import MenuDropdown from "./components/MenuDropdown";
import TableSim from "./components/TableSim";
import request from "@/api/request";

export default function Home() {
    const fetchData = async () => {
      try{
        const res = await request.get("sims")
      }catch(error){

      }
    }
  return (
    <>
      <Content>
        <DropdownFilter />
        <div className="flex flex-col md:flex-row ">
          <MenuDropdown />
          <TableSim />
        </div>
      </Content>
    </>
  );
}
