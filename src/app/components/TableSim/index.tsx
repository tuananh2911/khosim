"use client";
import { Avatar, Button } from "antd";
import Table, { ColumnsType } from "antd/es/table";
import Link from "next/link";
import React from "react";
import { Spin } from "antd";
import Icons from "../Icons";

interface DataTypeSim {
  stt?: number;
  name: string;
  price: number;
  point: number;
  supplier: string;
}
const columns: ColumnsType<DataTypeSim> = [
  {
    title: "STT",
    dataIndex: "stt",
  },
  {
    title: "Số sim",
    dataIndex: "name",
  },
  {
    title: "Giá bán",
    dataIndex: "price",
  },
  {
    title: "Điểm",
    dataIndex: "point",
  },
  {
    title: "Mạng",
    dataIndex: "supplier",
  },
  {
    title: "Mua Sim",
    render: (record) => (
      <Link href={`/buy/${record.name}`}>
        <Button
          type="primary"
          style={{ backgroundColor: "rgb(254,209,0)", color: "black" }}
        >
          Mua ngay
        </Button>
      </Link>
    ),
  },
];
const data: DataTypeSim[] = [
  {
    name: "0386105647",
    price: 1000000,
    point: 80,
    supplier: "Viettel",
  },
  {
    name: "0386105648",
    price: 1000000,
    point: 80,
    supplier: "Viettel",
  },
];

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
const ListDataMobile = (props: { data: DataTypeSim[]; loading: boolean }) => {
  const { data, loading } = props;

  return (
    <div className="md:hidden">
      {loading ? (
        <div className="flex justify-center">
          <Spin />
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-2">
          {data.map((item, index) => {
            const avt =
              Icons[item.supplier.toLowerCase() as keyof typeof Icons];
            console.log(avt);
            return (
              <div key={index} className="flex">
                <div>
                  <Avatar src={avt.src} size={48} />
                </div>
                <div>
                  <div>{item.name}</div>
                  <div>{item.price}</div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
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
    <>
      <div
        style={{ width: "100%", margin: "10px 0", padding: "0 0 0 8px" }}
        className="hidden md:block"
      >
        <Table
          columns={columns}
          dataSource={data}
          pagination={pagination}
          loading={loading}
        />
      </div>
      <ListDataMobile data={data} loading={loading} />
    </>
  );
};
export default TableSim;
