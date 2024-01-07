"use client"
import { Menu, Layout, Input, Button } from 'antd';
import Link from 'next/link';
import { useState } from 'react';
import DropdownFilter from '../Dropdown';
import { SearchOutlined } from '@ant-design/icons';
const { Header } = Layout;
function HeaderComponent() {
    const handleSearch = (value: string) => {
        // Handle search logic here with the 'value' parameter
        // For example: Fetch data using the input value
        console.log('Search value:', value);
    };
    return (
        <Header style={{ padding: 0, height: 'auto' }}>
            <div className="header__main">
                <Header style={{ height: '38px', display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>

                    <div style={{ display: 'flex', width: '500px', height: '32px', marginLeft: '8px' }}>
                        <Link className="logo" href="/">
                            <img src="https://cdn.sims.vn/khosim/upload/files/logo.png" alt="logo" width="139" height="33" />
                        </Link>
                        <Input.Search
                            placeholder="Nhập số sim cần tìm"
                            enterButton={<Button type="primary" icon={<SearchOutlined />} style={{ backgroundColor: 'rgb(254, 209, 0)' }} />}
                            onSearch={handleSearch}
                        />
                    </div>
                    <nav className="col-right ps-0">
                        <Link href="/login" rel="nofollow" data-relforced="true" style={{ color: 'white', fontSize: '16px' }}>Tài khoản</Link>
                    </nav>
                </Header>
                <div className="container">
                    <div className="row" >
                        <Menu mode="horizontal" style={{ padding: '0 0', height: '60px', backgroundColor: 'rgb(254,209,0)' }}>
                            <Menu.Item key="home">
                                <Link href="/" style={{ fontWeight: 'bold', fontSize: '16px' }}>TRANG CHỦ</Link>
                            </Menu.Item>
                            <Menu.Item key="upsim" style={{ fontWeight: 'bold', fontSize: '16px' }}>
                                <Link href="/upsim">UP SIM</Link>
                            </Menu.Item>
                            <Menu.Item key="lienhe" style={{ fontWeight: 'bold', fontSize: '16px' }}>
                                <Link href="/lienhe">LIÊN HỆ</Link>
                            </Menu.Item>
                        </Menu>
                    </div>
                    <DropdownFilter />
                </div>
            </div >
        </Header >
    )
}
export default HeaderComponent;