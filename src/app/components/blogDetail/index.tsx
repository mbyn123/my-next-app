'use client'
import React from "react";
import { Avatar, Card, Space } from "antd";
import { data } from "@/app/blog/data";

export default function BlogDetail({ params }: { params: { id: string } }) {
  const item = data.find((item) => item.id === Number(params.id));
  return (
    <div>
      <Card
        title={
          <Space>
            <Avatar src={item?.avatar} />
            <div>{item?.title}</div>
          </Space>
        }
        style={{ width: 300 }}
      >
        <p>{item?.content}</p>
      </Card>
    </div>
  );
}
