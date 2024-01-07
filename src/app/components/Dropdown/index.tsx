import { Input, Select } from 'antd';
import React, { useState } from 'react';
const { Option } = Select;
const DropdownFilter = () => {
    const [selectedNetwork, setSelectedNetwork] = useState(null);
    const [selectedPrefix, setSelectedPrefix] = useState(null);
    const [selectedPriceRange, setSelectedPriceRange] = useState(null);
    const [selectedAvoids, setSelectedAvoids] = useState(null);
    const [pointValue, setPointValue] = useState('');
    const [sumValue, setSumValue] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    const networks = [
        { id: 1, title: 'Viettel' },
        { id: 2, title: 'Mobifone' },
        { id: 3, title: 'Vinaphone' },
        // Add more network options
    ];

    const prefixes = [
        { id: '09', title: '09' },
        { id: '08', title: '08' },
        { id: '07', title: '07' },
        // Add more prefix options
    ];

    const priceRanges = [
        { id: '0-500', title: 'Dưới 500 nghìn' },
        { id: '500-1000', title: 'Từ 500 - 1 triệu' },
        // Add more price range options
    ];

    const avoids = [
        { id: 0, title: '0' },
        { id: 1, title: '1' },
        { id: 2, title: '2' },
        // Add more avoids options
    ];

    const handleNetworkSelect = (network: any) => {
        setSelectedNetwork(network);
        // Perform actions based on the selected network
        console.log('Selected network:', network);
    };

    const handlePrefixSelect = (prefix: any) => {
        setSelectedPrefix(prefix);
        // Perform actions based on the selected prefix
        console.log('Selected prefix:', prefix);
    };

    const handlePriceRangeSelect = (range: any) => {
        setSelectedPriceRange(range);
        // Perform actions based on the selected price range
        console.log('Selected price range:', range);
    };

    const handleAvoidsSelect = (avoid: any) => {
        setSelectedAvoids(avoid);
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

    return (
        <div className="flex flex-row space-x-5 p-4 border border-gray-200 rounded">
            <div className="flex flex-col w-1/4">
                <Select
                    className="w-full"
                    value={selectedNetwork}
                    onChange={handleNetworkSelect}
                    placeholder="Chọn nhà mạng"
                >
                    {networks.map((network) => (
                        <Option key={network.id} value={network.id}>
                            {network.title}
                        </Option>
                    ))}
                </Select>
            </div>
            <div className="flex flex-col w-1/4">
                <Select
                    className="w-full"
                    value={selectedPrefix}
                    onChange={handlePrefixSelect}
                    placeholder="Đầu số"
                >
                    {prefixes.map((prefix) => (
                        <Option key={prefix.id} value={prefix.id}>
                            {prefix.title}
                        </Option>
                    ))}
                </Select>
            </div>
            <div className="flex flex-col w-1/4">
                <Select
                    className="w-full"
                    value={selectedPriceRange}
                    onChange={handlePriceRangeSelect}
                    placeholder="Sim theo giá"
                >
                    {priceRanges.map((range) => (
                        <Option key={range.id} value={range.id}>
                            {range.title}
                        </Option>
                    ))}
                </Select>
                <div className="container filter-item__content by-custom-price text-center">
                    {/* Custom price range inputs */}
                </div>
            </div>
            <div className="flex flex-col w-1/4">
                <Select
                    className="w-full"
                    value={selectedAvoids}
                    onChange={handleAvoidsSelect}
                    placeholder="Số tránh"
                >
                    {avoids.map((avoid) => (
                        <Option key={avoid.id} value={avoid.id}>
                            {avoid.title}
                        </Option>
                    ))}
                </Select>
            </div>

            {/* <div className="flex flex-col w-1/4">
                <p className="text-lg font-semibold">Điểm & nút</p>
                <div className="flex flex-row space-x-4">
                    <Input
                        className="w-1/8"
                        type="number"
                        min={0}
                        max={80}
                        value={pointValue}
                        onChange={handlePointChange}
                        placeholder="Tổng điểm: < 81"
                    />
                    <Input
                        className="w-1/8"
                        type="number"
                        min={1}
                        max={10}
                        value={sumValue}
                        onChange={handleSumChange}
                        placeholder="Tổng nút: 1-10"
                    />
                </div>
            </div> */}
        </div>
    );
};

export default DropdownFilter;
