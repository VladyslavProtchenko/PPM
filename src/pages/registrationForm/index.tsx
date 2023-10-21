import {useForm} from "react-hook-form";
import {useState} from "react";
import {BsEye, BsEyeSlash} from "react-icons/bs";
import {IUserRegistration} from "../../Store/Registration/interfaces.ts";
import {useStoreRegistration} from "../../Store/Registration/store.ts";
import { Link } from "react-router-dom";


const Registration = () => {
    const [showPassword, setShowPassword] = useState(false);

    const {register, handleSubmit, formState: {errors}, watch, reset} = useForm<IUserRegistration>({mode: 'all'});

    const { setRegistration } = useStoreRegistration()

    const onSubmit = (data: IUserRegistration) => {
        setRegistration(data)
        reset()
    };

    return (
        <div>
            <div className={wrapper}>
                <div className={formContainer}>
                    <div className={loginHead}>Registration</div>
                    <form className={loginForm} onSubmit={handleSubmit(onSubmit)}>

                        <div className={controlBlock}>
                            <label className={controlLabel}>First name</label>
                            <input
                                className={controlInput + `${errors.firstName ? ' border-red-500' : ''}`}
                                type="text"
                                placeholder="Username or Email"
                                {...register("firstName", {
                                    required: "FirstName is required"
                                })}
                            />
                            <p className={errorMessage}>{errors.firstName?.message}</p>
                        </div>

                        <div className={controlBlock}>
                            <label className={controlLabel}>Last name</label>
                            <input
                                className={controlInput + `${errors.lastName ? ' border-red-500' : ''}`}
                                type="text"
                                placeholder="Username or Email"
                                {...register("lastName", {
                                    required: "LastName is required"
                                })}
                            />
                            <p className={errorMessage}>{errors.lastName?.message}</p>
                        </div>

                        <div className={controlBlock}>
                            <label className={controlLabel}>Email</label>
                            <input
                                className={controlInput + `${errors.email ? ' border-red-500' : ''}`}
                                type="email"
                                placeholder="Username or Email"
                                {...register("email", {
                                    required: "Email is required",
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: 'Email is required'
                                    }
                                })}
                            />
                            <p className={errorMessage}>{errors.email?.message}</p>
                        </div>

                        <div className={controlBlock}>
                            <label className={controlLabel}>Password</label>
                            <div className={passwordWrapper}>
                                <input
                                    className={controlInput + `${errors.password ? ' border-red-500' : ''}`}
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder="Password"
                                    {...register("password", {
                                        required: 'Password is required',
                                        minLength: {value: 8, message: 'Password must be at least 8 characters'},
                                        maxLength: {value: 20, message: 'Password must be not longer than 20 characters'},
                                        validate: {
                                            pattern1: (value) =>
                                                /[0-9]/.test(value) || 'At least 1 number (0...9)',
                                            pattern2: (value) =>
                                                /[a-z]/.test(value) || 'At least 1 lowercase letter (a...z)',
                                            pattern3: (value) =>
                                                /[A-Z]/.test(value) || 'At least 1 uppercase letter (A...Z)',
                                            pattern4: (value) =>
                                                /[^A-Za-z0-9]/.test(value) || 'At least 1 special symbol (!...$)',
                                        },
                                    })}
                                />
                                {!showPassword
                                    ? <BsEyeSlash className={passwordIcon} onClick={() => setShowPassword(true)}/>
                                    : <BsEye className={passwordIcon} onClick={() => setShowPassword(false)}/>
                                }
                            </div>
                            <p className={errorMessage}>{errors.password?.message}</p>
                        </div>

                        <div className={controlBlock}>
                            <label className={controlLabel}>Confirm password</label>
                            <div className={passwordWrapper}>
                                <input
                                    className={controlInput + `${errors.confirmPassword ? ' border-red-500' : ''}`}
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder="Password"
                                    {...register("confirmPassword", {
                                        required: 'Please confirm your password',
                                        validate: (value) => {
                                            if (watch('password') != value) {
                                                return "Your passwords do no match";
                                            }
                                        }
                                    })}
                                />
                                {!showPassword
                                    ? <BsEyeSlash className={passwordIcon} onClick={() => setShowPassword(true)}/>
                                    : <BsEye className={passwordIcon} onClick={() => setShowPassword(false)}/>
                                }
                            </div>
                            <p className={errorMessage}>{errors.confirmPassword?.message}</p>
                        </div>

                        <div className={termsBlock}>
                            <input
                                type="checkbox"
                                className={termsInput}
                                {...register("acceptTerms", {
                                    required: 'Accept Terms is required'
                                })}
                            />
                            <div className={termsTextBlock}>
                                <div className={termsText}>Acceptance of Terms Of Use</div>
                                <p className={errorMessage}>{errors.acceptTerms?.message}</p>
                            </div>
                        </div>

                        <Link 
                            to={'/profile'}
                            className={registrationBtn}
                            type="submit"
                        >Registration
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Registration;

const wrapper = 'flex justify-center items-center h-screen antialiased bg-[#f4f1ed] text-gray-900 font-sans h-[100%]'
const formContainer = 'flex flex-col w-[70%] bg-white rounded p-8 m-4'
const loginHead = 'text-center block w-full text-p uppercase font-bold mb-4 text-[#c5b7af]'
const loginForm = 'mb-4'
const controlBlock = 'mb-6 relative'
const errorMessage = 'text-red-500 text-[14px] absolute bottom-[-20px] left-0'
const termsBlock = 'flex items-center mb-6'
const termsInput = 'border-gray-300 rounded h-[16px] w-[16px]'
const termsTextBlock = 'flex flex-col ml-2 relative'
const termsText = 'text-gray-500'
const controlLabel = 'text-[20px] text-gray-500 mb-1'
const controlInput = 'w-full border rounded p-2 outline-none focus:shadow-outline'
const passwordWrapper = 'relative'
const passwordIcon = 'absolute top-[25%] right-[3%] text-[22px]'
const registrationBtn = 'bg-[#9e928c] hover:bg-[#8a807a] text-white uppercase text-sm font-semibold px-4 py-2 rounded'

