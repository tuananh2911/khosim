import { Button, Col, Form, Input, message, Row, Select } from "antd";
import React, { useEffect, useState } from "react";
import TextArea from "antd/es/input/TextArea";
import request from "@/api/request";
const Suppliers = [
  {
    label: "Viettel",
    value: "Viettel",
  },
  {
    value: "Mobifone",
    label: "Mobifone",
  },
  {
    value: "VietnamMobile",
    label: "VietnamMobile",
  },
  {
    label: "Vinaphone",
    value: "Vinaphone",
  },
  {
    label: "Itelecom",
    value: "Itelecom",
  },
  {
    label: "GMobile",
    value: "GMobile",
  },
];

const subcribsionTypes = [
  {
    value: "Trả trước",
    label: "Trả trước",
  },
  {
    value: "Trả sau",
    label: "Trả sau",
  },
];
type FieldType = {
  numbers: string[];
  supplier: string;
  subcribsionType: string;
  price: number;
  simType: string[];
};
const TypeSim = [
  "Sim Lục Quý",
  "Sim Ngũ Quý",
  "Sim Tứ Quý",
  "Sim Tam Hoa Kép",
  "Sim Lục Quý Giữa",
  "Sim Ngũ Quý Giữa",
  "Sim Tam Hoa",
  "Sim Taxi",
  "Sim Lặp",
  "Sim Kép",
  "Sim Gánh Đảo",
  "Sim Số Tiến",
  "Sim Tiến Đôi",
  "Sim Tiến Kép",
  "Sim Tứ Qúy Giữa",
  "Sim Số Độc",
  "Sim Năm Sinh",
  "Sim Lộc Phát",
  "Sim Thần Tài",
  "Sim Ông Địa",
  "Sim Đại Cát",
  "Sim Đặc Biệt",
  "Sim Tự Chọn",
  "Sim Dễ Nhớ",
];

const UploadSim = (props: any) => {
  const [simTypes, setSimTypes] = useState<string[]>([]);
  const [form] = Form.useForm();
  const { setFieldsValue, setFieldValue, getFieldsValue, getFieldValue } = form;
  const [isLoading, setIsLoading] = useState<boolean>(false);
  useEffect(() => {
    setFieldsValue({
      numbers: "",
      subcribsionType: "Trả trước",
      simType: [],
    });
  }, []);
  const handleClickSimType = (value: string) => {
    if (simTypes.includes(value)) {
      setSimTypes(simTypes.filter((item) => item !== value));
    } else {
      setSimTypes([...simTypes, value]);
    }
  };
  useEffect(() => {
    // Your code here
    setFieldValue("simType", simTypes);
  }, [form, simTypes]);
  const handleSubmit = async (data: any) => {
    setIsLoading(true);
    try {
      const authToken = localStorage.getItem('token'); // Replace with your actual authentication token
      const headers = {
        Authorization: `Bearer ${authToken}`,
        // Add other headers if needed
      };
      await request.post("http://114.29.238.20:5000/sims/upload", {
        ...data,
        numbers: data.numbers.split("\n"),
        price: Number(data.price),
      });
      message.success("Thành công");
      form.resetFields();
    } catch (error) {
      console.log(error);
      message.error("Thất bại");
    }
    setIsLoading(false);
  };
  return (
    <div className="flex justify-center w-full items-center bg-white p-4">
      {/* Left Column */}
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        autoComplete="off"
        layout="vertical"
        className="w-full"
        form={form}
        onFinish={handleSubmit}
      >
        <Row className="flex  bg-white w-full">
          <Col span={8}>
            <Form.Item<FieldType>
              label="Số điện thoại"
              name="numbers"
              rules={[
                { required: true, message: "Vui lòng nhập số điện thoại!" },
              ]}
            >
              <TextArea rows={26} cols={20} />
            </Form.Item>
          </Col>
          {/* Right Column */}
          <Col span={16}>
            <div className="px-3">
              <Form.Item<FieldType>
                label="Giá Sim"
                name="price"
                rules={[{ required: true, message: "Vui lòng nhập giá sim!" }]}
              >
                <Input type="number" />
              </Form.Item>
              <Form.Item<FieldType>
                label="Nhà mạng"
                name="supplier"
                rules={[{ required: true, message: "Vui lòng chọn nhà mạng!" }]}
              >
                <Select
                  className="w-full"
                  options={Suppliers}
                  placeholder="Chọn nhà mạng"
                />
              </Form.Item>
              <Form.Item<FieldType>
                label=" Loại thuê bao"
                name="subcribsionType"
                rules={[
                  { required: true, message: "Vui lòng chọn loại thuê bao!" },
                ]}
              >
                <Select
                  className="w-full"
                  options={subcribsionTypes}
                  placeholder="Loại thuê bao"
                />
              </Form.Item>

              <Form.Item label="Kiểu sim" name="simType">
                <div className="w-full max-h-[250px] border rounded-md p-4 overflow-y-scroll flex flex-wrap gap-2">
                  {TypeSim.map((item, index) => (
                    <div
                      key={index}
                      onClick={() => handleClickSimType(item)}
                      className={`px-3 py-2 border 
                        rounded-sm cursor-pointer 
                        ${
                          simTypes.includes(item)
                            ? "bg-[#6c757d] text-white text-bold"
                            : ""
                        }
                        hover:bg-[#6c757d] hover:text-white hover:text-bold`}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </Form.Item>
              <Form.Item>
                <Button
                  loading={isLoading}
                  type="primary"
                  htmlType="submit"
                  style={{
                    backgroundColor: "#008000",
                    borderColor: "#008000",
                    width: "100%",
                    color: "#fff",
                  }}
                  className="text-white px-4 py-1 rounded"
                >
                  Tải sim
                </Button>
              </Form.Item>
            </div>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default UploadSim;
