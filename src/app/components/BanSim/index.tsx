"use client"
import React from 'react';
import { Typography, Divider, Tag } from 'antd';
import Link from 'next/link';
import numberWithVND from "@/app/utils/numberwithvnd";

const { Title, Paragraph, Text } = Typography;

const BanSim = (props: any) => {
    const {data} = props
    return (
        <div style={{ margin: '8px 8px', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
            <div className="section-item__title">
                <Title level={3}>Đặt Mua Sim Số Đẹp 0798.99.3737</Title>
            </div>
            <Divider />
            <div className="section-item__content">
                <div className="booking__info-box">
                    <div className="row" style={{ display: 'flex', flexWrap: 'wrap', marginBottom: '10px', width: '100%' }}>
                        <div className="col col-left col-7" style={{ paddingRight: '15px', width: '100%' }}>
                            <div className="row booking__info" style={{ display: 'flex', alignItems: 'center' }}>
                                <div style={{ marginRight: '10px' }}>
                                    <Text className="col-4 col-label" strong>Số thuê bao:</Text>
                                </div>
                                <div >
                                    <Text className="col-6 prod-number" strong style={{ fontWeight: 'bold', fontSize: '24px', color: 'red' }}>{data.number}</Text>
                                </div>
                            </div>

                            <div className="row booking__info" style={{ display: 'flex', alignItems: 'center' }}>
                                <div style={{ marginRight: '10px' }}>
                                    <Text className="col-4 col-label" strong>Giá bán:</Text>
                                </div>
                                <div >
                                    <Text className="col-6 prod-number" strong style={{ fontWeight: 'bold', fontSize: '24px', color: '#198754' }}>{numberWithVND(data.price)}</Text>
                                </div>
                            </div>
                            <div className="row booking__info" style={{ display: 'flex', alignItems: 'center' }}>
                                <div style={{ marginRight: '10px' }}>
                                    <Text className="col-4 col-label" strong>Mạng di động:</Text>
                                </div>
                                <div >
                                    <Text className="col-6 prod-number" strong style={{ fontWeight: 'bold', fontSize: '16px', color: 'black' }}>{data.supplier}</Text>
                                </div>
                            </div>
                            <div className="row booking__info" style={{ display: 'flex', alignItems: 'center' }}>
                                <div style={{ marginRight: '10px' }}>
                                    <Text className="col-4 col-label" strong>Kiểu số đẹp:</Text>
                                </div>
                                <div >
                                    <Text className="col-6 prod-number" strong style={{ fontWeight: 'bold', fontSize: '16px', color: 'black' }}>{data.type}</Text>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default BanSim;
