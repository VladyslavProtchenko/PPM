import {  useEffect, useState } from 'react';
import { Button, Input, Modal } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { useUsers } from '../../Store/Users/useUsers';
import { IUser } from '../../types/Types';

const EmployeeModal = ({ data, openModal, handleCloseModal }:{ data: IUser, openModal:boolean,handleCloseModal:(data:boolean)=> void }) => {
    const { editUser } = useUsers()
    const [name, setName] = useState(data.name)
    const [lastName, setLastName] = useState(data.lastName)
    const [email, setEmail] = useState(data.email)
    const [phone, setPhone] = useState(data.phone)
    const [address, setAddress] = useState(data.address)
    const [title, setTitle] = useState(data.title)
    const [compensationType, setCompensationType] = useState(data.compensationType,)
    const [briefJobDescription, setBriefJobDescription] = useState(data.briefJobDescription)
    const [methodOfPayment, setMethodOfPayment] = useState(data.methodOfPayment)
    const [compensationSchedule, setCompensationSchedule] = useState(data.compensationSchedule)
    const [fullNameOfSupervisor, setFullNameOfSupervisor] = useState(data.fullNameOfSupervisor)
    const [lastPaymentDate, setLastPaymentDate] = useState(data.lastPaymentDate)    

    useEffect(()=>{
        setName(data.name)
        setLastName(data.lastName)
        setEmail(data.email)
        setPhone(data.phone)
        setAddress(data.address)
        setTitle(data.title)
        setCompensationType(data.compensationType,)
        setBriefJobDescription(data.briefJobDescription)
        setMethodOfPayment(data.methodOfPayment)
        setCompensationSchedule(data.compensationSchedule)
        setFullNameOfSupervisor(data.fullNameOfSupervisor)
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
                                    lastName ,
                                    email ,
                                    phone ,
                                    address,
                                    title,
                                    compensationType,
                                    briefJobDescription,
                                    methodOfPayment,
                                    compensationSchedule,
                                    fullNameOfSupervisor,
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
                
                <div className='flex flex-col space-y-5'>
                    <Input
                        value={name}
                        placeholder='Name' 
                        onChange={(e) =>setName(e.target.value)}
                    />
                    <Input 
                        value={lastName}
                        placeholder='Last name' 
                        onChange={(e)=>{
                            setLastName(e.target.value)
                        }}
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
                        value={briefJobDescription}
                        placeholder='Job description' 
                        onChange={(e)=>{
                            setBriefJobDescription(e.target.value)
                        }}
                    />
                    <Input 
                        value={compensationType}
                        placeholder='Compensation type' 
                        onChange={(e)=>{
                            setCompensationType(e.target.value)
                        }}
                    />
                    <Input 
                        value={methodOfPayment}
                        placeholder='Payment method' 
                        onChange={(e)=>{
                            setMethodOfPayment(e.target.value)
                        }}
                    />
                    <Input 
                        value={compensationSchedule}
                        placeholder='Compensation schedule' 
                        onChange={(e)=>{
                            setCompensationSchedule(e.target.value)
                        }}
                    />
                    <Input 
                        value={fullNameOfSupervisor}
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
            </Modal>
    );
};

export default EmployeeModal;
