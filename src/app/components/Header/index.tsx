"use client";
import {Menu, Layout, Input, Button} from "antd";
import Link from "next/link";
import {SearchOutlined} from "@ant-design/icons";
import {Typography} from "antd";
import QueueAnim from "rc-queue-anim";
import "./index.css";
import {Fragment} from "react";
import Image from "next/image";
import {useInfoUser} from "@/hooks/useInfoUser";

const {Text} = Typography;

const {Header} = Layout;

function HeaderComponent() {
    const handleSearch = (value: string) => {
        console.log("Search value:", value);
    };
    let token ;
    if (typeof window !== 'undefined') {
        // Perform localStorage action
        token = localStorage.getItem('token')
    }
    const {user} = useInfoUser()
    return (
        <>
            <div
                style={{
                    width: "100%",
                    position: "relative",
                    backgroundColor: "#7F2423",
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <div className="container">
                    <Image
                        src="/background.jpg"
                        alt="Your image description"
                        width={1200}
                        height={320}
                        className=""
                    />
                </div>
            </div>
            <Header style={{padding: 0, height: "88px", width: "100%"}}>
                <div className="header__main">
                    <Header
                        style={{
                            height: "44px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-evenly",
                            width: "100%",
                            backgroundColor: "black",
                        }}
                    >
                        <div
                            className="container flex h-8 w-full justify-center"
                        >
                            <Link className="logo" href="/" style={{display: "flex", alignItems: "center"}}>
                                <img
                                    src="/logoHeader.jpg"
                                    alt="logo"
                                    width="139"
                                    height="40"
                                />
                            </Link>
                            <Input.Search
                                className="block w-[250px]"
                                placeholder="Nhập số sim cần tìm"
                                enterButton={
                                    <Button
                                        type="primary"
                                        icon={<SearchOutlined/>}
                                        style={{backgroundColor: "rgb(254, 209, 0)"}}
                                    />
                                }
                                onSearch={handleSearch}
                            />
                            <div className="w-[100px] flex items-center ml-2">
                                {
                                    token ? <Link className="text-white" href="/admin">Tải sim</Link> :
                                        <Link className="text-white" href="/login"></Link>
                                }
                            </div>

                        </div>
                        <div></div>
                    </Header>
                    <div style={{backgroundColor: "rgb(254,209,0)",}}>
                        <div className="container" style={{height: "44px",}}>
                            <div className="row" style={{}}>
                                <Menu
                                    mode="horizontal"
                                    style={{
                                        padding: "0 0",
                                        height: "44px",
                                        display: "flex",
                                        alignItems: "center",
                                        width: "100%",
                                        backgroundColor: "rgb(254,209,0)"
                                    }}
                                >
                                    <Menu.Item
                                        key="home"
                                        style={{lineHeight: "43px"}}
                                    >
                                        <Link
                                            href="/"
                                            style={{fontWeight: "bold", fontSize: "16px"}}
                                        >
                                            TRANG CHỦ
                                        </Link>
                                    </Menu.Item>
                                    {/* <Menu.Item key="muasim" style={{ lineHeight: '43px' }}>
                                        <Link href="/buy" style={{ fontWeight: 'bold', fontSize: '16px' }}>MUA SIM</Link>
                                    </Menu.Item> */}
                                    <Menu.Item key="lienhe" style={{lineHeight: "43px"}}>
                                        <Link
                                            href="/lienhe"
                                            style={{fontWeight: "bold", fontSize: "16px"}}
                                        >
                                            LIÊN HỆ
                                        </Link>
                                    </Menu.Item>
                                    <Menu.Item key="payment" style={{lineHeight: "43px"}}>

                                        <Link
                                            href="/payment"
                                            style={{fontWeight: "bold", fontSize: "16px"}}
                                        >
                                            HÌNH THỨC THANH TOÁN
                                        </Link>
                                    </Menu.Item>
                                    <Menu.Item key="ship" style={{lineHeight: "43px"}}>
                                        <Link
                                            href="/ship"
                                            style={{fontWeight: "bold", fontSize: "16px"}}
                                        >
                                            CHÍNH SÁCH VẬN CHUYỂN
                                        </Link>
                                    </Menu.Item>
                                    <Menu.Item
                                        key="chuchay"
                                        style={{lineHeight: "43px", border: "none", width: "300px"}}
                                        className="modified-item block sm:hidden"
                                    >
                                        <QueueAnim>
                                            <div key="text" style={{width: "70%"}}>
                                                <p
                                                    className="continuous-text"
                                                    style={{
                                                        color: "red",
                                                        fontWeight: "bold",
                                                        fontSize: "16px",
                                                    }}
                                                >
                                                    GIAO SIM - KIỂM TRA - THANH TOÁN

                                                </p>
                                            </div>
                                        </QueueAnim>
                                    </Menu.Item>
                                </Menu>
                            </div>
                        </div>
                    </div>

                </div>
            </Header>
        </>
    );
}

export default HeaderComponent;
