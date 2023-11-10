import React from "react";
import type { ColumnsType } from "antd/es/table";
import { CheckOutlined } from "@ant-design/icons";
import { useMessages } from "../../Store/Messages/messages.ts";
import { Table } from "antd";
import { IMessage } from "../../types/Types.ts";

const App: React.FC = () => {
  const { messages, setMessages } = useMessages();
  const columns: ColumnsType<IMessage> = [
    {
      title: "Admin",
      dataIndex: "admin",
      key: "admin",
    },
    {
      title: "Text",
      dataIndex: "text",
      key: "text",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => (status ? <div>confirmed</div> : <div>open</div>),
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (status, item) =>
        status ? (
          <CheckOutlined />
        ) : (
          <button
            className={btn}
            onClick={() => {
              const res = messages.map((message) => {
                if (message.id === item.id)
                  return { ...message, isApproved: !message.isApproved };
                return message;
              });
              setMessages(res);
            }}
          >
            apply
          </button>
        ),
    },
  ];

  return <Table columns={columns} dataSource={messages} />;
};

export default App;

const btn =
  "rounded-lg px-2 py-1 bg-[#9e928c] text-gray-100 hover:bg-[#8a807a] active:bg-[#623e2a] duration-300 font-gilda ";
