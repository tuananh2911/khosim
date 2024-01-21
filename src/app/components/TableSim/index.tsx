"use client";
import { Avatar, Button } from "antd";
import Table, { ColumnsType } from "antd/es/table";
import Link from "next/link";
import React from "react";
import { Spin } from "antd";
import Icons from "../Icons";
import numberWithVND from "@/app/utils/numberwithvnd";
import { formatPhoneNumber } from "@/app/utils/string";
import request from "@/api/request";

interface DataTypeSim {
  stt?: number;
  number: string;
  price: number;
  point: number;
  supplier: string;
}
const columns: ColumnsType<DataTypeSim> = [
  {
    title: "Số sim",
    dataIndex: "number",
    render: (row) => formatPhoneNumber(row),
  },
  {
    title: "Giá bán",
    dataIndex: "price",
    render: (row) => numberWithVND(row),
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
      <Link href={`/buy/${record.id}`}>
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
const Data: DataTypeSim[] = [
  {
    number: "0386105647",
    price: 1000000,
    point: 80,
    supplier: "Viettel",
  },
  {
    number: "0386105648",
    price: 1000000,
    point: 80,
    supplier: "Mobifone",
  },
  {
    number: "0386105648",
    price: 1000000,
    point: 80,
    supplier: "Vinaphone",
  },
  {
    number: "0386105648",
    price: 1000000,
    point: 80,
    supplier: "Vietnamobile",
  },
  {
    number: "0386105648",
    price: 1000000,
    point: 80,
    supplier: "Gmobile",
  },
];

const ListDataMobile = (props: { data: DataTypeSim[]; loading: boolean }) => {
  const { data, loading } = props;

  return (
    <div className="md:hidden mx-1">
      {loading ? (
        <div className="flex justify-center">
          <Spin />
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-2">
          {data.map((item, index) => {
            const avt =
              Icons[item.supplier.toLowerCase() as keyof typeof Icons];
            const prefix = formatPhoneNumber(item.number).slice(0, 5);
            const suffix = formatPhoneNumber(item.number).slice(5, 12);
            return (
              <Link
                href={`/buy/${item.number}`}
                key={index}
                className="flex items-center justify-between border bg-white rounded-md shadow-md p-2"
              >
                <div>
                  <Avatar src={avt.src} size={48} />
                </div>
                <div className="p-2">
                  <div className="font-bold text-green-700">
                    <span>{prefix}</span>
                    <span className="text-red-700">{suffix}</span>
                  </div>
                  <div>{numberWithVND(item.price)}</div>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};
const TableSim = (props: any) => {
  const {data = Data, isLoading = false} = props
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
          loading={isLoading}
        />
      </div>
      <ListDataMobile data={data} loading={isLoading} />
    </>
  );
};
export default TableSim;
