import { NavLink } from 'react-router-dom';
import bg from '../../assets/Images/bg-1.webp'
import bg2 from '../../assets/Images/bg-2.webp'
import bg3 from '../../assets/Images/bg-3.webp'
import bg4 from '../../assets/Images/bg-4.webp'
import GoogleMaps from "./officeplace";
import iconEmail from "../../assets/Icons/email.svg";
import iconPhone from "../../assets/Icons/phone.svg";
import iconPlace from "../../assets/Icons/place.svg";
import { useVacancy } from '../../Store/Vacancies/vacancies';
import { useCandidate } from '../../Store/Candidate/useCandidate';
import { useMainPage } from '../../Store/MainPage/useMainPage';

const MainPage = () => {
    const { vacancies } =useVacancy()
    const {candidates } =useCandidate()
    const { content } = useMainPage()

    const officeInfo = [
        {
            id: 'place',
            img: iconPlace,
            info: '4540 Campus Drive, Suite 500\n' +
                '\n' +
                'Newport Beach, CA 92660'
        },
        {
            id: 'phone',
            img: iconPhone,
            info: '949-779-2300'
        },
        {
            id: 'email',
            img: iconEmail,
            info: 'office@propelem.com'
        }
    ]
    console.log(candidates.activeVacancy)
    return (
        <section className={container}>
            <section className={section} style={{ backgroundImage: `url(${bg}` }}>
                <div className={wrapper}>
                    <h1 className={title}>{content[0].title}</h1>
                    <h2 className={text}>{content[0].text}</h2>
                </div>
            </section>

            <section className={section+ ' pt-28 pb-14'}>
                <div className={wrapper}>
                    <h1 className={title2}>{content[1].title}</h1>
                    <p className={text2}>{content[1].text}</p>
                </div>
            </section>

            <section className={section+ ' pt-28 pb-14'} style={{ backgroundImage: `url(${bg2}` }}>
                <div className={wrapper}>
                    <h1 className={title3}>{content[2].title}<br/>{content[2].title2}</h1>
                    <h2 className={text3}>{content[2].text}</h2>
                    <h2 className={text3}>{content[2].text2}</h2>
                </div>
            </section>

            <section className={section+ ' pt-28 pb-14'}>
                <div className={wrapper}>
                    <h1 className={title2}>{content[3].title}</h1>
                    <h2 className={text2}>{content[3].text}</h2>
                    <h2 className={text2}>{content[3].text2}</h2>
                </div>
            </section>

            <section className={section+ ' pt-28 pb-14'} style={{ backgroundImage: `url(${bg3}` }}>
                <div className={wrapper}>
                    <h1 className={title4}>{content[4].title}</h1>
                    <h2 className={text4}>{content[4].text}</h2>
                </div>
            </section>


            <section className={section+ ' pt-28 pb-14'}>
                <div className={wrapper}>
                    <h1 className={title5}>{content[5].title}</h1>
                    <h2 className={text5}>{content[5].text}</h2>
                    <h2 className={text5}>{content[5].text2}</h2>
                </div>
            </section>


            <section className={section+ ' pt-28 pb-14'} style={{ backgroundImage: `url(${bg4}` }}>
                <div className={wrapper2}>
                    <h1 className={title6}>Tatiana</h1>
                </div>
            </section>


            <section className={section+ ' pt-28 pb-14'} >
                <div className={wrapper3}>
                    <h1 className={title8}>Job Opportunities</h1>
                    <div className={itemsContainer}>
                        {vacancies.list.map((item) =>(
                                <div className={jobCard} key={item.id}>
                                    <h1 className={jobName}><NavLink to={`vacancy`}>{item.title}</NavLink></h1>
                                    <h2 className={jobDescription}>{item.text}</h2>
                                    
                                </div>
                            )
                        )}
                    </div>
                    <NavLink  className={applyBtn} to={`/form`}>apply</NavLink>
                    
                </div>
            </section>

            <section className={footerSection}>
                <div className={wrapper}>
                    <h1 className={title7}>So what are you waiting for?</h1>
                    <h2 className={text7}>Let Propel be your guide to success and help your business reach new heights!</h2>
                    <div className={infoContainer}>
                        <div className={infoItem}>
                            <h2 className={cardHead}>Corporate Office</h2>
                            {officeInfo.map((info) =>
                                <div key={info.id} className={officeInfoItem}>
                                    <img className={imgItem} src={info.img} alt={info.id} />
                                    <div className={textItem}>{info.info}</div>
                                </div>
                            )}
                        </div>
                        <div className={infoItemPlace}>
                            <GoogleMaps />
                        </div>
                        <div className={infoItem}>
                            <h2 className={cardHead}>By Appointment Only</h2>
                            <div className={textItem +' mb-2'}>Monday to Friday</div>
                            <div className={textItem}>M9:00 am to 4:00 pm</div>

                        </div>
                    </div>
                    <div className={loginBlock}>
                        <h2 className={textFooter1}>Propel, Inc.</h2>
                        <NavLink className={loginBtn} to={`/login`}>Login</NavLink>
                        <NavLink className={loginBtn} to={`/registration`}>Registration</NavLink>
                        <NavLink className={loginBtn} to={`/profile`}>userInfo</NavLink>
                        <NavLink className={loginBtn} to={`/admin`}>AdminPage</NavLink>
                    </div>
                    <h2 className={textFooter2}>© 2020-2023  | <NavLink to={`/policy`}>Legal Notices</NavLink></h2>
                </div>
            </section>
        </section>

    );
};

export default MainPage;


const footerSection = 'bg-[#c5b7af] h-[770px] w-screen flex justify-center pt-20 pb-14 font-lato xl:h-[1350px] md:h-[100%]'
const title7 = 'text-[#f4f1ed] text-6xl font-thin text-center mb-8 px-[4%] font-gilda lg:text-headLg md:text-headMg sm:text-headSm'
const text7 = 'text-[#f4f1ed] text-2xl text-justify self-center px-[4%] mb-20 text-[#623e2a] font-gilda md:text-pMg sm:text-pSm'
const infoContainer = 'flex justify-between items-center mb-10 xl:flex-col'
const infoItem = 'flex-col justify-center items-start max-w-[360px] w-full h-[260px] px-8 py-6 border border-white'
const infoItemPlace = 'flex justify-center items-center max-w-[360px] w-full h-[260px] border border-white xl:my-[30px]'
const loginBlock = 'flex justify-center items-center mt-[40px] mb-[10px]'
const loginBtn = 'ml-10 rounded-lg px-4 py-2 bg-[#9e928c] text-gray-100 hover:bg-[#8a807a] duration-300 font-gilda text-p'
const textFooter1 = 'text-[#f4f1ed] text-textFooter font-light text-center font-gilda lg:text-textFooterLg md:text-textFooterMg sm:text-textFooterSm'
const textFooter2 = 'text-[#f4f1ed] text-p font-light text-center font-gilda lg:text-pLg md:text-pMg sm:text-pSm'

const wrapper3 = 'flex flex-col items-center w-full max-w-[1240px]'
const itemsContainer = 'flex flex-wrap justify-between'
const jobCard = 'flex-col items-center w-[32%]  mb-4 shadow  bg-white py-4'
const jobName = 'text-black text-4xl text-center my-5  font-gilda hover:underline'
const jobDescription = 'text-black text-center text-cardTextP font-gilda'
const applyBtn = 'py-2  px-8 rounded shadow hover:bg-gray-50 active:bg-[#8a807a] border text-black   font-gilda'


const title8 = 'text-[#623e2a] text-7xl font-light mb-10 px-[4%] font-gilda lg:text-headLg self-center md:text-headMg sm:text-headSm'

const cardHead = 'text-[#f4f1ed] text-3xl text-justify self-center  mb-6 text-[#623e2a] font-gilda'
const officeInfoItem = 'flex justify-start items-center mb-6'
const textItem = 'text-[#f4f1ed] text-cardTextP  max-w-[270px] font-gilda'
const imgItem = 'w-5 h-5 mr-4'

const wrapper2 = 'flex justify-start items-end w-full max-w-[1240px]'
const title6 = 'text-[#efebe5] text-8xl font-dancing-script mb-3'


const title5 = 'text-[#656566] text-7xl  font-light text-center mb-20 px-[4%] font-gilda lg:text-headLg md:text-headMg sm:text-headSm'
const text5 = 'text-[#656566] text-2xl leading-10 text-justify self-center px-[4%] mb-10 font-gilda lg:text-pLg md:text-pMg sm:text-pSm'

const title4 = 'text-[#c5b7af] text-7xl mt-14  font-light w-[42%] px-[4%] mb-16 self-end text-end font-gilda lg:text-headLg md:text-headMg sm:text-headSm '
const text4 = 'px-[4%] w-1/2 text-2xl leading-10 font-light text-justify mb-16 tracking-wider leading-[40px] text-[#c5b7af] self-end font-gilda lg:text-pLg md:text-pMg sm:text-pSm'

const title3 = 'text-[#dec3a8] text-7xl font-light w-2/3 px-[4%] mb-16 font-gilda lg:text-headLg  md:text-headMg sm:text-headSm'
const text3 = 'px-[4%] w-1/2 leading-10 text-2xl font-light text-justify mb-8 text-[#dec3a8] font-gilda md:text-pMg sm:text-pSm '

const title2 = 'text-7xl font-light text-center mb-20 px-[4%] text-[#623e2a] font-gilda lg:text-headLg self-center md:text-headMg sm:text-headSm'
const text2 = 'text-2xl text-justify leading-10 self-center px-[4%] mb-10 text-[#623e2a] font-gilda md:text-pMg sm:text-pSm'

const container = 'flex flex-col w-screen h-full'
const section = 'flex justify-center w-screen min-h-[770px] bg-cover bg-no-repeat py-4 bg-center font-lato lg:items-center'
const wrapper = 'flex flex-col w-full max-w-[1240px]'
const title = 'font-bold text-white uppercase tracking-[.6em] text-[26px] lg:self-center'
const text = 'text-7xl w-1/2 text-gray-400  font-light mt-[200px] text-center px-[4%] font-gilda lg:w-full'