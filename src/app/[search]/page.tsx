
import React, { useState } from 'react'
import DropdownFilter from '../components/Dropdown';
import MenuDropdown from '../components/MenuDropdown';
import TableSim from '../components/TableSim';

const SearchParam = (param: any) => {

    return (
        <div>
            <DropdownFilter />
            <div style={{ display: 'flex' }}>
                <MenuDropdown />
                <TableSim />
            </div>

        </div>
    )
}
export default SearchParam;