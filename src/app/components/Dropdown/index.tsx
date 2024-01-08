"use client"
import React, { useState } from 'react';
import { Select, Input, Dropdown, Button, Menu, Modal } from 'antd';
import { SearchOutlined, CloseCircleOutlined, DownOutlined, FilterOutlined } from '@ant-design/icons';

const { Option } = Select;
const DropdownFilter = () => {
    const [selectedNetworks, setSelectedNetworks] = useState([]);
    const [selectedPrefixes, setSelectedPrefixes] = useState([]);
    const [selectedPriceRanges, setSelectedPriceRanges] = useState([]);
    const [selectedAvoids, setSelectedAvoids] = useState([]);
    const [selectedSims, setSelectedSims] = useState([]);
    const [pointValue, setPointValue] = useState('');
    const [sumValue, setSumValue] = useState('');
    const [isModalVisible, setIsModalVisible] = useState(false);

    const networks = [
        { id: '1', title: 'Viettel' },
        { id: '2', title: 'Mobifone' },
        { id: '3', title: 'Vinaphone' },
        { id: '4', title: 'Vietnamobile' },
        { id: '5', title: 'Gmobile' },
        { id: '6', title: 'iTelecom' },
        { id: '7', title: 'Wintel' },
    ];

    const prefixes = [
        { id: '09', title: '09' },
        { id: '08', title: '08' },
        { id: '07', title: '07' },
        { id: '05', title: '05' },
        { id: '03', title: '03' },
        { id: '02', title: '02' },
    ];

    const priceRanges = [
        { id: '0-500', title: 'Dưới 500 nghìn' },
        { id: '500-1000', title: 'Từ 500 - 1 triệu' },
        { id: '1000-3000', title: 'Từ 1 - 3 triệu' },
        { id: '3000-5000', title: 'Từ 3 - 5 triệu' },
        { id: '5000-10000', title: 'Từ 5 - 10 triệu' },
        { id: '10000-50000', title: 'Từ 10 - 50 triệu' },
        { id: '50000-100000', title: 'Từ 50 - 100 triệu' },
        { id: '100000-200000', title: 'Từ 100 - 200 triệu' },
        { id: '200000-500000', title: 'Từ 200 - 500 triệu' },
        { id: '500000-0', title: 'Trên 500 triệu' },
    ];

    const sims = [
        { id: '16', title: 'Sim Lục Quý' },
        { id: '17', title: 'Sim Ngũ Quý' },
        { id: '53', title: 'Sim Tứ Quý' },
        { id: '19', title: 'Sim Tam Hoa Kép' },
        { id: '30', title: 'Sim Lục Quý Giữa' },
        { id: '31', title: 'Sim Ngũ Quý Giữa' },
    ];

    const avoids = [
        { id: '0', title: '0' },
        { id: '1', title: '1' },
        { id: '2', title: '2' },
        { id: '3', title: '3' },
        { id: '4', title: '4' },
        { id: '5', title: '5' },
        { id: '6', title: '6' },
        { id: '7', title: '7' },
        { id: '8', title: '8' },
        { id: '9', title: '9' },
        { id: '49', title: '49' },
        { id: '53', title: '53' },
    ];

    const handleNetworkSelect = (network: any) => {
        setSelectedNetworks(network);
        // Perform actions based on the selected network
        console.log('Selected network:', network);
    };

    const handlePrefixSelect = (prefix: any) => {
        setSelectedPrefixes(prefix);
        // Perform actions based on the selected prefix
        console.log('Selected prefix:', prefix);
    };

    const handlePriceRangeSelect = (range: any) => {
        setSelectedPriceRanges(range);
        // Perform actions based on the selected price range
        console.log('Selected price range:', range);
    };

    const handleAvoidsSelect = (avoid: any) => {
        setSelectedAvoids(avoid);
        // Perform actions based on the selected avoids
        console.log('Selected avoids:', avoid);
    };

    const handleSimsSelect = (avoid: any) => {
        setSelectedSims(avoid);
        // Perform actions based on the selected avoids
        console.log('Selected avoids:', avoid);
    };

    const handlePointChange = (event: any) => {
        setPointValue(event.target.value);
        // Perform actions based on the point value
        console.log('Point value:', event.target.value);
    };

    const handleSumChange = (event: any) => {
        setSumValue(event.target.value);
        // Perform actions based on the sum value
        console.log('Sum value:', event.target.value);
    };

    const handleSearch = () => {
        // Handle search logic
    };

    const handleClear = () => {
        setSelectedNetworks([]);
        setSelectedPrefixes([]);
        setSelectedPriceRanges([]);
        setSelectedAvoids([]);
        setSelectedSims([]);
        setPointValue('');
        setSumValue('');
    };

    // Hàm xử lý hiển thị form
    const showModal = () => {
        setIsModalVisible(true);
    };

    // Hàm xử lý ẩn form
    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const menu = (
        <Menu style={{
            overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'
        }}>
            <div className="w-full p-4" >
                <p>Chọn nhà mạng</p>
                <div className="mb-4">
                    <Select
                        style={{ width: '100%', maxWidth: '200px', overflowX: 'auto' }}
                        value={selectedNetworks}
                        onChange={setSelectedNetworks}
                        mode="multiple"
                        placeholder="Chọn nhà mạng"
                    >
                        {networks.map((network) => (
                            <Option key={network.id} value={network.id}>
                                {network.title}
                            </Option>
                        ))}
                    </Select>
                </div>
                <hr />
                <p>Sim theo giá</p>
                <div className="mb-4">
                    <Select
                        style={{ width: '100%' }}
                        value={selectedPriceRanges}
                        onChange={setSelectedPriceRanges}
                        mode="multiple"
                        placeholder="Sim theo giá"
                    >
                        {priceRanges.map((range) => (
                            <Option key={range.id} value={range.id}>
                                {range.title}
                            </Option>
                        ))}
                    </Select>
                </div>
                <hr />

                <p>Loại Sim</p>
                <div className="mb-4">
                    <Select
                        style={{ width: '100%' }}
                        value={selectedSims}
                        onChange={setSelectedSims}
                        mode="multiple"
                        placeholder="Loại Sim"
                    >
                        {sims.map((sim) => (
                            <Option key={sim.id} value={sim.id}>
                                {sim.title}
                            </Option>
                        ))}
                    </Select>
                </div>
                <hr />
                <p>Đầu số</p>
                <div className="mb-4">
                    <Select
                        style={{ width: '100%' }}
                        value={selectedPrefixes}
                        onChange={setSelectedPrefixes}
                        mode="multiple"
                        placeholder="Đầu số"
                    >
                        {prefixes.map((prefix) => (
                            <Option key={prefix.id} value={prefix.id}>
                                {prefix.title}
                            </Option>
                        ))}
                    </Select>
                </div>
                <hr />
                <p>Số tránh</p>
                <div className="mb-4">
                    <Select
                        style={{ width: '100%' }}
                        value={selectedAvoids}
                        onChange={handleAvoidsSelect}
                        mode="multiple"
                        placeholder="Số tránh"
                    >
                        {avoids.map((avoid) => (
                            <Option key={avoid.id} value={avoid.id}>
                                {avoid.title}
                            </Option>
                        ))}
                    </Select>
                </div>
                <hr />
                <p>Điểm & nút</p>
                <div style={{ display: 'flex' }}>
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
                {/* Buttons */}
                <div className="mt-4 flex justify-between">
                    <Button type="primary" icon={<SearchOutlined />} onClick={handleSearch}>
                        Xem kết quả
                    </Button>
                    <Button onClick={handleClear}>
                        <CloseCircleOutlined /> Bỏ chọn
                    </Button>
                </div>
            </div>
        </Menu >
    );

    return (

        <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#f9f9f9', padding: '8px 8px' }}>
            <Dropdown overlay={menu} trigger={['click']}>
                <Button style={{ backgroundColor: 'rgb(254, 209, 0)' }} onClick={showModal}>
                    <FilterOutlined />BỘ LỌC <DownOutlined />
                </Button>
            </Dropdown>
            <div style={{ width: '100%', display: 'flex', flexDirection: 'row', overflow: 'hidden' }}>
                <div className="mb-4" style={{ width: '20vh', padding: '8px 8px' }}>
                    <Select
                        style={{ width: '100%' }}
                        value={selectedNetworks}
                        onChange={setSelectedNetworks}
                        mode="multiple"
                        placeholder="Nhà mạng"
                    >
                        {networks.map((network) => (
                            <Option key={network.id} value={network.id}>
                                {network.title}
                            </Option>
                        ))}
                    </Select>
                </div>
                <div className="mb-4" style={{ width: '20vh', padding: '8px 8px' }}>
                    <Select
                        style={{ width: '100%' }}
                        value={selectedPriceRanges}
                        onChange={setSelectedPriceRanges}
                        mode="multiple"
                        placeholder="Khoảng giá"
                    >
                        {priceRanges.map((range) => (
                            <Option key={range.id} value={range.id}>
                                {range.title}
                            </Option>
                        ))}
                    </Select>
                </div>
                <div className="mb-4" style={{ width: '20vh', padding: '8px 8px' }}>
                    <Select
                        style={{ width: '100%' }}
                        value={selectedSims}
                        onChange={setSelectedSims}
                        mode="multiple"
                        placeholder="Loại Sim"
                    >
                        {sims.map((sim) => (
                            <Option key={sim.id} value={sim.id}>
                                {sim.title}
                            </Option>
                        ))}
                    </Select>
                </div>
                <div className="mb-4" style={{ width: '20vh', padding: '8px 8px' }}>
                    <Select
                        style={{ width: '100%' }}
                        value={selectedPrefixes}
                        onChange={setSelectedPrefixes}
                        mode="multiple"
                        placeholder="Đầu số"
                    >
                        {prefixes.map((prefix) => (
                            <Option key={prefix.id} value={prefix.id}>
                                {prefix.title}
                            </Option>
                        ))}
                    </Select>
                </div>
                <div className="mb-4" style={{ width: '20vh', padding: '8px 8px' }}>
                    <Select
                        style={{ width: '100%' }}
                        value={selectedAvoids}
                        onChange={handleAvoidsSelect}
                        mode="multiple"
                        placeholder="Tránh số"
                    >
                        {avoids.map((avoid) => (
                            <Option key={avoid.id} value={avoid.id}>
                                {avoid.title}
                            </Option>
                        ))}
                    </Select>
                </div>
                <div className="mb-4" style={{ width: '20vh', padding: '8px 8px' }}>

                    <Input
                        type="number"
                        min={0}
                        max={80}
                        value={pointValue}
                        onChange={handlePointChange}
                        placeholder="Tổng điểm: ..."
                    />

                </div>
                <div style={{ width: '20vh', padding: '8px 8px' }}>
                    <Input
                        className="w-1/2"
                        type="number"
                        min={1}
                        max={10}
                        value={sumValue}
                        onChange={handleSumChange}
                        placeholder="Tổng nút: ..."
                    />
                </div>
            </div>
        </div>
    );
};

export default DropdownFilter;
