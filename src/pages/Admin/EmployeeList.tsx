import React, { useState } from 'react';
import type { ColumnsType } from 'antd/es/table';
import { EditOutlined } from '@ant-design/icons';
import { Table } from 'antd';
import {IUser } from '../../types/Types.ts'
import { useUsers } from '../../Store/Users/useUsers.tsx';
import EmployeeModal from './EmployeeModal.tsx';


const EmployeeList: React.FC = () => {
    const { users } = useUsers();
    const [openModal, setOpenModal]= useState(false);
    
    const [user, setUser] = useState<IUser>({
        id: 0,
        name: '',
        lastName: '',
        img: '',
        email: '',
        phone: '',
        createdAt: '',
        verified: true,
        fullName: '',
        address: '',
        title: '',
        briefJobDescription: '',
        compensationType: '',
        methodOfPayment: '',
        compensationSchedule: '',
        fullNameOfSupervisor: '',
        lastPaymentDate: '',
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

    ]

    return (
            <>
                <Table className='w-full' columns={columns} dataSource={users.list} />
                <EmployeeModal data={user} openModal={openModal} handleCloseModal={setOpenModal}/>
            </>
        )
} ;

export default EmployeeList;

