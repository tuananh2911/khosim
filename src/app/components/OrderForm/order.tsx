// "use client"
// import React, { useState, useEffect, ChangeEvent } from 'react';
// import axios from 'axios';
// import { Input, Radio, type RadioChangeEvent } from 'antd';
// import { Typography, Divider, Tag } from 'antd';
// import Link from 'next/link';

// const { Title, Paragraph, Text } = Typography;
// interface City {
//     Id: string;
//     Name: string;
//     Districts: District[];
// }

// interface District {
//     Id: string;
//     Name: string;
//     Wards: Ward[];
// }

// interface Ward {
//     Id: string;
//     Name: string;
// }
// const plainOptions = ['Anh', 'Chị'];

// const OrderForm: React.FC = () => {
//     const [cities, setCities] = useState<City[]>([]);
//     const [districts, setDistricts] = useState<District[]>([]);
//     const [wards, setWards] = useState<Ward[]>([]);
//     const [gender, setGender] = useState('Anh');
//     const [formData, setFormData] = useState({
//         name: '', // name input
//         phoneNumber: '', // phone number input
//         address: '', // address input
//         paymentMethod: '', // payment method selection
//         totalAmount: 0, // total amount to display
//     });
//     const onChange = ({ target: { value } }: RadioChangeEvent) => {
//         setGender(value);
//     };
//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await axios.get<City[]>('https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json');
//                 setCities(response.data);
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//             }
//         };

//         fetchData();
//     }, []);

//     const handleCityChange = (e: ChangeEvent<HTMLSelectElement>) => {
//         const selectedCityId = e.target.value;
//         const selectedCity = cities.find(city => city.Id === selectedCityId);

//         if (selectedCity) {
//             setDistricts(selectedCity.Districts || []);
//             setWards([]); // Reset danh sách phường/xã khi chọn lại tỉnh/thành phố
//         }
//     };

//     const handleDistrictChange = (e: ChangeEvent<HTMLSelectElement>) => {
//         const selectedDistrictId = e.target.value;
//         const selectedDistrict = districts.find(district => district.Id === selectedDistrictId);

//         if (selectedDistrict) {
//             setWards(selectedDistrict.Wards || []);
//         }
//     };
//     const handleInputChange = (key: string, value: string) => {
//         setFormData({
//             ...formData,
//             [key]: value,
//         });
//     };

//     const handleBuyNow = () => {
//         // Logic to handle the "Buy Now" action with the form data
//         console.log('Buy Now clicked:', formData);
//         // Add logic to process the purchase or perform necessary actions
//     };
//     return (
//         <div style={{ margin: '8px 0 8px 8px', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
//             <div className="section-item__title">
//                 <Title level={3}>THÔNG TIN KHÁCH HÀNG</Title>
//             </div>
//             <Divider />
//             <div>
//                 <Radio.Group options={plainOptions} onChange={onChange} value={gender} />
//                 <br />
//                 <div style={{ display: 'flex' }}>
//                     <Input
//                         placeholder="Họ và Tên *"
//                         value={formData.name}
//                         onChange={(e) => handleInputChange('name', e.target.value)}
//                         className="form-control mb-3"
//                     />
//                     <Input
//                         placeholder="Số điện thoại *"
//                         value={formData.phoneNumber}
//                         onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
//                         className="form-control mb-3"
//                     />
//                 </div>
//                 <div style={{ display: 'flex', flexDirection: 'column' }}>
//                     <div className="section-item__title">
//                         <Title level={4}>CHỌN ĐỊA CHỈ NHẬN HÀNG</Title>
//                     </div>
//                     <div style={{ display: 'flex' }}>
//                         <select className="form-select form-select-sm mb-3" id="city" aria-label=".form-select-sm" onChange={handleCityChange}>
//                             <option value="" selected>Chọn tỉnh thành</option>
//                             {cities.map(city => (
//                                 <option key={city.Id} value={city.Id}>{city.Name}</option>
//                             ))}
//                         </select>

//                         <select className="form-select form-select-sm mb-3" id="district" aria-label=".form-select-sm" onChange={handleDistrictChange}>
//                             <option value="" selected>Chọn quận huyện</option>
//                             {districts.map(district => (
//                                 <option key={district.Id} value={district.Id}>{district.Name}</option>
//                             ))}
//                         </select>

//                         <select className="form-select form-select-sm" id="ward" aria-label=".form-select-sm">
//                             <option value="" selected>Chọn phường xã</option>
//                             {wards.map(ward => (
//                                 <option key={ward.Id} value={ward.Id}>{ward.Name}</option>
//                             ))}
//                         </select>
//                     </div>
//                 </div>
//                 <select value={formData.paymentMethod} onChange={(e) => handleInputChange('paymentMethod', e.target.value)} className="form-select form-select-sm mb-3">
//                     <option value="">Chọn phương thức thanh toán</option>
//                     <option value="cash">Tiền mặt</option>
//                     <option value="card">Thẻ thanh toán</option>
//                     {/* Add more options if needed */}
//                 </select>

//                 <p>Tổng tiền: {formData.totalAmount}</p>

//                 {/* Buy Now button */}
//                 <button onClick={handleBuyNow} className="btn btn-primary">Mua Ngay</button>
//             </div>
//         </div >
//     );
// };

// export default OrderForm;
