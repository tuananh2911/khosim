"use client"
import Image from 'next/image';
import Link from 'next/link';
import { PhoneOutlined } from '@ant-design/icons';
import { footerLinks, footerSDT } from '@/constants';
import { Button } from 'antd';
const Footer = () => {
    return (
        <footer className=" text-black-100 mt-5 border-t border-gray-100" style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '1.25rem', paddingLeft: '1.5rem', paddingRight: '1.5rem', paddingTop: '2.5rem', paddingBottom: '2.5rem' }}>
                <div style={{ gap: '1.5rem', display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start', flexDirection: 'column' }}>
                    <Link href="/" className='flex justify-center items-center'>
                        <Image src="/logo.svg" alt="Car Hub Logo" width={472} height={72} className="object-contain" />
                    </Link>
                </div>
                <div className="footer__links pt-32 mr-32">
                    {footerLinks.map((link) => (
                        <div key={link.title} className="footer__link flex">
                            <h3 className="font-bold" style={{ fontWeight: 'bold', fontSize: '18px' }}>{link.title}</h3>
                            {link.links.map((item) => (
                                <Link key={item.title} href={item.url} className="text-gray-500">
                                    {item.title}
                                </Link>
                            ))}
                        </div>
                    ))}
                    {footerSDT.map((link) => (
                        <div key={link.title} className="footer__link flex">
                            <h3 className="font-bold" style={{ fontWeight: 'bold', fontSize: '18px' }}>{link.title}</h3>
                            <Button icon={<PhoneOutlined />} size="large" style={{ backgroundColor: '#fed100', fontWeight: 'bold', fontSize: '16px' }}>
                                <span style={{ color: 'black' }}>0386105647</span>
                            </Button>
                            <Button href='https://zalo.me/3798100058065178012' size="large" style={{ backgroundColor: '#0168fc', fontWeight: 'bold', fontSize: '16px', display: 'flex' }} className='icon-zalo'>
                                <Image
                                    src="/Logo-Zalo-Arc.png"
                                    alt="logozalo"
                                    width={30}
                                    height={20}
                                ></Image>
                                <span style={{ color: 'white', marginLeft: '10px' }}>0386105647</span>
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-200 sm:px-16 px-6 py-10">
                <p className="">&copy; 2024 CHỢ SIM GIÁ RẺ</p>
            </div>
        </footer >
    )
}
export default Footer;