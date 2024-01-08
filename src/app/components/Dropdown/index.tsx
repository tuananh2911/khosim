"use client"
import React, { useState } from 'react';
import { Select, Input, Dropdown, Button, Menu, Modal } from 'antd';
import { Space } from 'antd';
import { SearchOutlined, CloseCircleOutlined, DownOutlined, FilterOutlined } from '@ant-design/icons';
import type { SelectProps } from 'antd';
import "./index.css";

const DropdownFilter = () => {
    const [pointValue, setPointValue] = useState<number | ''>('');
    const [sumValue, setSumValue] = useState<number | ''>('');
    const [modalVisible, setModalVisible] = useState(false);

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

    const [value, setValue] = useState<string[]>([]);
    const [value2, setValue2] = useState<string[]>([]);
    const [value3, setValue3] = useState<string[]>([]);
    const [value4, setValue4] = useState<string[]>([]);
    const [value5, setValue5] = useState<string[]>([]);

    const selectProps: SelectProps<string[]> = {
        mode: 'multiple',
        style: { width: '100%' },
        value: value,
        options: networksOptions,
        onChange: (newValue: string[]) => {
            setValue(newValue);
        },
        placeholder: 'Nhà mạng',
        maxTagCount: 'responsive',
        dropdownRender: (menu) => renderDropdown(menu, handleClear1),
    };
    const selectProps2: SelectProps<string[]> = {
        mode: 'multiple',
        style: { width: '100%' },
        value: value2,
        options: priceRangesOptions,
        onChange: (newValue: string[]) => {
            setValue2(newValue);
        },
        placeholder: 'Khoảng giá',
        maxTagCount: 'responsive',
        dropdownRender: (menu) => renderDropdown(menu, handleClear2),
    };
    const selectProps3: SelectProps<string[]> = {
        mode: 'multiple',
        style: { width: '100%' },
        value: value3,
        options: simsOptions,
        onChange: (newValue: string[]) => {
            setValue3(newValue);
        },
        placeholder: 'Loại Sim',
        maxTagCount: 'responsive',
        dropdownRender: (menu) => renderDropdown(menu, handleClear3),
    };
    const selectProps4: SelectProps<string[]> = {
        mode: 'multiple',
        style: { width: '100%' },
        value: value4,
        options: prefixesOptions,
        onChange: (newValue: string[]) => {
            setValue4(newValue);
        },
        placeholder: 'Đầu số',
        maxTagCount: 'responsive',
        dropdownRender: (menu) => renderDropdown(menu, handleClear4),
    };
    const selectProps5: SelectProps<string[]> = {
        mode: 'multiple',
        style: { width: '100%' },
        value: value5,
        options: avoidsOptions,
        onChange: (newValue: string[]) => {
            setValue5(newValue);
        },
        placeholder: 'Tránh số',
        maxTagCount: 'responsive',
        dropdownRender: (menu) => renderDropdown(menu, handleClear5),
    };

    const handlePointChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        if (value === '' || (parseInt(value) >= 0 && parseInt(value) <= 80)) {
            setPointValue(value === '' ? '' : parseInt(value));
        }
    };

    const handleSumChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        if (value === '' || (parseInt(value) >= 1 && parseInt(value) <= 10)) {
            setSumValue(value === '' ? '' : parseInt(value));
        }
    };

    const handleSearch = () => {
        // Handle search logic
    };

    const handleClear = () => {
        setValue([]);
        setValue2([]);
        setValue3([]);
        setValue4([]);
        setValue5([]);
        setPointValue('');
        setSumValue('');
    };

    const handleClear1 = () => {
        setValue([]);
    }
    const handleClear2 = () => {
        setValue2([]);
    }
    const handleClear3 = () => {
        setValue3([]);
    }
    const handleClear4 = () => {
        setValue4([]);
    }
    const handleClear5 = () => {
        setValue5([]);
    }
    const handleClearPoint = () => {
        setPointValue('');
    }
    const handleClearSum = () => {
        setSumValue('');
    }

    const renderDropdown = (menu: React.ReactNode, clearFunction: () => void) => (
        <div>
            {menu}
            <div className="mt-4" style={{ display: 'flex', flexDirection: 'column' }}>
                <Button type="primary" icon={<SearchOutlined />} onClick={handleSearch}>
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
            <div style={{ padding: '8px', display: 'flex', flexDirection: 'column' }}>
                <Input
                    type="number"
                    min={0}
                    max={80}
                    onChange={handlePointChange}
                    placeholder="Tổng điểm: <81"
                    style={{ width: '200px', marginRight: '8px' }}
                />
                <div>
                    <Button type="primary" onClick={handleSearch} style={{ marginRight: '8px' }}>
                        Xem kết quả
                    </Button>
                    <Button onClick={handleClearPoint}>
                        Bỏ chọn
                    </Button>
                </div>
            </div>
        </Menu>
    );
    const dropdown2 = (
        <Menu>
            <div style={{ padding: '8px', display: 'flex', flexDirection: 'column' }}>
                <Input
                    type="number"
                    min={0}
                    max={80}
                    onChange={handleSumChange}
                    placeholder="Tổng nút: 1-10"
                    style={{ width: '200px', marginRight: '8px' }}
                />
                <div>
                    <Button type="primary" onClick={handleSearch} style={{ marginRight: '8px' }}>
                        Xem kết quả
                    </Button>
                    <Button onClick={handleClearSum}>
                        Bỏ chọn
                    </Button>
                </div>
            </div>
        </Menu>
    );

    const menu = (
        <Menu style={{
            overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'
        }}>
            <div className="w-full p-4" >
                <p>Chọn nhà mạng</p>
                <div className="mb-4" >
                    <Space direction="vertical" style={{ width: '20vh' }}>
                        <Select {...selectProps} />
                    </Space>
                </div>
                <hr />
                <p>Sim theo giá</p>
                <div className="mb-4">
                    <Space direction="vertical" style={{ width: '20vh' }}>
                        <Select {...selectProps2} />
                    </Space>
                </div>
                <hr />
                <p>Loại Sim</p>
                <div className="mb-4">
                    <Space direction="vertical" style={{ width: '20vh' }}>
                        <Select {...selectProps3} />
                    </Space>
                </div>
                <hr />
                <p>Đầu số</p>
                <div className="mb-4">
                    <Space direction="vertical" style={{ width: '20vh' }}>
                        <Select {...selectProps4} />
                    </Space>
                </div>
                <hr />
                <p>Tránh số</p>
                <div className="mb-4">
                    <Space direction="vertical" style={{ width: '20vh' }}>
                        <Select {...selectProps5} />
                    </Space>
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
            <Dropdown overlay={menu} trigger={['click']} placement="topLeft">
                <Button style={{ backgroundColor: 'rgb(254, 209, 0)' }} >
                    <FilterOutlined />BỘ LỌC <DownOutlined />
                </Button>
            </Dropdown>
            <div style={{ width: '100%', display: 'flex', flexDirection: 'row' }}>
                <div className="mb-4" style={{ width: '20vh', padding: '8px 8px' }}>
                    <Space direction="vertical" style={{ width: '20vh' }}>
                        <Select {...selectProps} />
                    </Space>
                </div>
                <div className="mb-4" style={{ width: '20vh', padding: '8px 8px' }}>
                    <Space direction="vertical" style={{ width: '20vh' }}>
                        <Select {...selectProps2} />
                    </Space>
                </div>
                <div className="mb-4" style={{ width: '20vh', padding: '8px 8px' }}>
                    <Space direction="vertical" style={{ width: '20vh' }}>
                        <Select {...selectProps3} />
                    </Space>
                </div>
                <div className="mb-4" style={{ width: '20vh', padding: '8px 8px' }}>
                    <Space direction="vertical" style={{ width: '20vh' }}>
                        <Select {...selectProps4} />
                    </Space>
                </div>
                <div className="mb-4" style={{ width: '20vh', padding: '8px 8px' }}>
                    <Space direction="vertical" style={{ width: '20vh' }}>
                        <Select {...selectProps5} />
                    </Space>
                </div>
                <div className="mb-4" style={{ width: '20vh', padding: '8px 8px' }}>
                    <Dropdown overlay={dropdown1} trigger={['click']}>
                        <Button style={{ width: '19vh' }}>
                            Tổng điểm
                        </Button>
                    </Dropdown>
                </div>
                <div className="mb-4" style={{ width: '20vh', padding: '8px 8px' }}>
                    <Dropdown overlay={dropdown2} trigger={['click']}>
                        <Button style={{ width: '19vh' }}>
                            Tổng nút
                        </Button>
                    </Dropdown>
                </div>
            </div>
        </div>
    );
};

export default DropdownFilter;
