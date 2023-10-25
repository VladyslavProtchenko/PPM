import React from 'react';
import type { ColumnsType } from 'antd/es/table';
import { SaveOutlined, HddOutlined } from '@ant-design/icons';
import { Table } from 'antd';
import { useCandidate } from '../../Store/Candidate/useCandidate';
import { ICandidate } from '../../types/Types.ts';

const CandidatesList: React.FC = () => {
    const { candidates } = useCandidate()
    console.log(candidates.candidate)
    const columns: ColumnsType<ICandidate> = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'action',
            render: (_,data) =>(
                    <>{data.name} {data.lastName}</>
            )
        },
        {
            title: 'vacancy',
            dataIndex: 'vacancyTitle',
            key: 'vacancyTitle',
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
            title: 'CV',
            dataIndex: 'address',
            key: 'action',
            render: () =>(
                <SaveOutlined className="cursor-pointer"/>
            )
        },

    ]

    return (
            <>
                <div className="flex w-full px-10 justify-end mb-5">
                    <button className=' text-xs'>Archive<HddOutlined className='ml-2'/></button>
                </div>
                <Table className='w-full' columns={columns} dataSource={candidates.list} />
            </>
        )
} ;
export default CandidatesList;