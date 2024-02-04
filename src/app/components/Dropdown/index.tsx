"use client";
import React, { useState } from "react";
import { Select, Input, Dropdown, Button, Menu, Modal, Tooltip } from "antd";
import { Space } from "antd";
import {
  SearchOutlined,
  CloseCircleOutlined,
  DownOutlined,
  FilterOutlined,
} from "@ant-design/icons";
import type { SelectProps } from "antd";
import "./index.css";
import { useRouter } from "next/navigation";

const DropdownFilter = () => {
  const [pointValue, setPointValue] = useState<number | "">("");
  const [sumValue, setSumValue] = useState<number | "">("");
  const [modalVisible, setModalVisible] = useState(false);

  const networks = [
    { id: "Viettel", title: "Viettel" },
    { id: "Mobifone", title: "Mobifone" },
    { id: "Vinaphone", title: "Vinaphone" },
    { id: "Vietnamobile", title: "Vietnamobile" },
    { id: "Gmobile", title: "Gmobile" },
    { id: "iTelecom", title: "iTelecom" },
    { id: "Wintel", title: "Wintel" },
  ];

  const prefixes = [
    { id: "09", title: "09" },
    { id: "08", title: "08" },
    { id: "07", title: "07" },
    { id: "05", title: "05" },
    { id: "03", title: "03" },
    { id: "02", title: "02" },
  ];

  const priceRanges = [
    { id: "0,500000", title: "Dưới 500 nghìn" },
    { id: "500000,1000000", title: "Từ 500 - 1 triệu" },
    { id: "1000000,3000000", title: "Từ 1 - 3 triệu" },
    { id: "3000000,5000000", title: "Từ 3 - 5 triệu" },
    { id: "5000000,10000000", title: "Từ 5 - 10 triệu" },
    { id: "10000000,50000000", title: "Từ 10 - 50 triệu" },
    { id: "50000000,100000000", title: "Từ 50 - 100 triệu" },
    { id: "100000000,200000000", title: "Từ 100 - 200 triệu" },
    { id: "200000000,500000000", title: "Từ 200 - 500 triệu" },
    { id: "500000000,900000000", title: "Trên 500 triệu" },
  ];

  const sims = [
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

  const avoids = [
    { id: "0", title: "0" },
    { id: "1", title: "1" },
    { id: "2", title: "2" },
    { id: "3", title: "3" },
    { id: "4", title: "4" },
    { id: "5", title: "5" },
    { id: "6", title: "6" },
    { id: "7", title: "7" },
    { id: "8", title: "8" },
    { id: "9", title: "9" },
    { id: "49", title: "49" },
    { id: "53", title: "53" },
  ];
  const networksOptions = networks.map((network) => ({
    label: network.title,
    value: network.id,
  }));

  const prefixesOptions = prefixes.map((prefix) => ({
    label: prefix.title,
    value: prefix.id,
  }));

  const priceRangesOptions = priceRanges.map((range) => ({
    label: range.title,
    value: range.id,
  }));

  const simsOptions = sims.map((sim) => ({
    label: sim.title,
    value: sim.id,
  }));

  const avoidsOptions = avoids.map((avoid) => ({
    label: avoid.title,
    value: avoid.id,
  }));

  const [value, setValue] = useState<string[]>([]); // Nhà mạng
  const [value2, setValue2] = useState<string | undefined>(undefined); // Giá
  const [value3, setValue3] = useState<string[]>([]); // Loại Sim
  const [value4, setValue4] = useState<string| undefined>(undefined); // Đầu số
  const [value5, setValue5] = useState<string| undefined>(undefined); // Tránh số

  const router = useRouter();
  const selectProps: SelectProps<string[]> = {
    mode: "multiple",
    style: { width: "100%" },
    value: value,
    options: networksOptions,
    onChange: (newValue: string[]) => {
      setValue(newValue);
    },
    placeholder: "Nhà mạng",
    maxTagCount: "responsive",
    dropdownRender: (menu) => renderDropdown(menu, handleClear1),
  };
  const selectProps2: SelectProps<string> = {
    style: { width: "100%" },
    value: value2,
    options: priceRangesOptions,
    onChange: (newValue: string) => {
      setValue2(newValue);
      handleSearch();
    },
    placeholder: "Khoảng giá",
    maxTagCount: "responsive",
    dropdownRender: (menu) => renderDropdown(menu, handleClear2),
  };
  const selectProps3: SelectProps<string[]> = {
    mode: "multiple",
    style: { width: "100%" },
    value: value3,
    options: simsOptions,
    onChange: (newValue: string[]) => {
      setValue3(newValue);
    },
    placeholder: "Loại Sim",
    maxTagCount: "responsive",
    dropdownRender: (menu) => renderDropdown(menu, handleClear3),
  };
  const selectProps4: SelectProps<string> = {
    style: { width: "100%" },
    value: value4,
    options: prefixesOptions,
    onChange: (newValue: string) => {
      setValue4(newValue);
      handleSearch();
    },
    placeholder: "Đầu số",
    maxTagCount: "responsive",
    dropdownRender: (menu) => renderDropdown(menu, handleClear4),
  };
  const selectProps5: SelectProps<string> = {
    style: { width: "100%" },
    value: value5,
    options: avoidsOptions,
    onChange: (newValue: string) => {
      setValue5(newValue);
      handleSearch();
    },
    placeholder: "Tránh số",
    maxTagCount: "responsive",
    dropdownRender: (menu) => renderDropdown(menu, handleClear5),
  };

  const handlePointChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (value === "" || (parseInt(value) >= 0 && parseInt(value) <= 80)) {
      setPointValue(value === "" ? "" : parseInt(value));
    }
  };

  const handleSumChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (value === "" || (parseInt(value) >= 1 && parseInt(value) <= 10)) {
      setSumValue(value === "" ? "" : parseInt(value));
    }
  };

  const handleSearch = () => {
    // Lấy value từ những cái trên => query dạng string &
    // Gọi api với query string
    // console.log(value);
    let query = "";
    if (value.length > 0) {
      query += "supplier=" + value.join(",");
    }
    if (value2) {
      const arrayPrice = value2.split(",");
      query += "&priceRange=" + arrayPrice;
    }
    if (value3.length > 0) {
      query += "&type=" + value3 + value.join(",");
    }
    if (value4) {
      query += "&prefix=" + value4;
    }
    if (value5) {
      query += "&avoidNumber=" + value5;
    }
    if (pointValue !== "") {
      query += "&totalPoint=" + pointValue;
    }
    if (sumValue !== "") {
      query += "&totalNode=" + sumValue;
    }
    console.log(query);
    if(query)
      router.push("?" + query);
    else {
      router.push("/")
    }
  };

  const handleClear = () => {
    setValue([]);
    setValue2("");
    setValue3([]);
    setValue4("");
    setValue5("");
    setPointValue("");
    setSumValue("");
  };

  const handleClear1 = () => {
    setValue([]);
  };
  const handleClear2 = () => {
    setValue2(undefined);
  };
  const handleClear3 = () => {
    setValue3([]);
  };
  const handleClear4 = () => {
    setValue4(undefined);
  };
  const handleClear5 = () => {
    setValue5(undefined);
  };
  const handleClearPoint = () => {
    setPointValue("");
  };
  const handleClearSum = () => {
    setSumValue("");
  };

  const renderDropdown = (menu: React.ReactNode, clearFunction: () => void) => (
    <div>
      {menu}
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Button
          icon={<SearchOutlined />}
          onClick={handleSearch}
          style={{ backgroundColor: "#1677ff", color: "white" }}
        >
          Xem kết quả
        </Button>
        <Button onClick={clearFunction}>
          <CloseCircleOutlined /> Bỏ chọn
        </Button>
      </div>
    </div>
  );

  const dropdown1 = (
    <Menu>
      <div style={{ padding: "8px", display: "flex", flexDirection: "column" }}>
        <Input
          type="number"
          min={0}
          max={80}
          onChange={handlePointChange}
          placeholder="Tổng điểm: <81"
          style={{ width: "200px", marginRight: "8px" }}
        />
        <div>
          <Button
            onClick={handleSearch}
            style={{
              backgroundColor: "#1677ff",
              color: "white",
              marginRight: "8px",
            }}
          >
            Xem kết quả
          </Button>
          <Button onClick={handleClearPoint}>Bỏ chọn</Button>
        </div>
      </div>
    </Menu>
  );
  const dropdown2 = (
    <Menu>
      <div style={{ padding: "8px", display: "flex", flexDirection: "column" }}>
        <Input
          type="number"
          min={0}
          max={80}
          onChange={handleSumChange}
          placeholder="Tổng nút: 1-10"
          style={{ width: "200px", marginRight: "8px" }}
        />
        <div>
          <Button
            onClick={handleSearch}
            style={{
              backgroundColor: "#1677ff",
              color: "white",
              marginRight: "8px",
            }}
          >
            Xem kết quả
          </Button>
          <Button onClick={handleClearSum}>Bỏ chọn</Button>
        </div>
      </div>
    </Menu>
  );

  const menu = (
    <Menu
      style={{
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
      }}
    >
      <div className="w-full p-4">
        <p>Chọn nhà mạng</p>
        <div>
          <Space direction="vertical" style={{ width: "20vh" }}>
            <Select {...selectProps} />
          </Space>
        </div>
        <hr />
        <p>Sim theo giá</p>
        <div>
          <Space direction="vertical" style={{ width: "20vh" }}>
            <Select {...selectProps2} />
          </Space>
        </div>
        <hr />
        <p>Loại Sim</p>
        <div>
          <Space direction="vertical" style={{ width: "20vh" }}>
            <Select {...selectProps3} />
          </Space>
        </div>
        <hr />
        <p>Đầu số</p>
        <div>
          <Space direction="vertical" style={{ width: "20vh" }}>
            <Select {...selectProps4} />
          </Space>
        </div>
        <hr />
        <p>Tránh số</p>
        <div>
          <Space direction="vertical" style={{ width: "20vh" }}>
            <Select {...selectProps5} />
          </Space>
        </div>
        <hr />
        <p>Điểm & nút</p>
        <div style={{ display: "flex" }}>
          <Input
            className="w-1/2"
            type="number"
            min={0}
            max={80}
            value={pointValue}
            onChange={handlePointChange}
            placeholder="Tổng điểm: < 81"
          />
          <Input
            className="w-1/2"
            type="number"
            min={1}
            max={10}
            value={sumValue}
            onChange={handleSumChange}
            placeholder="Tổng nút: 1-10"
          />
        </div>
        <div className="mt-4 flex justify-between">
          <Button
            icon={<SearchOutlined />}
            onClick={handleSearch}
            style={{ backgroundColor: "#1677ff", color: "white" }}
          >
            Xem kết quả
          </Button>
          <Button onClick={handleClear}>
            <CloseCircleOutlined /> Bỏ chọn
          </Button>
        </div>
      </div>
    </Menu>
  );

  return (
    <div
      style={{
        backgroundColor: "#f9f9f9",
      }}
      className="flex items-start p-2 md:items-center"
    >
      <Dropdown overlay={menu} trigger={["click"]} placement="topLeft">
        <Button style={{ backgroundColor: "rgb(254, 209, 0)" }}>
          <FilterOutlined />
          BỘ LỌC <DownOutlined />
        </Button>
      </Dropdown>
      <div
        style={{
          width: "100%",
        }}
        className="flex overflow-auto md:overflow-visible gap-2 ml-1"
      >
        <div className="min-w-32">
          <Select {...selectProps} />
        </div>
        <div className="min-w-32">
          <Select {...selectProps2} />
        </div>
        <div className="min-w-32">
          <Select {...selectProps3} />
        </div>
        <div className="min-w-32">
          <Select {...selectProps4} />
        </div>
        <div className="min-w-32">
          <Select {...selectProps5} />
        </div>
        <Dropdown overlay={dropdown1} trigger={["click"]}>
          <Button>Tổng điểm</Button>
        </Dropdown>
        <Dropdown overlay={dropdown2} trigger={["click"]}>
          <Button>Tổng nút</Button>
        </Dropdown>
      </div>
    </div>
  );
};

export default DropdownFilter;
