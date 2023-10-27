import {NavLink} from "react-router-dom";
import MessagesTable from "./messagesTable.tsx";
import { useUsers } from "../../Store/Users/useUsers.tsx";
import { EditOutlined } from "@ant-design/icons";
import Edit from "./Edit.tsx";
import { useState } from "react";


const UserInfo = () => {
    const { users } = useUsers()
    const user = users.list[0]
    const [isEdit, setIsEdit] = useState(false)

    return (
        <section className={section}>
            <div className={wrapper}>
                <section className={content}>
                    <div className={infoCard}>
                        <div className='flex items-center mb-10 justify-between'>
                            <h1 className={nameTitle}>{user.name}</h1>
                            <EditOutlined className='text-xl cursor-pointer' onClick={()=>setIsEdit(!isEdit)}/>
                        </div>

                        {!isEdit &&<div className={information}>
                            <div className={infoItem}>
                                email: <span className={dataItem}>{user.email}</span>
                            </div>

                            <div className={infoItem}>
                                Mobile number: <span className={dataItem}>{user.phone}</span>
                            </div><br/>

                            <div className={addressSection}>
                                <div className='flex self-start'>Address:</div>
                                <div className={addressContent}>
                                    {/* <span className={addressItem}>{user.address.number} </span>
                                    <span className={addressItem}>{user.address.street}, </span>
                                    <span className={addressItem}>{user.address.apt}, </span>
                                    <span className={addressItem}>{user.address.city}</span>
                                    <span className={addressItem}>({user.address.state}) </span>
                                    <span className={addressItem}>{user.address.country}, </span>
                                    <span className={addressItem}>{user.address.postalCode}</span> */}
                                </div>
                            </div><br />

                            <div className={infoItem}>
                                status: <span className={dataItem}>{user.status}</span>
                            </div><div className={infoItem}>
                                title: <span className={dataItem}>{user.title}</span>
                            </div><br/>


                            <div className={infoItem}>
                                Brief job description: <span className={dataItem}>{user.jobDescription}</span>
                            </div>

                            <div className={infoItem}>
                                Manager: <span className={dataItem}>{user.manager}</span>
                            </div>
                            <div className={infoItem}>
                                Compensation type: <span className={dataItem}>{user.compensation}</span>
                            </div>
                            <div className={infoItem}>
                                Method of payment: <span className={dataItem}>{user.paymentMethod}</span>
                            </div>
                            <div className={infoItem}>
                                Compensation schedule: <span className={dataItem}>{user.compensationPeriod}</span>
                            </div><br/>

                            <div className={infoItem}>
                                Agreement signed: <span className={dataItem}>{user.agreementSigned}</span>
                            </div>

                            <div className={infoItem}>
                                Signed confidentially agreement: <span className={dataItem}>{user.signedConfidentiallyAgreement}</span>
                            </div>
                            <div className={infoItem}>
                                Last payment date: <span className={dataItem}>{users.list[0].lastPaymentDate}</span>
                            </div>
                        </div>}

                        {isEdit &&<Edit />}
                    </div>

                    

                    <div className={contentCard}>
                        <div className={greeting}>Welcome, {users.list[0].name}!</div>
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
const addressSection = 'flex  text-gray-800 items-center text-[16px] font-normal  text-[#623e2a] font-lato mr-[10px]'
const addressContent = 'flex flex-wrap'

const infoItem = 'flex text-gray-800 text-[16px] font-normal  text-[#623e2a] font-lato mr-[10px] '
const dataItem = 'text-gray-600 pl-3 text-sm font-thin font-lato'

const returnBtn = 'max-w-[300px] self-center rounded-lg px-4 py-2 bg-[#9e928c] text-gray-100 hover:bg-[#8a807a] duration-300 font-gilda text-p lg:text-pLg md:text-pMg sm:text-pSm'


const greeting = 'flex text-[#623e2a] text-4xl font-light  font-gilda mb-6 pl-20'
const information = 'flex flex-col'

const nameTitle =' text-3xl'

const contentCard = 'flex flex-col w-2/3 md:w-full  py-10 m-10 '
const infoCard = 'flex flex-col  w-1/3 p-10  pt-20'

const content = 'flex md:flex-col'
const wrapper = 'flex flex-col items-between w-full max-w-[1440px]'
const section = 'bg-[#ffff] h-full w-screen flex justify-center font-lato items-center'