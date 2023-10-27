// import {NavLink} from "react-router-dom";
// import noAvatar from '../../assets/Images/noavatar.png'
// import EditPost from "../../components/modals/editPost.tsx";
// import { useState} from "react";
// import EditIcon from '@mui/icons-material/Edit';
// import {GridColDef} from "@mui/x-data-grid";
// import {users} from "../../DB/Users.tsx"
// import UserAccounts from "../../components/dataTable/userAccounts.tsx";

// import {Button} from "@mui/material";
import {useUser} from "../../Store/User/useUser.tsx";
import PostsList from "./PostsList.tsx";
import EmployeeList from './EmployeeList.tsx';
import { useState } from 'react';
import CandidatesList from "./CandidatesList.tsx";
import { Link } from "react-router-dom";

const AdminPage = () => {
    const {user } = useUser()
    const [nav, setNav]  = useState(0)

    return (
        <section className={section}>
            <div className='w-screen flex justify-center z-40 shadow'>
                <ul className={navigation}>
                    <Link to='/' className={headerItem +' mr-auto font-black text-blue-900'}>PROPELEM</Link>
                    <li className={nav===0 ? headerItem + ' underline' : headerItem} onClick={()=>setNav(0)}>Employee</li>
                    <li className={nav===1 ? headerItem + ' underline' : headerItem} onClick={()=>setNav(1)}>Vacancies</li>
                    <li className={nav===2 ? headerItem + ' underline' : headerItem} onClick={()=>setNav(2)}>Candidates</li>
                </ul>
            </div>
            
            <div className={wrapper}>
                <div className={adminInfo}>
                    <img src={user.img} alt='logo' className={adminPhoto}/>
                    <div className={dataFields}>
                        <div className={userField}>
                            <div className={userFieldName}>Full name:</div>
                            <div className={dataField}>{user.fullName}</div>
                        </div>
                        <div className={userField}>
                            <div className={userFieldName}>Address:</div>
                            <div className={dataField}>{user.address}</div>
                        </div>
                        <div className={userField}>
                            <div className={userFieldName}>Mobile number:</div>
                            <div className={dataField}>{user.phone}</div>
                        </div>
                        <div className={userField}>
                            <div className={userFieldName}>Brief job description:</div>
                            <div className={dataField}>{user.briefJobDescription}</div>
                        </div>
                        <div className={userField}>
                            <div className={userFieldName}>Compensation type:</div>
                            <div className={dataField}>{user.compensationType}</div>
                        </div>
                        <div className={userField}>
                            <div className={userFieldName}>Method of payment:</div>
                            <div className={dataField}>{user.methodOfPayment}</div>
                        </div>
                        <div className={userField}>
                            <div className={userFieldName}>Compensation schedule:</div>
                            <div className={dataField}>{user.compensationSchedule}</div>
                        </div>
                        <div className={userField}>
                            <div className={userFieldName}>Full name of supervisor:</div>
                            <div className={dataField}>{user.fullNameOfSupervisor}</div>
                        </div>
                        <div className={userField}>
                            <div className={userFieldName}>Last payment date:</div>
                            <div className={dataField}>{user.lastPaymentDate}</div>
                        </div>
                    </div>
                </div>

                <div className={posts}>

                    {nav === 0 &&  <EmployeeList />}
                    {nav === 1 && <PostsList />}
                    {nav === 2 && <CandidatesList />}
                </div>
            </div>
        </section>
    );
};

export default AdminPage;


const headerItem = ' px-4 cursor-pointer hover:underline active:text-gray-500'

const adminPhoto = 'w-[250px] h-[250px] rounded-full'
const dataFields = 'md:items-start'
const userField = 'flex my-[10px] '
const userFieldName = 'text-black text-cardTextP text-[#623e2a] font-lato mr-[10px] font-bold'
const dataField = 'text-black text-cardTextP font-lato'
// const title = 'text-[#623e2a] self-center text-5xl font-light px-[15px] mb-10 font-gilda lg:text-headLg md:text-headMg sm:text-headSm'
// const postItem = 'flex justify-between items-center w-full'
// const blockItem = 'flex flex-col'
// const postName = 'text-black text-[16px] text-start text-[#623e2a] font-lato font-bold'
// const postDescription = 'teFxt-black text-justify text-[16px] font-lato'
// const editBtn = ' cursor-pointer ml-10'
// const userAccounts = 'flex flex-col items-center'
// const accountsHead = 'text-[#623e2a] text-head font-light px-[15px] mb-10 font-gilda lg:text-headLg md:text-headMg sm:text-headSm'
// const goHomeBtn = 'ml-10 max-w-[300px] self-center rounded-lg px-4 py-2 bg-[#9e928c] text-gray-100 hover:bg-[#8a807a] duration-300 font-gilda text-p lg:text-pLg md:text-pMg sm:text-pSm'


const posts = 'flex flex-col w-2/3'
const adminInfo = 'flex flex-col flex-1 bg-[#f3f5fb] items-center py-10 w-1/3 lg:w-full md:mb-10'

const navigation ="flex w-full py-3 items-center justify-center max-w-[1240px] "
const wrapper = 'flex w-full flex-1 max-w-[1440px]'
const section = 'bg-[#ffff] flex-col h-full min-h-screen min-w-screen flex  font-lato'
