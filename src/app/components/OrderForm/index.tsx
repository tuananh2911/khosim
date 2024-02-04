"use client"
import React, { useState, useEffect, ChangeEvent } from 'react';
import axios from 'axios';
import {Form, Input, Button, Radio, type RadioChangeEvent, message} from 'antd';
import { Typography, Divider, Tag, Select } from 'antd';
import Link from 'next/link';
import numberWithVND from "@/app/utils/numberwithvnd";
import request from "@/api/request";
import {BASE_API} from "@/constants/api";
const { Option } = Select;
const { Title, Paragraph, Text } = Typography;
interface City {
    Id: string;
    Name: string;
    Districts: District[];
}

interface District {
    Id: string;
    Name: string;
    Wards: Ward[];
}

interface Ward {
    Id: string;
    Name: string;
}
const plainOptions = ['Anh', 'Chị'];

const OrderForm: React.FC<any> = (props) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const {data} = props
    const [cities, setCities] = useState<City[]>([]);
    const [districts, setDistricts] = useState<District[]>([]);
    const [wards, setWards] = useState<Ward[]>([]);
    const [gender, setGender] = useState('Anh');
    const [houseNumber, setHouseNumber] = useState('');
    const [methodPay,setMethodPay]= useState('');
    const [city, setCity] = useState('');
    const [district, setDistrict] = useState('');
    const [ward, setWard] = useState('');
    const [formData, setFormData] = useState({
        name: '', // name input
        numberCustomer: '', // phone number input
        sex:'',
        require:'',
        methodPay:'',
        typeSim:'',
        address: '', // address input
        totalPrice: data.price, // total amount to display
    });
    const onChange = ({ target: { value } }: RadioChangeEvent) => {
        setGender(value);
    };
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get<City[]>('https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json');
                setCities(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);
    const handleCityChange = (value: string) => {

        const selectedCity:any = cities.find(city => city.Id === value);
        console.log('city', selectedCity)
        setCity(selectedCity.Name);
        if (selectedCity) {
            setDistricts(selectedCity.Districts || []);
            setWards([]); // Reset danh sách phường/xã khi chọn lại tỉnh/thành phố
        }
    };

    const handleDistrictChange = (value: string) => {
        const selectedDistrict:any = districts.find(district => district.Id === value);
        setDistrict(selectedDistrict.Name);
        if (selectedDistrict) {
            setWards(selectedDistrict.Wards || []);
        }
    };
    const handleWardChange = (value: string) => {
        const selectedWard:any = wards.find(ward => ward.Id === value);
        setWard(selectedWard.Name);
    };
    const handleInputChange = (key: string, value: string) => {
        setFormData((prevData) => ({
            ...prevData,
            [key]: value,
            address: `${houseNumber}, ${wards.join(', ')}, ${districts.join(', ')}, ${cities.join(', ')}`,
        }));
    };

    const handleBuyNow = async () => {
        // Logic to handle the "Buy Now" action with the form data


        formData.address = `${houseNumber}, ${ward}, ${district}, ${city}`;
        formData.sex = gender;
        formData.methodPay = methodPay; console.log('Buy Now clicked:', formData);
        formData.typeSim = data.type;
        setIsLoading(true)
        try {
            const res = await request.post(`https://${BASE_API}/sims/${data.id}/buy`, formData);
            if (res.data) {
                message.success("Đặt sim thành công")}
        } catch (err) {
            console.log(err);
            message.success("Đặt sim thất bại")
        }
        setIsLoading(false)
    };
    return (
        <div style={{ margin: '8px 0 8px 8px', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
            <div className="section-item__title">
                <Title level={3}>THÔNG TIN KHÁCH HÀNG</Title>
            </div>
            <Divider />
            <Form
                name="order"
                layout="vertical"
                style={{ backgroundColor: '#fff',padding: "20px" , borderRadius: '5px'}}

            >
                <div className = "p-4">
                    <Radio.Group className="mb-2" onChange={onChange} value={gender}>
                        <Radio value="Anh">Anh</Radio>
                        <Radio value="Chị">Chị</Radio>
                    </Radio.Group>


                    <div className = "flex flex-col md:flex-row gap-2">
                    <Input
                        placeholder="Họ và Tên *"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className="form-control mb-3"
                    />
                    <Input
                        placeholder="Số điện thoại *"
                        value={formData.numberCustomer}
                        onChange={(e) => handleInputChange('numberCustomer', e.target.value)}
                        className="form-control mb-3"
                    />
                </div>
                <Form.Item label="Địa chỉ">
                    <div className = "flex flex-col md:flex-row items-center gap-2">
                        <Select
                            className="form-select form-select-sm mb-3 custom-select"
                            defaultValue=""
                            onSelect={handleCityChange}
                        >
                            <Option value="" disabled>
                                Chọn tỉnh thành
                            </Option>
                            {cities.map(city => (
                                <Option key={city.Id} value={city.Id}>
                                    {city.Name}
                                </Option>
                            ))}
                        </Select>

                        <Select
                            className="form-select form-select-sm mb-3 custom-select"
                            defaultValue=""
                            onChange={handleDistrictChange}
                        >
                            <Option value="" disabled>
                                Chọn quận huyện
                            </Option>
                            {districts.map(district => (
                                <Option key={district.Id} value={district.Id}>
                                    {district.Name}
                                </Option>
                            ))}
                        </Select>
                        <Select
                            className="form-select form-select-sm mb-3 custom-select"
                            defaultValue=""
                            onChange={handleWardChange}
                        >
                            <Option value="" disabled>
                                Chọn phường xã
                            </Option>
                            {wards.map(ward => (
                                <Option key={ward.Id} value={ward.Id}>
                                    {ward.Name}
                                </Option>
                            ))}
                        </Select>
                        <Input
                            placeholder="Số nhà chi tiết"
                            value={houseNumber}
                            onChange={(e) => setHouseNumber(e.target.value)}
                            className="form-control mb-3"
                        />
                    </div>
                </Form.Item>
                    <Form.Item label="Phương thức thanh toán">
                        <Radio.Group onChange={(e) => setMethodPay(e.target.value)} value={methodPay}>
                            <Radio value="Tiền mặt">Tiền mặt</Radio>
                            <Radio value="Chuyển khoản">Chuyển Khoản</Radio>
                        </Radio.Group>
                    </Form.Item>

                    <Form.Item label="Số tiền cần thanh toán">
                    <div style={{display:'inline-flex'}} >Tổng tiền: <div className="font-bold text-base pl-2" >{numberWithVND(data.price)}</div></div>
                </Form.Item>

                <Form.Item>
                    {/* Apply additional styles to the Button component */}
                    <Button
                        onClick={handleBuyNow}
                        type='primary'
                        htmlType="submit"
                        style={{
                            width: '100%',
                            height: '50px',
                            fontSize: '16px',
                            backgroundColor: '#1890ff', // Set the background color
                            border: 'none', // Remove border
                        }}
                        // Customize hover effect
                        // You can adjust the color or other properties as needed
                        className="custom-button"
                    >
                        Đặt sim
                    </Button>
                </Form.Item>
                </div>
            </Form>
        </div>
    );
};

export default OrderForm;
