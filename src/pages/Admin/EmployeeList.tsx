import React, { useState } from 'react';
import type { ColumnsType } from 'antd/es/table';
import { EditOutlined,InfoCircleOutlined, SwapLeftOutlined } from '@ant-design/icons';
import { Table } from 'antd';
import {IUser } from '../../types/Types.ts'
import { useUsers } from '../../Store/Users/useUsers.tsx';
import EmployeeModal from './EmployeeModal.tsx';


const EmployeeList: React.FC = () => {
    const { users } = useUsers();
    const [openModal, setOpenModal]= useState(false);
    const [userInfo, setUserInfo] = useState(false)

    const [user, setUser] = useState<IUser>({
        id: 0,
        name: '',
        email: '',
        phone: '',
        address: '',
        status: '',
        title: '',
        jobDescription: '',
        
        manager: '',
        compensation: '',
        paymentMethod: '',
        compensationPeriod: '',
        agreementSigned: '',//date
        lastPaymentDate: '',//date
    
        signedConfidentiallyAgreement: '',
        workAgreements: '',
        GovtID: '',
        TimeSheetsSubmitted: '',
        ConfirmReceiptPaid: '',//date
    });

        const columns: ColumnsType<IUser> = [
        {
            title: 'edit',
            dataIndex: '',
            key: 'action',
            render: (_,item) => (
                <>
                    <EditOutlined 
                        className='cursor-pointer'
                        onClick={( )=> {
                            setUser(item);
                            setOpenModal(true)
                        }}
                    />
                    
                </>
            ),
        },
        {
            title: 'name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'phone',
            dataIndex: 'phone',
            key: 'phone',
        },
        {
            title: 'address',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'full info',
            dataIndex: '',
            key: 'action',
            render: (_,item) => (
                <>
                    <InfoCircleOutlined 
                        className='cursor-pointer'
                        onClick={( )=> {
                            setUser(item)
                            setUserInfo(true)
                        }}
                    />
                    
                </>
            ),
        },

    ]

    return (
            <>
                {userInfo ? 
                <div className={container}>
                    <SwapLeftOutlined className='text-3xl cursor-pointer text-blue-800 hover:text-blue-600 absolute top-4 left-20' onClick={( )=> setUserInfo(false)}/>
                    <EditOutlined className='text-xl cursor-pointer absolute top-10 right-20' onClick={( )=> {
                            setUser(user) 
                            setOpenModal(true)
                            }}/>
                    <h1 className="text-2xl text-blue-900 self-center mb-16" >{user.name} full info!</h1>
                    <span className='flex'><span className={title}>Name:</span>{user.name}</span> 
                    <hr /><br /><br /><br />
                    <span className='flex'><div className={title}>Email:</div> {user.email}</span>
                    <span className='flex'><div className={title}>Contact phone:</div>{user.phone}</span>
                    <span className='flex'><div className={title}>Address: </div>{user.address}</span>
                    <span className='flex'><div className={title}>Title:</div>{user.title}</span>
                    <hr /><br /><br /><br />
                    <span className='flex'><div className={title}>Superior:</div> {user.manager}</span>
                    <span className='flex'><div className={title}>Type of compensation:</div> {user.compensation}</span>
                    <span className='flex'><div className={title}>Compensation period: </div>{user.compensationPeriod}</span>
                    <span className='flex'><div className={title}>Payment method: </div>{user.paymentMethod}</span>
                    <span className='flex'><div className={title}>Last payment date: </div>{user.lastPaymentDate}</span>
                    <br /><hr /><br /><br /><br />
                    <span className='flex'><div className={title}>Job description:</div> {user.jobDescription}</span>
                </div>
                :<Table className='w-full' columns={columns} dataSource={users.list} />}
                <EmployeeModal data={user} openModal={openModal} handleCloseModal={setOpenModal}/>
            </>
        )
} ;

export default EmployeeList;

const container = 'relative flex flex-col w-full h-full py-5 px-10 text-gray-600'
const title = 'mr-4  text-gray-800 w-[200px]'
