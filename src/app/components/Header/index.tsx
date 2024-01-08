"use client"
import { Menu, Layout, Input, Button } from 'antd';
import Link from 'next/link';
import { SearchOutlined } from '@ant-design/icons';
const { Header } = Layout;
function HeaderComponent() {
    const handleSearch = (value: string) => {
        console.log('Search value:', value);
    };
    return (
        <Header style={{ padding: 0, height: '88px', width: '100rem' }}>
            <div className="header__main">
                <Header style={{ height: '44px', display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', width: '100rem', backgroundColor: 'black' }}>

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
                        <Menu mode="horizontal" style={{ padding: '0 0', height: '44px', backgroundColor: 'rgb(254,209,0)', display: 'flex', alignItems: 'center', width: '100rem' }}>
                            <Menu.Item key="home" style={{ marginLeft: '30vh', lineHeight: '43px' }}>
                                <Link href="/" style={{ fontWeight: 'bold', fontSize: '16px' }}>TRANG CHỦ</Link>
                            </Menu.Item>
                            <Menu.Item key="upsim" style={{ lineHeight: '43px' }}>
                                <Link href="/upsim" style={{ fontWeight: 'bold', fontSize: '16px' }}>UP SIM</Link>
                            </Menu.Item>
                            <Menu.Item key="lienhe" style={{ lineHeight: '43px' }}>
                                <Link href="/lienhe" style={{ fontWeight: 'bold', fontSize: '16px' }}>LIÊN HỆ</Link>
                            </Menu.Item>
                        </Menu>
                    </div>
                </div>
            </div >
        </Header >
    )
}
export default HeaderComponent;