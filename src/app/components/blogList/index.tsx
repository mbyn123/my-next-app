"use client";
import React from "react";
import { Avatar, List } from "antd";

export interface BlogItem {
  id: number;
  avatar: string;
  title: string;
  content: string;
}

export default function BlogList({ data }: { data: BlogItem[] }) {
  return (
    <div>
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src={item.avatar} />}
              title={<a href={`/blog/${item.id}`}>{item.title}</a>}
              description={item.content}
            />
          </List.Item>
        )}
      />
    </div>
  );
}
