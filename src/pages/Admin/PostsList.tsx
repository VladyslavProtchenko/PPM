import React, { useState } from "react";
import type { ColumnsType } from "antd/es/table";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Table } from "antd";
import { IVacancy } from "../../types/Types.ts";
import { useVacancy } from "../../Store/Vacancies/vacancies.tsx";
import { PlusOutlined, HddOutlined } from "@ant-design/icons";
import PostModal from "./PostModal.tsx";

const PostsList: React.FC = () => {
  const { vacancies, setModal, removeVacancy, setIsAdd } = useVacancy();

  const [post, setPost] = useState<IVacancy>({
    id:0,
    title:'',
    text:''
  });
  
  const columns: ColumnsType<IVacancy> = [
    {
      title: "Edit info",
      dataIndex: "edit_info",
      key: "edit_info",
      render: (_,item) => (
        <EditOutlined
          className="cursor-pointer"
          onClick={() => {
            setIsAdd(false);
            setPost(item);
            setModal(true);
          }}
        />
      ),
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Description",
      dataIndex: "text",
      key: "text",
    },
    {
      title: "Remove",
      dataIndex: "remove",
      key: "remove",
      render: (_,item) => (
        <DeleteOutlined
          className="cursor-pointer"
          onClick={() => {

            removeVacancy(item.id);
          }}
        />
      ),
    },
  ];
  return (
    <>
      <div className="flex w-full justify-between">
        <button
          className="self-start bg-blue-200 px-4 py-4 text-sm hover:bg-blue-100 active:bg-gray-300"
          onClick={() => {
            setIsAdd(true);
            setModal(true);
            setIsAdd(true);
          }}
        >
          <PlusOutlined className="mr-2" />
          Add vacancy
        </button>
        <button className="self-start bg-blue-200 px-4 py-4 text-sm hover:bg-blue-100 active:bg-gray-300">
          Archive
          <HddOutlined className="ml-2" />
        </button>
      </div>
      <Table
        className="w-full"
        columns={columns}
        dataSource={vacancies.list}
      />
      <PostModal data={post}/>
    </>
  );
};

export default PostsList;
