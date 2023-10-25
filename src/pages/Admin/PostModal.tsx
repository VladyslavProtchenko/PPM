import React, { useState } from 'react';
import { Button, Input, Modal } from 'antd';
import { useVacancy } from '../../Store/Vacancies/vacancies';
import TextArea from 'antd/es/input/TextArea';

const PostModal: React.FC = () => {
    const { vacancies, setModal, editVacancy, setVacancy } = useVacancy()
    const [post, setPost] = useState({
        id: vacancies.isEditable,
        title:'',
        text:''
    })

    return (
            <Modal
                onCancel={()=> setModal(false)}
                open={vacancies.isModal}
                title="Edit Post"
                footer={() => (
                    <>
                        <Button 
                            className='bg-green-400'
                            onClick={()=>{
                                if(vacancies.isAdd) {
                                    setVacancy({
                                        ...post, id: vacancies.list.length + 1,
                                    })
                                    return setModal(false)
                                }
                                editVacancy({...post, id: vacancies.isEditable})
                                setModal(false)
                            }}
                        >Apply</Button>
                        <Button 
                            className='bg-red-400'
                            onClick={()=> setModal(false)}
                        >Cancel</Button>
                    </>
                )}
            >
                <div className='flex flex-col space-y-5'>
                    <Input 
                        placeholder='Set title' 
                        onChange={(e)=>{
                            setPost({...post, title:e.target.value})
                        }}
                    />
                    <TextArea  
                        placeholder='Set content'
                        onChange={(e)=>{
                            setPost({...post, text:e.target.value})
                        }}
                    />
                </div>
            </Modal>
    );
};

export default PostModal;