import { useNavigate } from "react-router-dom";

const Success = () => {
  const navigate = useNavigate();
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <div>Thank you for your response to the vacancy!</div>
      <div>We will contact you!</div>
      <div
        className="mt-10 cursor-pointer font-bold hover:underline"
        onClick={() => {
          navigate("/");
        }}
      >
        Back
      </div>
    </div>
  );
};

export default Success;
