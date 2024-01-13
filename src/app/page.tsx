import DropdownFilter from "./components/Dropdown";
import { Content } from "antd/es/layout/layout";
import MenuDropdown from "./components/MenuDropdown";
import TableSim from "./components/TableSim";

export default function Home() {
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
