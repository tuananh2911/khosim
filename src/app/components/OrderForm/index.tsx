"use client"
import React, { useState, useEffect, ChangeEvent } from 'react';
import axios from 'axios';
import { Form, Input, Button, Radio, type RadioChangeEvent } from 'antd';
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

const OrderForm: React.FC = () => {
    const [cities, setCities] = useState<City[]>([]);
    const [districts, setDistricts] = useState<District[]>([]);
    const [wards, setWards] = useState<Ward[]>([]);
    const [gender, setGender] = useState('Anh');
    const [formData, setFormData] = useState({
        name: '', // name input
        phoneNumber: '', // phone number input
        address: '', // address input
        paymentMethod: '', // payment method selection
        totalAmount: 0, // total amount to display
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

    const handleCityChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const selectedCityId = e.target.value;
        const selectedCity = cities.find(city => city.Id === selectedCityId);

        if (selectedCity) {
            setDistricts(selectedCity.Districts || []);
            setWards([]); // Reset danh sách phường/xã khi chọn lại tỉnh/thành phố
        }
    };

    const handleDistrictChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const selectedDistrictId = e.target.value;
        const selectedDistrict = districts.find(district => district.Id === selectedDistrictId);

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
        <div>
            <br />
            

            <Form
                name="order"
                layout="vertical"
                style={{ width: '1000px', backgroundColor: '#fff', padding: '20px', borderRadius: '5px' }}
            >
                <Form.Item label="Họ và tên">
                <Radio.Group>
                        <Radio value="cash">Anh</Radio>
                        <Radio value="card">Chị</Radio>
                    </Radio.Group>
                </Form.Item>
                <Form.Item label="Họ và tên">
                    <Input placeholder="Nhập họ và tên" />
                </Form.Item>
                <Form.Item label="Số điện thoại">
                    <Input placeholder="Nhập số điện thoại" />
                </Form.Item>
                <Form.Item label="Địa chỉ">
                    <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                        <select
                            className="form-select form-select-sm mb-3 custom-select"
                            id="city"
                            aria-label=".form-select-sm"
                            onChange={handleCityChange}
                        >
                            <option value="" disabled selected>
                                Chọn tỉnh thành
                            </option>
                            {cities.map(city => (
                                <option key={city.Id} value={city.Id}>
                                    {city.Name}
                                </option>
                            ))}
                        </select>

                        <select
                            className="form-select form-select-sm mb-3 custom-select"
                            id="district"
                            aria-label=".form-select-sm"
                            onChange={handleDistrictChange}
                        >
                            <option value="" disabled selected>
                                Chọn quận huyện
                            </option>
                            {districts.map(district => (
                                <option key={district.Id} value={district.Id}>
                                    {district.Name}
                                </option>
                            ))}
                        </select>

                        <select
                            className="form-select form-select-sm custom-select"
                            id="ward"
                            aria-label=".form-select-sm"
                        >
                            <option value="" disabled selected>
                                Chọn phường xã
                            </option>
                            {wards.map(ward => (
                                <option key={ward.Id} value={ward.Id}>
                                    {ward.Name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <Input placeholder="Nhập địa chỉ" />
                </Form.Item>
                <Form.Item label="Phương thức thanh toán">
                    <Radio.Group>
                        <Radio value="cash">Tiền mặt</Radio>
                        <Radio value="card">Thẻ</Radio>
                    </Radio.Group>
                </Form.Item>
                <Form.Item label="Phương thức thanh toán">
                    <p>Tổng tiền: {formData.totalAmount}</p>
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
            </Form>
        </div>
    );
};

export default OrderForm;
