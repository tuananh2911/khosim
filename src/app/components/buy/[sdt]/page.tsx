
import { OrderForm } from '@/app/components';
import BanSim from '@/app/components/BanSim';
import DropdownFilter from '@/app/components/Dropdown';
import MenuDropdown from '@/app/components/MenuDropdown';
import React from 'react'

const SDT = (param: any) => {
    const key = param.sdt;
    return (
        <div>
            <DropdownFilter />
            <div className = "flex flex-col md:flex-row">
                <MenuDropdown />
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <BanSim />
                    <OrderForm />
                </div>


            </div>
        </div>
    )
}
export default SDT;