import React from 'react';
import type { ColumnsType } from 'antd/es/table';
import { EditOutlined } from '@ant-design/icons';
import { Table } from 'antd';
import { users } from '../../DB/Users.tsx'
import {IUser } from '../../types/Types.ts'


const EmployeeList: React.FC = () => {
    const columns: ColumnsType<IUser> = [
        {
            title: 'edit',
            dataIndex: '',
            key: 'action',
            render: (status ) => (
                status  ? <EditOutlined className='cursor-pointer'/> 
                        : <button
                        className={btn}
                        onClick={() => {
                            alert('you want to edit user')
                        }}
                    >apply</button>
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

    ]

    return (<Table className='w-full' columns={columns} dataSource={users} />)
} ;

export default EmployeeList;

const btn = 'rounded-lg cursor-pointer px-2 py-1 bg-[#9e928c] text-gray-100 hover:bg-[#8a807a] active:bg-[#623e2a] duration-300 font-gilda '
