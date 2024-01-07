"use client"
import React, { useState } from 'react'
import type { ColumnsType, TableProps } from 'antd/es/table';
import Table from 'antd/es/table';
import Link from 'next/link';
import { Select } from 'antd';
const { Option } = Select;
interface DataType {
    id: string;
    title: string;
}
const columns: ColumnsType<DataType> = [
    {
        title: 'Sim Theo Mạng',
        dataIndex: 'title',
        render: (title: string, record: DataType) => (
            <Link href={`/${record.title}`} style={{ color: 'black' }}>{title}</Link>
        ),
    },
]
const columns2: ColumnsType<DataType> = [
    {
        title: 'Sim Theo Giá',
        dataIndex: 'title',
        render: (title: string, record: DataType) => (
            <Link href={`/${record.title}`} style={{ color: 'black' }}>{title}</Link>
        ),
    },
]
const columns3: ColumnsType<DataType> = [
    {
        title: 'Sim Đẳng Cấp',
        dataIndex: 'title',
        render: (title: string, record: DataType) => (
            <Link href={`/${record.id}`} style={{ color: 'black' }}>{title}</Link>
        ),
    },
]

const data: DataType[] = [
    { id: '1', title: 'Viettel' },
    { id: '2', title: 'Mobifone' },
    { id: '3', title: 'Vinaphone' },
    { id: '4', title: 'Vietnamobile' },
    { id: '5', title: 'Gmobile' },
    { id: '6', title: 'iTelecom' },
    { id: '7', title: 'Wintel' },
]
const data2: DataType[] = [
    { id: '0-500', title: 'Dưới 500 nghìn' },
    { id: '500-1000', title: 'Từ 500 - 1 triệu' },
    { id: '1000-3000', title: 'Từ 1 - 3 triệu' },
    { id: '3000-5000', title: 'Từ 3 - 5 triệu' },
    { id: '5000-10000', title: 'Từ 5 - 10 triệu' },
    { id: '10000-50000', title: 'Từ 10 - 50 triệu' },
    { id: '50000-100000', title: 'Từ 50 - 100 triệu' },
    { id: '100000-200000', title: 'Từ 100 - 200 triệu' },
    { id: '200000-500000', title: 'Từ 200 - 500 triệu' },
    { id: '500000-0', title: 'Trên 500 triệu' },
]
const data3: DataType[] = [
    { id: '16', title: 'Sim Lục Quý' },
    { id: '17', title: 'Sim Ngũ Quý' },
    { id: '53', title: 'Sim Tứ Quý' },
    { id: '19', title: 'Sim Tam Hoa Kép' },
    { id: '30', title: 'Sim Lục Quý Giữa' },
    { id: '31', title: 'Sim Ngũ Quý Giữa' },
]
const MenuDropdown = () => {
    return (
        <div style={{ width: '200px', margin: '10px 0' }}>
            <Table columns={columns2} dataSource={data2} pagination={false} />
            <div style={{ padding: '8px 8px ' }}></div>
            <Table columns={columns} dataSource={data} pagination={false} />
            <div style={{ padding: '8px 8px ' }}></div>
            <Table columns={columns3} dataSource={data3} pagination={false} />
        </div>
    )
}
export default MenuDropdown;