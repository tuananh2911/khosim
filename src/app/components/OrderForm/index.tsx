"use client"
import React, { useState, useEffect, ChangeEvent } from 'react';
import axios from 'axios';
import { Form, Input, Button, Radio, type RadioChangeEvent } from 'antd';
import { Typography, Divider, Tag, Select } from 'antd';
import Link from 'next/link';
import numberWithVND from "@/app/utils/numberwithvnd";
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
    const {data} = props
    const [cities, setCities] = useState<City[]>([]);
    const [districts, setDistricts] = useState<District[]>([]);
    const [wards, setWards] = useState<Ward[]>([]);
    const [gender, setGender] = useState('Anh');
    const [houseNumber, setHouseNumber] = useState('');
    const [formData, setFormData] = useState({
        name: '', // name input
        phoneNumber: '', // phone number input
        address: '', // address input
        paymentMethod: '', // payment method selection
        totalAmount: data.price, // total amount to display
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

    // const handleCityChange = (e: ChangeEvent<HTMLSelectElement>) => {
    //     const selectedCityId = e.target.value;
    //     const selectedCity = cities.find(city => city.Id === selectedCityId);

    //     if (selectedCity) {
    //         setDistricts(selectedCity.Districts || []);
    //         setWards([]); // Reset danh sách phường/xã khi chọn lại tỉnh/thành phố
    //     }
    // };
    const handleCityChange = (value: string) => {
        const selectedCity = cities.find(city => city.Id === value);

        if (selectedCity) {
            setDistricts(selectedCity.Districts || []);
            setWards([]); // Reset danh sách phường/xã khi chọn lại tỉnh/thành phố
        }
    };

    const handleDistrictChange = (value: string) => {
        const selectedDistrict = districts.find(district => district.Id === value);

        if (selectedDistrict) {
            setWards(selectedDistrict.Wards || []);
        }
    };

    const handleInputChange = (key: string, value: string) => {
        setFormData({
            ...formData,
            [key]: value,
        });
    };

    const handleBuyNow = () => {
        // Logic to handle the "Buy Now" action with the form data
        console.log('Buy Now clicked:', formData);
        // Add logic to process the purchase or perform necessary actions
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
                <Radio.Group className="mb-2">
                    <Radio value="cash">Anh</Radio>
                    <Radio value="card">Chị</Radio>
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
                        value={formData.phoneNumber}
                        onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                        className="form-control mb-3"
                    />
                </div>
                <Form.Item label="Địa chỉ">
                    <div className = "flex flex-col md:flex-row items-center gap-2">
                    <Input
                                placeholder="Số nhà chi tiết"
                                value={houseNumber}
                                onChange={(e) => setHouseNumber(e.target.value)}
                                className="form-control mb-3"
                            />
                            <Select
                            className="form-select form-select-sm mb-3 custom-select"
                            defaultValue=""
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
                            onChange={handleCityChange}
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
                    </div>
                </Form.Item>
                <Form.Item label="Phương thức thanh toán">
                    <Radio.Group>
                        <Radio value="cash">Tiền mặt</Radio>
                        <Radio value="card">Thẻ</Radio>
                    </Radio.Group>
                </Form.Item>
                <Form.Item label="Số tiền cần thanh toán">
                    <div>Tổng tiền: {numberWithVND(data.price)}</div>
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
                        Đặt hàng
                    </Button>
                </Form.Item>
                </div>
            </Form>
        </div>
    );
};

export default OrderForm;
