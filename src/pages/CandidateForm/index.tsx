import { SubmitHandler, useForm} from "react-hook-form";
import { ICandidate } from "../../types/Types.ts";
import { useNavigate } from "react-router-dom";
import { useCandidate } from "../../Store/Candidate/useCandidate";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { useState } from "react";

type FormData = {
    cv: FileList;
};
const CandidateForm = () => {
    const {candidates, setCandidate} = useCandidate()
    const {register, handleSubmit, formState: {errors}, reset} = useForm<ICandidate  & FormData>({mode: 'all'});
    const navigate = useNavigate()
    const [isPhone, setIsPhone] = useState(false)
    const [phone, setPhone] = useState('')
    const [phone2, setPhone2] = useState('')
    const [messenger, setMessenger] = useState('')
    const [notes, setNotes] = useState('')
    const onSubmit: SubmitHandler<ICandidate & FormData> = (data) => {
        const candidate ={
            ...data,
            phone,
            messenger,
            notes,
            extraPhone: phone2
        }
        console.log(candidate,'data')
        if(!isPhone) return;
        setCandidate({...candidate, cv: data.cv[0], vacancyTitle: candidates.activeVacancy.title, vacancyId: candidates.activeVacancy.id})
        reset()
        navigate('/applied')
    }
    return (
        <div>
            <div className={wrapper}>
                <div className="text-3xl mb-20">
                    Welcome, apply please form for {candidates.activeVacancy.title}  vacancy!
                </div>
                <form className={formStyles} onSubmit={handleSubmit(onSubmit)}>
                    <div className={block}>
                        <div className={formControl}>
                            <input
                                maxLength={20}
                                className={input + `${errors.name ? ' border-red-500' : ''}`}
                                type="text"
                                {...register("name", {
                                    required: "required"
                                })}
                            />
                            <div className='flex items-center space-x-4'>
                                <label className={labelStyles}>First Name</label>
                                <p className={errorMessage}>{errors.name?.message}</p>
                            </div>
                        </div>
                        <div className={formControl}>
                            <input
                                maxLength={20}
                                className={input + `${errors.lastName ? ' border-red-500' : ''}`}
                                type="text"
                                {...register("lastName", {
                                    required: "required"
                                })}
                            />
                            <div className='flex items-center space-x-4'>
                                <label className={labelStyles}>Last Name</label>
                                <p className={errorMessage}>{errors.lastName?.message}</p>
                            </div>
                            
                        </div>
                    </div>

                    <div className={block}>
                        <div className={formControl}>
                            <input
                                maxLength={45}
                                className={input + `${errors.email ? ' border-red-500' : ''}`}
                                type="text"
                                {...register("email", {
                                    required: "Email is required",
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: 'Invalid email address'
                                        }
                                })}
                            />
                            <div className='flex items-center space-x-4'>
                                <label className={labelStyles}>Email Address</label>
                                <p className={errorMessage}>{errors.email?.message}</p>
                            </div>
                            
                        </div>

                        <div className={formControl}>

                            <PhoneInput
                                country={'us'}
                                isValid={(value) => {
                                    (value.length >=11 ) ? setIsPhone(false) : setIsPhone(true)
                                    return true;
                                }}
                                onChange={(v)=>setPhone(v)}
                                inputStyle={{border:'none', fontSize:16}}
                                containerStyle={{borderBottom: '1px solid black', }}
                            />
                            
                            <div className='flex items-center space-x-4'>
                                <label className={labelStyles}>Phone Number</label>
                                {isPhone && <p className={errorMessage}>requires</p>}
                            </div>
                        </div>
                    </div>

                    <div className={block}>
                        <div className={formControl}>
                            <PhoneInput
                                country={'us'}
                                isValid={(value) => {
                                    (value.length >=11 ) ? setIsPhone(false) : setIsPhone(true)
                                    return true;
                                }}
                                onChange={(v)=>setPhone2(v)}
                                inputStyle={{border:'none', fontSize:16}}
                                containerStyle={{borderBottom: '1px solid black', }}
                            />
                            <label className={labelStyles}>Alternate Number or contact</label>
                        </div>
                        <div className={formControl}>
                            <input
                                className={input}
                                type="text"
                                onChange={(e)=>setMessenger(e.target.value)}
                            />
                            <label className={labelStyles}>This is Messenger, WhatsApp, Skype?</label>
                        </div>
                    </div>

                    <div className={messageControl}>
                        <input
                            maxLength={100}
                            className={input}
                            onChange={(e)=>setNotes(e.target.value)}
                        />
                        <label className={labelStyles}>Message</label>
                    </div>
                    <div className={uploadFileControl}>
                        <label htmlFor="fileInput" className={fileInputLabel}>Upload / Attach Updated Resume (CV)</label>
                        <input
                            id='fileInput'
                            className={fileInput}
                            type="file"
                            {...register("cv", {
                                required: "File is required"
                            })}
                        />
                        <p className={errorMessage}>{errors.cv?.message}</p>
                    </div>
                    <button className={submitBtn} type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};


export default CandidateForm;

const wrapper = 'flex flex-col justify-center items-center w-full h-[700px] lg: px-20'
const formStyles = 'flex flex-col '
const block = 'flex justify-between items-center lg:flex-wrap '
const formControl = 'w-[45%] lg:w-full mb-5 relative'
const messageControl = 'mb-5 relative'
const uploadFileControl = 'mb-7 relative'
const input = 'border-b border-[black] w-full outline-none'
const errorMessage = 'text-red-500 text-[14px]'
const labelStyles = 'font-gilda'
const submitBtn = 'self-center rounded-lg px-4 py-2 w-[150px] bg-gray-600 text-gray-100 hover:bg-gray-700 duration-300 font-gilda font-bold'
const fileInputLabel = 'font-gilda mr-2'
const fileInput = 'self-start'