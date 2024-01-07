"use client"
import { Menu, Layout } from 'antd';
import Link from 'next/link';
import { useState } from 'react';
import DropdownFilter from '../Dropdown';
const { Header } = Layout;
function HeaderComponent() {
    return (
        <Header style={{ padding: 0, height: 'auto' }}>
            <div className="header__main">
                <div className="container">
                    <div className="row" >
                        <Menu mode="horizontal" style={{ padding: '0 0', height: '60px', backgroundColor: 'rgb(254,209,0)' }}>
                            <Menu.Item key="home">
                                <Link href="/" style={{ fontWeight: 'bold', fontSize: '16px' }}>TRANG CHỦ</Link>
                            </Menu.Item>
                            <Menu.Item key="upsim" style={{ fontWeight: 'bold', fontSize: '16px' }}>
                                <Link href="/upsim">UP SIM</Link>
                            </Menu.Item>
                            <Menu.Item key="duyetsim" style={{ fontWeight: 'bold', fontSize: '16px' }}>
                                <Link href="/duyetsim">DUYỆT SIM</Link>
                            </Menu.Item>
                            <Menu.Item key="lienhe" style={{ fontWeight: 'bold', fontSize: '16px' }}>
                                <Link href="/lienhe">LIÊN HỆ</Link>
                            </Menu.Item>
                        </Menu>
                    </div>
                    <DropdownFilter />
                </div>
            </div>
        </Header>
    )
}
export default HeaderComponent;