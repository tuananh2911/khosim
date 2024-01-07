"use client"
import Table, { ColumnsType } from 'antd/es/table';
import React from 'react'

interface DataTypeSim {
    stt: number;
    name: string;
    price: number;
    point: number;
    supplier: string;
}
const columns: ColumnsType<DataTypeSim> = [
    {
        title: 'STT',
        dataIndex: 'stt',
    },
    {
        title: 'Số sim',
        dataIndex: 'name',
    },
    {
        title: 'Giá bán',
        dataIndex: 'price',

    },
    {
        title: 'Điểm',
        dataIndex: 'point',
    },
    {
        title: 'Mạng',
        dataIndex: 'supplier',
    },
    {
        title: 'Mua Sim'
    }
];
const data: DataTypeSim[] = [
    {
        stt: 1,
        name: '0386105647',
        price: 1000000,
        point: 80,
        supplier: 'Viettel',
    }
]


const TableSim = () => {
    return (
        <div style={{ width: '100%', margin: '10px 0', padding: '0 0 0 8px' }}>
            <Table columns={columns} dataSource={data} />
        </div>
    )
}
export default TableSim;