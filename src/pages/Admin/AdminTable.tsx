import { PlusOutlined } from "@ant-design/icons";
import { useState } from "react";
import type { ColumnsType } from "antd/es/table";
import {
  EditOutlined,
  InfoCircleOutlined,
  SwapLeftOutlined,
} from "@ant-design/icons";
import { Table } from "antd";
import {IAdmin} from "../../types/Types.ts";
import {useAdmins} from "../../Store/Admins/useAdmins.tsx";
import AdminAddModal from "./AdminAddModal.tsx";


const AdminTable = () => {
  const { users } = useAdmins();
  const [openModal, setOpenModal] = useState(false);
  const [userInfo, setUserInfo] = useState(false);

  const [user, setUser] = useState<IAdmin>({
    id: 0,
    name: "",
    email: "",
    phone: "",
    status: "",
    jobDescription: "",
  });

  const columns: ColumnsType<IAdmin> = [
    {
      title: "Full info",
      dataIndex: "full_info",
      key: "full_info",
      render: (_, item) => (
        <>
          <InfoCircleOutlined
            className="cursor-pointer"
            onClick={() => {
              setUser(item);
              setUserInfo(true);
            }}
          />
        </>
      ),
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
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
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Job",
      dataIndex: "jobDescription",
      key: "jobDescription",
    },
    {
      title: "Edit",
      dataIndex: "edit",
      key: "edit",
      render: (_, item) => (
        <>
          <EditOutlined
            className="cursor-pointer"
            onClick={() => {
              setUser(item);
              setOpenModal(true);
            }}
          />
        </>
      ),
    },
  ];
  return (
    <div className="flex flex-col">
      <button
        className="self-start bg-blue-200 px-4 py-4 text-sm hover:bg-blue-100 active:bg-gray-300"
        onClick={() => {
          setOpenModal(true);
        }}
      >
        <PlusOutlined className="mr-2" />
        Add Admin
      </button>
      <>
        {userInfo ? (
          <div className="relative flex h-full w-full flex-col px-10 py-5 text-gray-600">
            <SwapLeftOutlined
              className="absolute left-20 top-4 cursor-pointer text-3xl text-blue-800 hover:text-blue-600"
              onClick={() => setUserInfo(false)}
            />
            <EditOutlined
              className="absolute right-20 top-10 cursor-pointer text-xl"
              onClick={() => {
                setUser(user);
                setOpenModal(true);
              }}
            />
            <h1 className="mb-16 self-center text-2xl text-blue-900">
              {user.name} full info!
            </h1>
            <span className="flex">
              <span className="mr-4 w-[200px] text-gray-800">Name:</span>
              {user.name}
            </span>
            <hr />
            <br />
            <br />
            <br />
            <span className="flex">
              <div className="mr-4 w-[200px] text-gray-800">Email:</div>{" "}
              {user.email}
            </span>
            <span className="flex">
              <div className="mr-4 w-[200px] text-gray-800">Contact phone:</div>
              {user.phone}
            </span>
            <hr />
            <br />
            <br />
            <br />

            <span className="flex">
              <div className="mr-4 w-[200px] text-gray-800">
                Job description:
              </div>{" "}
              {user.jobDescription}
            </span>
          </div>
        ) : (
          <Table
            className="w-full"
            columns={columns}
            dataSource={users.list.map((admin, index) => ({
              ...admin,
              key: index.toString(),
            }))}
          />
        )}

        <AdminAddModal
          openModal={openModal}
          handleCloseModal={setOpenModal}
        />
      </>
    </div>
  );
};

export default AdminTable;
