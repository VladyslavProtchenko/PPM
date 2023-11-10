import React, { useState } from "react";
import type { ColumnsType } from "antd/es/table";
import {
  EditOutlined,
  InfoCircleOutlined,
  SwapLeftOutlined,
} from "@ant-design/icons";
import { Table } from "antd";
import { IUser } from "../../types/Types.ts";
import { useUsers } from "../../Store/Users/useUsers.tsx";
import EmployeeModal from "./EmployeeAddModal.tsx";

const EmployeeTable: React.FC = () => {
  const { users } = useUsers();
  const [openModal, setOpenModal] = useState(false);
  const [userInfo, setUserInfo] = useState(false);

  const [user, setUser] = useState<IUser>({
    id: 0,
    name: "",
    email: "",
    phone: "",
    address: {
      number: "",
      street: "",
      apt: "",
      city: "",
      state: "",
      country: "",
      postalCode: "",
    },
    status: "",
    title: "",
    jobDescription: "",

    manager: "",
    compensation: "",
    paymentMethod: "",
    compensationPeriod: "",
    agreementSigned: "", //date
    lastPaymentDate: "", //date

    signedConfidentiallyAgreement: "",
    workAgreements: "",
    GovtID: "",
    TimeSheetsSubmitted: "",
    ConfirmReceiptPaid: "", //date
  });

  const columns: ColumnsType<IUser> = [
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
      title: "Address",
      dataIndex: "address",
      key: "address",
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
    <>
      {userInfo ? (
        <div className={container}>
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
            <span className={title}>Name:</span>
            {user.name}
          </span>
          <hr />
          <br />
          <br />
          <br />
          <span className="flex">
            <div className={title}>Email:</div> {user.email}
          </span>
          <span className="flex">
            <div className={title}>Contact phone:</div>
            {user.phone}
          </span>
          <span className="flex">
            <div className={title}>Address: </div>
            {user.address.number},{user.address.street}{" "}
          </span>
          <span className="flex">
            <div className={title}>Title:</div>
            {user.title}
          </span>
          <hr />
          <br />
          <br />
          <br />
          <span className="flex">
            <div className={title}>Superior:</div> {user.manager}
          </span>
          <span className="flex">
            <div className={title}>Type of compensation:</div>{" "}
            {user.compensation}
          </span>
          <span className="flex">
            <div className={title}>Compensation period: </div>
            {user.compensationPeriod}
          </span>
          <span className="flex">
            <div className={title}>Payment method: </div>
            {user.paymentMethod}
          </span>
          <span className="flex">
            <div className={title}>Last payment date: </div>
            {user.lastPaymentDate}
          </span>
          <br />
          <hr />
          <br />
          <br />
          <br />
          <span className="flex">
            <div className={title}>Job description:</div> {user.jobDescription}
          </span>
        </div>
      ) : (
        <Table
          className="w-full"
          columns={columns}
          dataSource={users.list.map((user, index) => ({
            ...user,
            key: index.toString(),
          }))}
        />
      )}

      <EmployeeModal
        data={user}
        openModal={openModal}
        handleCloseModal={setOpenModal}
      />
    </>
  );
};

export default EmployeeTable;

const container =
  "relative flex flex-col w-full h-full py-5 px-10 text-gray-600";
const title = "mr-4  text-gray-800 w-[200px]";
