"use client"
import React, { useState, useEffect, ChangeEvent } from 'react';
import axios from 'axios';
import { Radio, type RadioChangeEvent } from 'antd';
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

            <Radio.Group options={plainOptions} onChange={onChange} value={gender} />
            <br />

            <input type="text" placeholder="Nhập tên" value={formData.name} onChange={(e) => handleInputChange('name', e.target.value)} className="form-control mb-3" />
            <input type="text" placeholder="Nhập số điện thoại" value={formData.phoneNumber} onChange={(e) => handleInputChange('phoneNumber', e.target.value)} className="form-control mb-3" />
            <select className="form-select form-select-sm mb-3" id="city" aria-label=".form-select-sm" onChange={handleCityChange}>
                <option value="" selected>Chọn tỉnh thành</option>
                {cities.map(city => (
                    <option key={city.Id} value={city.Id}>{city.Name}</option>
                ))}
            </select>

            <select className="form-select form-select-sm mb-3" id="district" aria-label=".form-select-sm" onChange={handleDistrictChange}>
                <option value="" selected>Chọn quận huyện</option>
                {districts.map(district => (
                    <option key={district.Id} value={district.Id}>{district.Name}</option>
                ))}
            </select>

            <select className="form-select form-select-sm" id="ward" aria-label=".form-select-sm">
                <option value="" selected>Chọn phường xã</option>
                {wards.map(ward => (
                    <option key={ward.Id} value={ward.Id}>{ward.Name}</option>
                ))}
            </select>

            <select value={formData.paymentMethod} onChange={(e) => handleInputChange('paymentMethod', e.target.value)} className="form-select form-select-sm mb-3">
                <option value="">Chọn phương thức thanh toán</option>
                <option value="cash">Tiền mặt</option>
                <option value="card">Thẻ thanh toán</option>
                {/* Add more options if needed */}
            </select>

            <p>Tổng tiền: {formData.totalAmount}</p>

            {/* Buy Now button */}
            <button onClick={handleBuyNow} className="btn btn-primary">Mua Ngay</button>
        </div>
    );
};

export default OrderForm;
