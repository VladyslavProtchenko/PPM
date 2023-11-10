import React from "react";
import type { ColumnsType } from "antd/es/table";
import { SaveOutlined, HddOutlined } from "@ant-design/icons";
import { Table } from "antd";
import { useCandidate } from "../../Store/Candidate/useCandidate";
import { ICandidate } from "../../types/Types.ts";

const CandidatesList: React.FC = () => {
  const { candidates } = useCandidate();
  console.log(candidates.candidate);
  const columns: ColumnsType<ICandidate> = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (_, data) => (
        <>
          {data.name} {data.lastName}
        </>
      ),
    },
    {
      title: "Vacancy",
      dataIndex: "vacancy",
      key: "vacancy",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "CV",
      dataIndex: "cv",
      key: "cv",
      render: () => <SaveOutlined className="cursor-pointer" />,
    },
  ];

  return (
    <div className="flex flex-col">
      <button className="self-end bg-blue-200 px-4 py-4 text-sm hover:bg-blue-100 active:bg-gray-300">
        Archive
        <HddOutlined className="ml-2" />
      </button>
      <Table
        className="w-full"
        columns={columns}
        dataSource={candidates.list.map((candidate, index) => ({
          ...candidate,
          key: index.toString(),
        }))}
      />
    </div>
  );
};
export default CandidatesList;
