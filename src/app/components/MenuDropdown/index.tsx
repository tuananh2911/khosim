"use client";
import React, { useState } from "react";
import type { ColumnsType, TableProps } from "antd/es/table";
import Table from "antd/es/table";
import Link from "next/link";
import { Select } from "antd";
const { Option } = Select;
interface DataType {
  id: string;
  title: string;
}
const columns: ColumnsType<DataType> = [
  {
    title: "Sim Theo Mạng",
    dataIndex: "title",
    render: (title: string, record: DataType) => (
        <Link href={`/${record.title}`} style={{ color: "black" }}>
          {title}
        </Link>
    ),
  },
];
const columns2: ColumnsType<DataType> = [
  {
    title: "Sim Theo Giá",
    dataIndex: "title",
    render: (title: string, record: DataType) => (
        <Link href={`/${record.id}`} style={{ color: "black" }}>
          {title}
        </Link>
    ),
  },
];
const columns3: ColumnsType<DataType> = [
  {
    title: "Sim Đẳng Cấp",
    dataIndex: "title",
    render: (title: string, record: DataType) => (
        <Link href={`/${record.id}`} style={{ color: "black" }}>
          {title}
        </Link>
    ),
  },
];

const data: DataType[] = [
  { id: "Viettel", title: "Viettel" },
  { id: "Mobifone", title: "Mobifone" },
  { id: "Vinaphone", title: "Vinaphone" },
  { id: "Vietnamobile", title: "Vietnamobile" },
  { id: "Gmobile", title: "Gmobile" },
  { id: "iTelecom", title: "iTelecom" },
  { id: "Wintel", title: "Wintel" },
];
const data2: any[] = [
  { id: [0,500000], title: "Dưới 500 nghìn" },
  { id: [500000,1000000], title: "Từ 500 - 1 triệu" },
  { id: [1000000,3000000], title: "Từ 1 - 3 triệu" },
  { id: [3000000,5000000], title: "Từ 3 - 5 triệu" },
  { id: [5000000,10000000], title: "Từ 5 - 10 triệu" },
  { id: [10000000,50000000], title: "Từ 10 - 50 triệu" },
  { id: [50000000,100000000], title: "Từ 50 - 100 triệu" },
  { id: [100000000,200000000], title: "Từ 100 - 200 triệu" },
  { id: [200000000,500000000], title: "Từ 200 - 500 triệu" },
  { id: [500000000,900000000], title: "Trên 500 triệu" },
];
const data3: DataType[] = [
  { id: "Sim Lục Quý", title: "Sim Lục Quý" },
  { id: "Sim Ngũ Quý", title: "Sim Ngũ Quý" },
  { id: "Sim Tứ Quý", title: "Sim Tứ Quý" },
  { id: "Sim Tam Hoa Kép", title: "Sim Tam Hoa Kép" },
  { id: "Sim Lục Quý Giữa", title: "Sim Lục Quý Giữa" },
  { id: "Sim Tam Hoa", title: "Sim Tam Hoa" },
  { id: "Sim Ngũ Quý Giữa", title: "Sim Ngũ Quý Giữa" },
  { id: "Sim Taxi", title: "Sim Taxi" },
  { id: "Sim Lặp", title: "Sim Lặp" },
  { id: "Sim Kép", title: "Sim Kép" },
  { id: "Sim Gánh Đảo", title: "Sim Gánh Đảo" },
  { id: "Sim Số Tiến", title: "Sim Số Tiến" },
  { id: "Sim Tiến Đôi", title: "Sim Tiến Đôi" },
  { id: "Sim Tiến Kép", title: "Sim Tiến Kép" },
  { id: "Sim Tứ Qúy Giữa", title: "Sim Tứ Qúy Giữa" },
  { id: "Sim Số Độc", title: "Sim Số Độc" },
  { id: "Sim Năm Sinh", title: "Sim Năm Sinh" },
  { id: "Sim Lộc Phát", title: "Sim Lộc Phát" },
  { id: "Sim Thần Tài", title: "Sim Thần Tài" },
  { id: "Sim Ông Địa", title: "Sim Ông Địa" },
  { id: "Sim Đại Cát", title: "Sim Đại Cát" },
  { id: "Sim Đặc Biệt", title: "Sim Đặc Biệt" },
  { id: "Sim Tự Chọn", title: "Sim Tự Chọn" },
  { id: "Sim Dễ Nhớ", title: "Sim Dễ Nhớ" },
];
const ListData = (props: { data: DataType[]; title: string, nameQuery: string}) => {
  const { data, title, nameQuery } = props;
  return (
      <div>
        <div className="p-4 bg-gray-200 border-b font-bold">{title}</div>
        <div className="grid grid-cols-2 md:grid-cols-1 gap-2 md:gap-0">
          {data.map((item, index) => {
            return (
                <div
                    key={index}
                    className="p-4 bg-white border-b hover:bg-gray-200"
                >
                  <Link href={`?${nameQuery}=${item.id}`} style={{ color: "black" }} prefetch={false}>
                    {item.title}
                  </Link>
                </div>
            );
          })}
        </div>
      </div>
  );
};
const MenuDropdown = () => {
  return (
      <div
          //   style={{ width: "200px", margin: "10px 0" }}
          className="order-1 md:order-none w-full md:w-[200px] my-4"
      >
         {/*<Table columns={columns2} dataSource={data2} pagination={false} />*/}
        <ListData data={data2} title="Sim Theo Giá" nameQuery="priceRange" />
        <div style={{ padding: "8px 8px " }}></div>
        <ListData data={data} title="Sim Theo Mạng" nameQuery="supplier" />
         {/*<Table columns={columns} dataSource={data} pagination={false} />*/}
        <div style={{ padding: "8px 8px " }}></div>
         {/*<Table columns={columns3} dataSource={data3} pagination={false} />*/}
        <ListData data={data3} title="Sim Đẳng Cấp" nameQuery="type" />
      </div>
  );
};
export default MenuDropdown;