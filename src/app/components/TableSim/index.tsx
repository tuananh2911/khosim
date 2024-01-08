"use client"
import { Button } from 'antd';
import Table, { ColumnsType } from 'antd/es/table';
import Link from 'next/link';
import React from 'react'

interface DataTypeSim {
    stt?: number;
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
        title: 'Mua Sim',
        render: (record) => (
            <Link href={`/buy/${record.name}`}>
                <Button type="primary" style={{ backgroundColor: 'rgb(254,209,0)', color: 'black' }}>
                    Mua ngay
                </Button>
            </Link>
        ),
    }
];
const data: DataTypeSim[] = [
    {
        name: '0386105647',
        price: 1000000,
        point: 80,
        supplier: 'Viettel',
    },
    {
        name: '0386105648',
        price: 1000000,
        point: 80,
        supplier: 'Viettel',
    }
]

const fetchData = () => {
    // Simulated asynchronous data fetching
    return new Promise<DataTypeSim[]>((resolve) => {
        // Simulated API call or data retrieval process
        setTimeout(() => {
            const dataWithStt = data.map((item, index) => ({
                ...item,
                stt: index + 1,
            }));

            resolve(dataWithStt);
        }, 1000);
    });
};
const TableSim = () => {
    const [data, setData] = React.useState<DataTypeSim[]>([]);
    const [loading, setLoading] = React.useState<boolean>(true);

    React.useEffect(() => {
        fetchData().then((result) => {
            setData(result);
            setLoading(false);
        });
    }, []);
    const pagination = {
        pageSize: 50,
    };
    return (
        <div style={{ width: '100%', margin: '10px 0', padding: '0 0 0 8px' }}>
            <Table columns={columns} dataSource={data} pagination={pagination} loading={loading} />
        </div>
    )
}
export default TableSim;