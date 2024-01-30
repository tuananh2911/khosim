"use client";
import Image from "next/image";
import Link from "next/link";
import { PhoneOutlined } from "@ant-design/icons";
import { footerLinks, footerSDT } from "@/constants";
import { Button } from "antd";
const Footer = () => {
  return (
    <footer
      className="container text-black-100 mt-2 border-t border-gray-100"
      style={{ display: "flex", flexDirection: "column" }}
    >
      <div className="flex flex-col md:flex-row  justify-between">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/logo.svg"
            alt="Car Hub Logo"
            width={250}
            height={80}
            className="object-contain w"
          />
        </Link>
        <div className="flex flex-col md:flex-row  justify-between basis-4/6">
          {footerLinks.map((link) => (
            <div
              key={link.title}
              className="footer__link flex flex-col justify-between"
            >
              <h3
                className="font-bold"
                style={{ fontWeight: "bold", fontSize: "18px" }}
              >
                {link.title}
              </h3>
              <div className="flex flex-col">
                {link.links.map((item) => (
                  <Link
                    key={item.title}
                    href={item.url}
                    className="text-gray-500"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
          ))}
          {footerSDT.map((link) => (
            <div
              key={link.title}
              className="footer__link flex flex-col justify-between"
            >
              <h3
                className="font-bold"
                style={{ fontWeight: "bold", fontSize: "18px" }}
              >
                {link.title}
              </h3>
              <div className="flex flex-col gap-2">
                <Button
                  icon={<PhoneOutlined />}
                  size="large"
                  style={{
                    backgroundColor: "#fed100",
                    fontWeight: "bold",
                    fontSize: "16px",
                  }}
                >
                  <span style={{ color: "black" }}>0886.39.4567</span>
                </Button>
                <Button
                  href="https://zalo.me/0886394567"
                  size="large"
                  style={{
                    backgroundColor: "#0168fc",
                    fontWeight: "bold",
                    fontSize: "16px",
                    display: "flex",
                  }}
                  className="icon-zalo"
                >
                  <Image
                    src="/Logo-Zalo-Arc.png"
                    alt="logozalo"
                    width={30}
                    height={20}
                  ></Image>
                  <span style={{ color: "white", marginLeft: "10px" }}>
                    0886.39.4567
                  </span>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className=" flex justify-between items-center flex-wrap mt-4 py-2 border-t border-gray-200 sm:px-16 ">
        <p className="">&copy; 2024 SIM VIP GIÁ RẺ</p>
      </div>
    </footer>
  );
};
export default Footer;
