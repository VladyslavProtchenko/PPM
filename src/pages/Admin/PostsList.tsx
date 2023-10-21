import React from 'react';
import type { ColumnsType } from 'antd/es/table';
import { EditOutlined } from '@ant-design/icons';
import { Table } from 'antd';
import { IVacancy } from '../../types/Types.ts';
import { useVacancy } from '../../Store/Vacancies/vacancies.tsx';


const PostsList: React.FC = () => {
    const { vacancies,  setVacancy } = useVacancy()
    const columns: ColumnsType<IVacancy> = [
        {
            title: 'edit info',
            dataIndex: '',
            key: 'action',
            render: (status, item) => (
                status  ? <EditOutlined className='cursor-pointer'/> 
                        : <button
                        className={btn}
                        onClick={() => {
                            const res = vacancies.map(vacancy => {
                                if(vacancy.id === item.id) return {...vacancy,}
                                    return vacancy
                                }
                            )
                            setVacancy(res)
                        }}
                    >apply</button>
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

    ]

    return (<Table className='w-full' columns={columns} dataSource={vacancies} />)
} ;

export default PostsList;

const btn = 'rounded-lg px-2 py-1 bg-[#9e928c] text-gray-100 hover:bg-[#8a807a] active:bg-[#623e2a] duration-300 font-gilda '
