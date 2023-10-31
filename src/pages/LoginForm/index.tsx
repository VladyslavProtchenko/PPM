import {useForm} from "react-hook-form";
import {useState} from "react";
import {BsEye, BsEyeSlash} from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useUsers } from "../../Store/Users/useUsers.tsx";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate()
    const {register, handleSubmit, formState: {errors}, reset} = useForm<{email:string, password:string}>({
        mode: 'all',
    });
    const { users } = useUsers()

    const onSubmit = (data: {email:string, password:string}) => {
        const user = users.list[0]
        localStorage.setItem('user', JSON.stringify({...user, email: data.email}));
        reset()
        navigate('/profile')
    };

    return (
        <div>
            <div className={wrapper}>
                <div className={formContainer}>
                    <div className={loginHead}>Login</div>
                    <form className={loginFormStyles} onSubmit={handleSubmit(onSubmit)}>
                        <div className={controlBlock}>
                            <label htmlFor="email" className={controlLabel}>Email</label>
                            <input
                                className={controlInput + `${errors.email ? ' border-red-500' : ''}`}
                                type="text"
                                id="email"
                                placeholder="Email"
                                {...register("email", {
                                    required: 'Email is required'
                                })}
                            />
                            <p className={errorMessage}>{errors.email?.message}</p>
                        </div>
                        <div className={controlBlock}>
                            <label htmlFor="password" className={controlLabel}>Password</label>
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

                        <button 
                            className={loginBtn}
                            type="submit"
                        >Login
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;

const wrapper = 'flex justify-center items-center h-screen antialiased bg-[#f4f1ed] text-gray-900 font-sans'
const formContainer = 'flex flex-col w-[70%] bg-white rounded p-8 m-4'
const loginHead = 'text-center block w-full text-p uppercase font-bold mb-4 text-[#c5b7af]'
const loginFormStyles = 'mb-4'
const controlBlock = 'mb-4'
const errorMessage = 'text-red-500 text-[14px]'
const controlLabel = 'text-[20px] text-gray-500 mb-1'
const controlInput = 'w-full border rounded p-2 outline-none focus:shadow-outline'
const passwordWrapper = 'relative'
const passwordIcon = 'absolute top-[25%] right-[3%] text-[22px]'
const loginBtn = 'bg-[#9e928c] hover:bg-[#8a807a] text-white uppercase text-sm font-semibold px-4 py-2 rounded'

