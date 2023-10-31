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
import MainPageEdit from "./MainPageEdit.tsx";

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
                    <li className={nav===2 ? headerItem + ' underline' : headerItem} onClick={()=>setNav(3)}>Edit main page</li>
                </ul>
            </div>
            
            <div className={wrapper}>
                <div className={adminInfo}>
                    <div className={dataFields}>
                        <div className={userField}>
                            <div className={userFieldName}>Full name:</div>
                            <div className={dataField}>{user.name}</div>
                        </div>
                        <div className={userField}>
                            <div className={userFieldName}>Address:</div>
                            <div className={dataField}>{user.address.street}</div>
                        </div>
                        <div className={userField}>
                            <div className={userFieldName}>Mobile number:</div>
                            <div className={dataField}>{user.phone}</div>
                        </div>
                        <div className={userField}>
                            <div className={userFieldName}>Brief job description:</div>
                            <div className={dataField}>{user.jobDescription}</div>
                        </div>
                        <div className={userField}>
                            <div className={userFieldName}>Compensation type:</div>
                            <div className={dataField}>{user.compensation}</div>
                        </div>
                        <div className={userField}>
                            <div className={userFieldName}>Method of payment:</div>
                            <div className={dataField}>{user.paymentMethod}</div>
                        </div>
                        <div className={userField}>
                            <div className={userFieldName}>Compensation schedule:</div>
                            <div className={dataField}>{user.compensationPeriod}</div>
                        </div>
                        <div className={userField}>
                            <div className={userFieldName}>Full name of supervisor:</div>
                            <div className={dataField}>{user.manager}</div>
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
                    {nav === 3 && <MainPageEdit />}
                </div>
            </div>
        </section>
    );
};

export default AdminPage;


const headerItem = ' px-4 cursor-pointer hover:underline active:text-gray-500'

const dataFields = 'md:items-start'
const userField = 'flex my-[10px] '
const userFieldName = 'text-black text-cardTextP text-[#623e2a] font-lato mr-[10px] font-bold'
const dataField = 'text-black text-cardTextP font-lato'


const posts = 'flex flex-col w-2/3'
const adminInfo = 'flex flex-col flex-1 bg-[#f3f5fb] items-center py-10 w-1/3 lg:w-full md:mb-10'

const navigation ="flex w-full py-3 items-center justify-center max-w-[1240px] "
const wrapper = 'flex w-full flex-1 max-w-[1440px]'
const section = 'bg-[#ffff] flex-col h-full min-h-screen min-w-screen flex  font-lato'
