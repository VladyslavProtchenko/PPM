import {  useEffect, useState } from 'react';
import { Button, Input, Modal } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { useUsers } from '../../Store/Users/useUsers';
import { IUser } from '../../types/Types';

const EmployeeModal = ({ data, openModal, handleCloseModal }:{ data: IUser, openModal:boolean,handleCloseModal:(data:boolean)=> void }) => {
    const { editUser } = useUsers()
    const [name, setName] = useState(data.name)
    const [email, setEmail] = useState(data.email)
    const [phone, setPhone] = useState(data.phone)
    const [address, setAddress] = useState(data.address)
    const [title, setTitle] = useState(data.title)
    const [compensation, setCompensationType] = useState(data.compensation,)
    const [jobDescription, setBriefJobDescription] = useState(data.jobDescription)
    const [paymentMethod, setMethodOfPayment] = useState(data.paymentMethod)
    const [compensationPeriod, setCompensationSchedule] = useState(data.compensationPeriod)
    const [manager, setFullNameOfSupervisor] = useState(data.manager)
    const [lastPaymentDate, setLastPaymentDate] = useState(data.lastPaymentDate)    

    useEffect(()=>{
        setName(data.name)
        setEmail(data.email)
        setPhone(data.phone)
        setAddress(data.address)
        setTitle(data.title)
        setCompensationType(data.compensation,)
        setBriefJobDescription(data.jobDescription)
        setMethodOfPayment(data.paymentMethod)
        setCompensationSchedule(data.compensationPeriod)
        setFullNameOfSupervisor(data.manager)
        setLastPaymentDate(data.lastPaymentDate)
    },[data])

    return (
            <Modal
                onCancel={()=> handleCloseModal(false)}
                open={openModal}
                title="Edit user"
                footer={() => (
                    <>
                        <Button 
                            className='bg-green-400'
                            onClick={()=>{
                                editUser({
                                    ...data,
                                    name,
                                    email ,
                                    phone ,
                                    address,
                                    title,
                                    compensation,
                                    jobDescription,
                                    paymentMethod,
                                    compensationPeriod,
                                    manager,
                                    lastPaymentDate
                                })
                                handleCloseModal(false)
                            }}
                        >Apply</Button>
                        <Button 
                            className='bg-red-400'
                            onClick={()=> handleCloseModal(false)}
                        >Cancel
                        
                        </Button>
                    </>
                )}
            >
                
                <div className='flex divide-x border-t pt-10'>
                    <div className={block}>
                        <Input
                            value={name}
                            placeholder='Name' 
                            onChange={(e) =>setName(e.target.value)}
                        />

                        <Input 
                            value={email}
                            placeholder='Email' 
                            onChange={(e)=>{
                                setEmail(e.target.value)
                            }}
                        />
                        <Input 
                            value={phone}
                            placeholder='Phone' 
                            onChange={(e)=>{
                                setPhone(e.target.value)
                            }}
                        />
                        <Input 
                            value={address}
                            placeholder='Address' 
                            onChange={(e)=>{
                                setAddress(e.target.value)
                            }}
                        />
                        <Input 
                            value={title}
                            placeholder='Title' 
                            onChange={(e)=>{
                                setTitle(e.target.value)
                            }}
                        />
                        <TextArea 
                            value={jobDescription}
                            placeholder='Job description' 
                            onChange={(e)=>{
                                setBriefJobDescription(e.target.value)
                            }}
                        />
                    </div>

                    <div className={block}>
                        <Input 
                            value={compensation}
                            placeholder='Compensation type' 
                            onChange={(e)=>{
                                setCompensationType(e.target.value)
                            }}
                        />
                        <Input 
                            value={paymentMethod}
                            placeholder='Payment method' 
                            onChange={(e)=>{
                                setMethodOfPayment(e.target.value)
                            }}
                        />
                        <Input 
                            value={compensationPeriod}
                            placeholder='Compensation schedule' 
                            onChange={(e)=>{
                                setCompensationSchedule(e.target.value)
                            }}
                        />
                        <Input 
                            value={manager}
                            placeholder='superior full-name' 
                            onChange={(e)=>{
                                setFullNameOfSupervisor(e.target.value)
                            }}
                        />
                        <Input 
                            value={lastPaymentDate}
                            placeholder='last payment data' 
                            onChange={(e)=>{
                                setLastPaymentDate(e.target.value)
                            }}
                        />
                    </div>
                </div>
            </Modal>
    );
};

export default EmployeeModal;

const block = 'flex w-1/2 flex-col space-y-4 px-5' 