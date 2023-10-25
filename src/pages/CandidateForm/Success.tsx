import { useNavigate } from "react-router-dom";

const Success = () => {
    const navigate = useNavigate()
    return (
        <div className="w-screen h-screen flex flex-col items-center justify-center">
            <div>Thank you for your response to the vacancy!</div>
            <div>We will contact you!</div>
            <div
                className='cursor-pointer hover:underline font-bold mt-10'
                onClick={()=>{
                    navigate('/')
                }}
            >Back</div>
        </div>
    );
};

export default Success;