"use client"
import { Menu, Layout, Input, Button } from 'antd';
import Link from 'next/link';
import { SearchOutlined } from '@ant-design/icons';
import { Typography } from 'antd';
import QueueAnim from 'rc-queue-anim';
import "./index.css";
import { Fragment } from 'react';
import Image from 'next/image';

const { Text } = Typography;

const { Header } = Layout;
function HeaderComponent() {
    const handleSearch = (value: string) => {
        console.log('Search value:', value);
    };
    return (
        <>
            <div style={{ width: '100%', position: 'relative', height: '320px', backgroundColor: '#9d2063', display: 'flex', justifyContent: 'center' }}>
                <div style={{ position: 'absolute', width: '100%', height: '100%' }}>
                    <Image
                        src="/background.jpg"
                        alt="Your image description"
                        layout="fill"
                    />
                </div>
            </div>
            <Header style={{ padding: 0, height: '88px', width: '100%' }}>
                <div className="header__main">
                    <Header style={{ height: '44px', display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', width: '100%', backgroundColor: 'black' }}>

                        <div style={{ display: 'flex', width: '500px', height: '32px', marginLeft: '8px' }}>
                            <Link className="logo" href="/">
                                <img src="https://cdn.sims.vn/khosim/upload/files/logo.png" alt="logo" width="139" height="36" />
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
                    <div className="container" style={{ height: '40px' }}>
                        <div className="row" style={{}} >
                            <Menu mode="horizontal" style={{ padding: '0 0', height: '44px', backgroundColor: 'rgb(254,209,0)', display: 'flex', alignItems: 'center', width: '100%' }}>
                                <Menu.Item key="home" style={{ marginLeft: '30vh', lineHeight: '43px' }}>
                                    <Link href="/" style={{ fontWeight: 'bold', fontSize: '16px' }}>TRANG CHỦ</Link>
                                </Menu.Item>
                                <Menu.Item key="upsim" style={{ lineHeight: '43px' }}>
                                    <Link href="/upsim" style={{ fontWeight: 'bold', fontSize: '16px' }}>UP SIM</Link>
                                </Menu.Item>
                                <Menu.Item key="lienhe" style={{ lineHeight: '43px' }}>
                                    <Link href="/lienhe" style={{ fontWeight: 'bold', fontSize: '16px' }}>LIÊN HỆ</Link>
                                </Menu.Item>
                                <Menu.Item key="chuchay" style={{ lineHeight: '43px', border: 'none', width: '1000px' }} className='modified-item'>
                                    <QueueAnim>
                                        <div key="text" style={{ width: '50%' }} >
                                            <p className="continuous-text" style={{ color: 'red', fontWeight: 'bold', fontSize: '16px' }}>SIM RẺ - SIM ĐẸP - SIM SIÊU ĐẸP</p>
                                        </div>
                                    </QueueAnim>
                                </Menu.Item>
                            </Menu>
                        </div>
                    </div >
                </div >
            </Header >
        </>
    )
}
export default HeaderComponent;