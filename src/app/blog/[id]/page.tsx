import React from "react";
import { data } from "@/app/blog/data";
import { Avatar, Card, Space } from "antd";

export const generateMetadata = ({ params }: { params: { id: string } }) => {
  return {
    title: `Blog Detail - ${params.id}`,
  };
};

export default function page({ params }: { params: { id: string } }) {
    console.log(params)
  const item = data?.find((item) => item.id === Number(params.id));
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
