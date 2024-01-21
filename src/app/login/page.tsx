"use client";
import React, {useEffect, useState} from "react";
import {Button, Form, Input, message} from "antd";
import request from "@/api/request";
import { useInfoUser } from "@/hooks/useInfoUser";

const onFinish = (values: any) => {
  console.log("Success:", values);
};

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

const LoginPage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const token = localStorage.getItem('token')
  const handleLogin = async (values: any) => {
    setIsLoading(true)
    try {
      const res = await request.post("/user/login", {
        username: values.username,
        password: values.password,
      });
      if (res.data.access_token) {
        localStorage.setItem("token", res.data.access_token)
        message.success("Đăng nhập thành công")
      }
    } catch (err) {
      console.log(err);
      message.success("Đăng nhập thất bại")
    }
    setIsLoading(false)
  };
  useEffect(() => {
    if (token) window.location.href = "/admin";
  }, [token]);
  return (
    <div className="flex justify-center min-h-[50vh] items-center ">
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        onFinish={handleLogin}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          label="Tên tài khoản"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Mật khẩu"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit" loading={isLoading}>
            Đăng nhập
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginPage;
