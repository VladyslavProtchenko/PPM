import React, { useState } from 'react';
import type { ColumnsType } from 'antd/es/table';
import { EditOutlined ,DeleteOutlined} from '@ant-design/icons';
import { Table } from 'antd';
import { IVacancy } from '../../types/Types.ts';
import { useVacancy } from '../../Store/Vacancies/vacancies.tsx';
import { PlusOutlined,HddOutlined } from "@ant-design/icons";
import PostModal from './PostModal.tsx';


const PostsList: React.FC = () => {
    const { vacancies, setModal,removeVacancy,setIsAdd } = useVacancy()
    const [post, setPost] =useState({
        title:'',
        text:''
    })
    console.log(post,' post')
    const columns: ColumnsType<IVacancy> = [
        {
            title: 'edit info',
            dataIndex: '',
            key: 'action',
            render: (item) => (
                    <EditOutlined 
                        className='cursor-pointer'
                        onClick={() => {
                            setIsAdd(false)
                            setPost(item)
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
        <div className="flex w-full pr-10 justify-between h-10">
            <button 
                className={addBtn} 
                onClick={()=>{
                    setIsAdd(true)
                    setModal(true)
                    setIsAdd(true)
                }}
            ><PlusOutlined className='mr-2'/>Add vacancy</button>
            <button className=' text-sm'>Archive<HddOutlined className='ml-2'/></button>
        </div>
        <Table className='w-full' columns={columns} dataSource={vacancies.list} />
        <PostModal data={post} />
    </>
    )
} ;

export default PostsList;

const addBtn = ' px-2 text-sm bg-blue-200 hover:bg-blue-100 active:bg-gray-300'
