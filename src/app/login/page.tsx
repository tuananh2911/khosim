"use client";
import React, { useEffect } from "react";
import { Button, Form, Input } from "antd";
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
  const { setUser, user } = useInfoUser();
  const handleLogin = async (values: any) => {
    try {
      const res = await request.post("/user/login", {
        username: values.username,
        password: values.password,
      });
      if (res.data.isAdmin) {
        setUser({ isAdmin: true });
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    if (user && user.isAdmin) window.location.href = "/admin";
  }, [user]);
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
          <Button type="primary" htmlType="submit">
            Đăng nhập
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginPage;
