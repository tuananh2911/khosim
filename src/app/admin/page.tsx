"use client";
import { useInfoUser } from "@/hooks/useInfoUser";
import { Button } from "antd";
import React, { useEffect, useState } from "react";
import UploadSim from "./UploadSim";

const Admin = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const token = localStorage.getItem('token')
  useEffect(() => {
    if (!token) window.location.href = "/login";
  }, [token]);
  return (
    <div className="flex justify-center flex-col items-center w-full min-h-[50vh]">
      <UploadSim isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default Admin;
