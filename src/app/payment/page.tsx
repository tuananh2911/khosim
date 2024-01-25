import {Content} from "antd/es/layout/layout";
import DropdownFilter from "@/app/components/Dropdown";
import MenuDropdown from "@/app/components/MenuDropdown";
import TableSim from "@/app/components/TableSim";
import Introduction from "@/app/payment/introduction";

const Payment = () => {
    return (
        <>
            <Content>
                <DropdownFilter />
                <div className="flex flex-col md:flex-row ">
                    <MenuDropdown />
                    <div>
                        <Introduction />
                    </div>
                </div>
            </Content>
        </>
    );
}

export default Payment;