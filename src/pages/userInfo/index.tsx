import {NavLink} from "react-router-dom";
import MessagesTable from "./messagesTable.tsx";
import { useUsers } from "../../Store/Users/useUsers.tsx";


const UserInfo = () => {
    const { users } = useUsers()
    return (
        <section className={section}>
            <div className={wrapper}>
                <section className={content}>
                    <div className={infoCard}>
                        <div className={userPhoto}>
                            <img src={users.list[0].img} alt='avatar'/>
                        </div>
                        <h1 className={nameTitle}>{users.list[0].name} {users.list[0].lastName}</h1>
                        <div className={information}>

                            <div className={infoItem}>
                                Address: <span className={dataItem}>{users.list[0].address}</span>
                            </div>

                            <div className={infoItem}>
                                Mobile number: <span className={dataItem}>{users.list[0].phone}</span>
                            </div><br/>

                            <div className={infoItem}>
                                Brief job description: <span className={dataItem}>{users.list[0].briefJobDescription}</span>
                            </div>
                            <div className={infoItem}>
                                Full name of supervisor: <span className={dataItem}>{users.list[0].fullNameOfSupervisor}</span>
                            </div><br/>

                            <div className={infoItem}>
                                Compensation type: <span className={dataItem}>{users.list[0].compensationType}</span>
                            </div>

                            <div className={infoItem}>
                                Method of payment: <span className={dataItem}>{users.list[0].methodOfPayment}</span>
                            </div>

                            <div className={infoItem}>
                                Compensation schedule: <span className={dataItem}>{users.list[0].compensationSchedule}</span>
                            </div>



                            <div className={infoItem}>
                                Last payment date: <span className={dataItem}>{users.list[0].lastPaymentDate}</span>
                            </div>
                        </div>
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


const infoItem = 'flex text-gray-800 text-[16px] font-normal  text-[#623e2a] font-lato mr-[10px] font-bold'
const dataItem = 'text-gray-600 pl-3 text-[16px] font-thin font-lato'

const returnBtn = 'max-w-[300px] self-center rounded-lg px-4 py-2 bg-[#9e928c] text-gray-100 hover:bg-[#8a807a] duration-300 font-gilda text-p lg:text-pLg md:text-pMg sm:text-pSm'


const greeting = 'flex text-[#623e2a] text-4xl font-light  font-gilda mb-6 pl-20'
const information = 'flex flex-col'

const nameTitle ='text-lg text-3xl mx-auto mb-10'
const userPhoto = 'w-[150px] h-[150px] rounded-full mb-4 self-center overflow-hidden'

const contentCard = 'flex flex-col w-2/3 md:w-full  py-10 m-10 '
const infoCard = 'flex flex-col  w-1/3 p-10 px-20'

const content = 'flex md:flex-col'
const wrapper = 'flex flex-col items-between w-full max-w-[1440px]'
const section = 'bg-[#ffff] h-full w-screen flex justify-center font-lato items-center'