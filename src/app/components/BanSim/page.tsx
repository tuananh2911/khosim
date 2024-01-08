"use client"
import React from 'react';
import { Typography, Divider, Image } from 'antd';
import Link from 'next/link';

const { Title, Paragraph, Text } = Typography;

const BanSim = () => {
    return (
        <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '5px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
            <div className="section-item__title">
                <Title>Đặt Mua Sim Số Đẹp 0798.99.3737</Title>
            </div>
            <Divider />
            <div className="section-item__content">
                <Paragraph className="booking__info-box">
                    <div className="row" style={{
                        display: 'flex', flexWrap: 'wrap', marginBottom: '10px'
                    }}>
                        <div className="col col-left col-7" style={{ flex: '0 0 auto', paddingRight: '15px' }}>
                            <div className="row booking__info">
                                <div className="col col-left col-12" style={{ flex: '0 0 auto', paddingRight: '15px' }}>
                                    <Text className="col-4 col-label" style={{ fontWeight: 'bold' }}>Số thuê bao</Text>
                                    <strong className="col-6 prod-number" style={{ display: 'block', marginTop: '5px' }}>0798.99.3737</strong>
                                </div>
                            </div>
                            <div className="row booking__info">
                                <div className="col col-left col-12" style={{ flex: '0 0 auto', paddingRight: '15px' }}>
                                    <Text className="col-4 col-label" style={{ fontWeight: 'bold' }}>Giá bán</Text>
                                    <span className="col-8 prod-price" style={{ display: 'block', marginTop: '5px' }}>
                                        <strong className="price sell-price" style={{ color: 'red' }}>2,500,000</strong>
                                    </span>
                                </div>
                            </div>
                            <div className="row booking__info">
                                <div className="col col-left col-12" style={{ flex: '0 0 auto', paddingRight: '15px' }}>
                                    <Text className="col-4 col-label" style={{ fontWeight: 'bold' }}>Mạng di động</Text>
                                    <strong className="col-6 prod-network" style={{ display: 'block', marginTop: '5px' }}>Mobifone</strong>
                                </div>
                            </div>
                            <div className="row booking__info">
                                <div className="col col-left col-12" style={{ flex: '0 0 auto', paddingRight: '15px' }}>
                                    <Text className="col-4 col-label" style={{ fontWeight: 'bold' }}>Kiểu số đẹp</Text>
                                    <strong className="col-6 prod-catename" style={{ display: 'block', marginTop: '5px' }}>
                                        <Link href="/simlap">
                                            Sim lặp
                                        </Link>
                                    </strong>
                                </div>
                            </div>
                        </div>
                        <div className="col col-left col-5" style={{ flex: '0 0 auto', paddingRight: '15px' }}>
                            <Image width={600} height={400} src="https://khosim.com/asset/images/0798993737.jpg?nc=mobifone" alt="KhoSim - 0798993737" />
                        </div>
                    </div>
                </Paragraph>
            </div >
        </div >
    );
}
export default BanSim;