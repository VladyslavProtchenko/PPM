import {SubmitHandler, useForm} from "react-hook-form";
import React from "react";
import {IJobOpportunity} from "../../Store/jobOpportunities/interfaces.ts";
import {useStoreJobOpportunity} from "../../Store/jobOpportunities/store.ts";


const JobForm = () => {
    const {register, handleSubmit, formState: {errors}, reset} = useForm<IJobOpportunity>({mode: 'all'});

    const onSubmit: SubmitHandler<IJobOpportunity> = (data) => {
        setJobOpportunity(data)
        reset()
        // setUserName(data.firstName)
        // setLastName(data.lastName)
        // setEmailAddress(data.emailAddress)
        // setPhoneNumber(data.phoneNumber)
        // setAlternativeNumber(data.alternativeNumber)
        // setSocialMedia(data.socialMedia)
        // setMessage(data.message)
    }

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0]
        console.log(selectedFile)
    };

    const {
        setJobOpportunity,
        // setUserName,
        // setLastName,
        // setEmailAddress,
        // setPhoneNumber,
        // setAlternativeNumber,
        // setSocialMedia,
        // setMessage,
    } = useStoreJobOpportunity()


    return (
        <div>
            <div className={wrapper}>
                <form className={formStyles} onSubmit={handleSubmit(onSubmit)}>
                    <div className={block}>
                        <div className={formControl}>
                            <input
                                className={input + `${errors.firstName ? ' border-red-500' : ''}`}
                                type="text"
                                {...register("firstName", {
                                    required: "FirstName is required"
                                })}
                            />
                            <label className={labelStyles}>First Name</label>
                            <p className={errorMessage}>{errors.firstName?.message}</p>
                        </div>
                        <div className={formControl}>
                            <input
                                className={input + `${errors.lastName ? ' border-red-500' : ''}`}
                                type="text"
                                {...register("lastName", {
                                    required: "LastName is required"
                                })}
                            />
                            <label className={labelStyles}>Last Name</label>
                            <p className={errorMessage}>{errors.lastName?.message}</p>
                        </div>
                    </div>

                    <div className={block}>
                        <div className={formControl}>
                            <input
                                className={input + `${errors.emailAddress ? ' border-red-500' : ''}`}
                                type="text"
                                {...register("emailAddress", {
                                    required: "EmailAddress is required"
                                })}
                            />
                            <label className={labelStyles}>Email Address</label>
                            <p className={errorMessage}>{errors.emailAddress?.message}</p>
                        </div>
                        <div className={formControl}>
                            <input
                                className={input + `${errors.phoneNumber ? ' border-red-500' : ''}`}
                                type="text"
                                {...register("phoneNumber", {
                                    required: "PhoneNumber is required"
                                })}
                            />
                            <label className={labelStyles}>Phone Number</label>
                            <p className={errorMessage}>{errors.phoneNumber?.message}</p>
                        </div>
                    </div>

                    <div className={block}>
                        <div className={formControl}>
                            <input
                                className={input + `${errors.alternativeNumber ? ' border-red-500' : ''}`}
                                type="text"
                                {...register("alternativeNumber", {
                                    required: "AlternativeNumber is required"
                                })}
                            />
                            <label className={labelStyles}>Alternate Number or contact</label>
                            <p className={errorMessage}>{errors.alternativeNumber?.message}</p>
                        </div>
                        <div className={formControl}>
                            <input
                                className={input + `${errors.socialMedia ? ' border-red-500' : ''}`}
                                type="text"
                                {...register("socialMedia", {
                                    required: "SocialMedia is required"
                                })}
                            />
                            <label className={labelStyles}>This is Messenger, WhatsApp, Skype?</label>
                            <p className={errorMessage}>{errors.socialMedia?.message}</p>
                        </div>
                    </div>

                    <div className={messageControl}>

                        <input
                            className={input + `${errors.message ? ' border-red-500' : ''}`}
                            type="text"
                            {...register("message", {
                                required: "Message is required"
                            })}
                        />
                        <label className={labelStyles}>Message</label>
                        <p className={errorMessage}>{errors.message?.message}</p>
                    </div>

                    <div className={uploadFileControl}>
                        <label htmlFor="fileInput" className={fileInputLabel}>
                            Upload / Attach Updated Resume (CV)
                        </label>
                        <input
                            id='fileInput'
                            className={fileInput}
                            type="file"
                            {...register("uploadFile", {
                                required: "File is required"
                            })}
                            onChange={handleFileChange}
                        />
                        <p className={errorMessage}>{errors.uploadFile?.message}</p>
                    </div>

                    <button className={submitBtn} type="submit">Submit</button>
                </form>
            </div>

        </div>
    );
};

export default JobForm;

const wrapper = 'flex justify-center items-center w-full h-[700px] lg: px-20'
const formStyles = 'flex flex-col '
const block = 'flex justify-between items-center lg:flex-wrap '
const formControl = 'w-[45%] lg:w-full mb-5 relative'
const messageControl = 'mb-5 relative'
const uploadFileControl = 'mb-7 relative'
const input = 'border-b border-[black] w-full outline-none'
const errorMessage = 'text-red-500 text-[14px] absolute bottom-[-16px] left-0'
const labelStyles = 'font-gilda'
const submitBtn = 'self-center rounded-lg px-4 py-2 w-[150px] bg-gray-600 text-gray-100 hover:bg-gray-700 duration-300 font-gilda font-bold'
const fileInputLabel = 'font-gilda mr-2'
const fileInput = 'self-start'