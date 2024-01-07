import { Layout } from "antd";
import DropdownFilter from "./components/Dropdown";
import { Content } from "antd/es/layout/layout";
import MenuDropdown from "./components/MenuDropdown";
import TableSim from "./components/TableSim";

export default function Home() {
  return (
    <>
      <Content>
        <DropdownFilter />
        <div style={{ display: 'flex' }}>
          <MenuDropdown />
          <TableSim />
        </div>
      </Content>
    </>
  );
}
