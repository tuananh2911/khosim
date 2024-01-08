import BanSim from '@/app/components/BanSim/page';
import DropdownFilter from '@/app/components/Dropdown';
import MenuDropdown from '@/app/components/MenuDropdown';
import React from 'react'

const SDT = (param: any) => {
    const key = param.sdt;
    return (
        <div>
            <DropdownFilter />
            <div style={{ display: 'flex' }}>
                <MenuDropdown />
                <BanSim />
            </div>
        </div>
    )
}
export default SDT;