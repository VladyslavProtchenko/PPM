import React from 'react';
import type { ColumnsType } from 'antd/es/table';
import { EditOutlined ,DeleteOutlined} from '@ant-design/icons';
import { Table } from 'antd';
import { IVacancy } from '../../types/Types.ts';
import { useVacancy } from '../../Store/Vacancies/vacancies.tsx';
import { PlusOutlined,HddOutlined } from "@ant-design/icons";


const PostsList: React.FC = () => {
    const { vacancies, setModal,setIsEditable,removeVacancy,setIsAdd } = useVacancy()
    const columns: ColumnsType<IVacancy> = [
        {
            title: 'edit info',
            dataIndex: '',
            key: 'action',
            render: (item) => (
                    <EditOutlined 
                        className='cursor-pointer'
                        onClick={() => {
                            setIsEditable(item.id)
                            setModal(true)
                        }}
                    /> 
                ),
        },
        {
            title: 'title',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'description',
            dataIndex: 'text',
            key: 'text',
        },
        {
            title: 'remove',
            dataIndex: '',
            key: 'action',
            render: (item) => (
                    <DeleteOutlined
                        className='cursor-pointer'
                        onClick={() => {
                            removeVacancy(item.id)
                            
                        }}
                    /> 
                ),
        },

    ]
    return (
    <>
        <div className="flex w-full px-10 justify-between mb-5">
            <button 
                className={addBtn} 
                onClick={()=>{
                    setIsAdd(true)
                    setModal(true)
                }}
            ><PlusOutlined className='mr-2'/>Add vacancy</button>
            <button className=' text-xs'>Archive<HddOutlined className='ml-2'/></button>
        </div>
        <Table className='w-full' columns={columns} dataSource={vacancies.list} />
    </>
    )
} ;

export default PostsList;
const addBtn = ' px-2 py-1 text-xs bg-gray-200 hover:bg-gray-100 active:bg-gray-300 rounded'
