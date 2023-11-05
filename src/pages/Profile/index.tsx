import {NavLink, useNavigate} from "react-router-dom";
import MessagesTable from "./messagesTable.tsx";
import { EditOutlined } from "@ant-design/icons";
import Edit from "./Edit.tsx";
import { useEffect, useState } from "react";
import { useUser } from "../../Store/User/useUser.tsx";


const UserInfo = () => {
    const navigate = useNavigate()
    const { user, setUser } = useUser()
    const [isEdit, setIsEdit] = useState(false)

    useEffect(()=>{
        const storageUser = localStorage.getItem('user')
        if(!storageUser) return navigate('/login')
        setUser(JSON.parse(storageUser))
    },[])


    // const values =  {
    //     id: 'id',
    //     name: 'Name',
    //     email: 'Email',
    //     phone: 'Phone number',
    //     address: {

    //     },
    //     status: 'Status',
    //     title: 'Title',
    //     jobDescription: 'Job description',
        
    //     manager: 'Manage',
    //     compensation: 'Compensation',
    //     paymentMethod: 'Payment',
    //     compensationPeriod: 'Compensation period',
    //     agreementSigned: 'Agreement from',
    //     lastPaymentDate: 'Last Payment date',
    // }


    return (
        <section className={section}>
            <div className={wrapper}>
                <section className={content}>
                    <div className={infoCard}>
                        <EditOutlined className={editIcon} onClick={()=>setIsEdit(!isEdit)}/>
                        <div className='flex mb-10'>
                            <h1 className={nameTitle}>{user.name}</h1>
                        </div>

                        {!isEdit &&<div className={information}>

                            {user && Object.keys(user).map((item,index)=>{

                                if(index > 12 || index===0) return;

                                if(item === 'address') {
                                    return (
                                        <div className={infoItem}>
                                            {/* <span className='w-1/2'>{values[item]}: </span>
                                            <div className={addressContainer}>
                                                <>
                                                    {user[item]}
                                                </>
                                            </div> */}
                                        </div>
                                    )
                                }
                                return (
                                <div className={infoItem}>
                                    {/* <span className='w-1/2'>{values[item]}: </span>
                                    <span className={dataItem}>{user[item]}</span> */}
                                </div>
                            )})}
                        </div>}

                        {isEdit &&<Edit />}
                    </div>

                    

                    <div className={contentCard}>
                        <div className={greeting}>Welcome, {user.name}!</div>
                        <MessagesTable />
                    </div>
                </section>

                <button className={returnBtn}><NavLink to={`/`}>to BRONSKI</NavLink></button>
            </div>
        </section>
    );
};

export default UserInfo;



// const addressItem = 'font-light text-sm ml-2'
// const addressSection = 'flex  text-gray-800 items-center text-[16px] font-normal  text-[#623e2a] font-lato mr-[10px]'
// const addressContainer = 'flex flex-coll'

const infoItem = 'flex text-gray-800 text-[16px] font-normal  text-[#623e2a] font-lato mr-[10px]'
// const dataItem = 'text-gray-600 pl-3 text-sm font-thin font-lato'

const returnBtn = 'max-w-[300px] self-center rounded-lg px-4 py-2 bg-[#9e928c] text-gray-100 hover:bg-[#8a807a] duration-300 font-gilda text-p lg:text-pLg md:text-pMg sm:text-pSm'

const editIcon = 'absolute text-xl top-[88px] right-8'
const greeting = 'flex text-[#623e2a] text-4xl font-light  font-gilda mb-6 pl-20'
const information = 'flex flex-col space-y-2'

const nameTitle =' text-3xl'

const contentCard = 'flex flex-col w-2/3 md:w-full  py-10 m-10 '
const infoCard = 'relative flex flex-col  w-1/3 p-10  pt-20 '

const content = 'flex md:flex-col'
const wrapper = 'flex flex-col items-between w-full max-w-[1440px]'
const section = 'bg-[#ffff] h-full w-screen flex justify-center font-lato items-center'