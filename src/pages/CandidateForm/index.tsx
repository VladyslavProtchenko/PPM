import { SubmitHandler, useForm } from "react-hook-form";
import { ICandidate } from "../../types/Types.ts";
import { useNavigate } from "react-router-dom";
import { useCandidate } from "../../Store/Candidate/useCandidate";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useVacancy } from "../../Store/Vacancies/vacancies.tsx";
import { useState } from "react";
import {  AiOutlineFileAdd } from "react-icons/ai";

type FormData = {
  cv: FileList;
};
const CandidateForm = () => {
  const { candidates, setCandidate } = useCandidate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ICandidate & FormData>({ mode: "all" });
  const navigate = useNavigate();
  const [phones, setPhones] = useState({
    phone: "",
    extraContact: "",
  });
  const [isFileSelected, setIsFileSelected] = useState(false);
  const { vacancies } = useVacancy();
  const onSubmit: SubmitHandler<ICandidate & FormData> = async (data) => {
    if (!phones.phone) return;
    console.log(data.cv[0]);
    setCandidate({
      ...candidates,
      ...data,
      cv: {
        name: data.cv[0].name,
        file: await data.cv[0].text(),
        type: data.cv[0].type,
      },
      phone: phones.phone,
      ...(phones?.extraContact && { extraContact: phones.extraContact }),
      vacancyTitle: data.vacancyTitle,
      vacancyId: candidates.activeVacancy.id,
    });

    console.log("data ===>", data);

    reset();
    navigate("/applied");
  };

  const validateFile = (value: FileList) => {
    const allowedFormats = ["pdf", "doc", "docx"];
    const fileExtension = value[0].name.split(".").pop()?.toLowerCase();

    if (!allowedFormats.includes(fileExtension as string)) {
      return "Invalid file format. Please upload a PDF, DOC, or DOCX file.";
    }

    return true;
  };

  const handlePhoneChange = (value: string, field: string) => {
    setPhones((prevState) => ({
      ...prevState,
      [field]: {
        number: value,
        isValid: value.length >= 11, // Or your validation logic
      },
    }));
  };

  return (
    <div>
      <div className={wrapper}>
        <div className="mb-20 text-3xl">
          Welcome, apply please form for {candidates.activeVacancy.title}{" "}
          vacancy!
        </div>
        <form className={formStyles} onSubmit={handleSubmit(onSubmit)}>
          <div className={block}>
            <div className={formControl}>
              <input
                maxLength={20}
                className={input + `${errors.name ? " border-red-500" : ""}`}
                type="text"
                {...register("name", {
                  required: "required",
                })}
              />
              <div className="flex items-center space-x-4">
                <label className={labelStyles}>* First Name</label>
                <p className={errorMessage}>{errors.name?.message}</p>
              </div>
            </div>
            <div className={formControl}>
              <input
                maxLength={20}
                className={
                  input + `${errors.lastName ? " border-red-500" : ""}`
                }
                type="text"
                {...register("lastName", {
                  required: "required",
                })}
              />
              <div className="flex items-center space-x-4">
                <label className={labelStyles}>* Last Name</label>
                <p className={errorMessage}>{errors.lastName?.message}</p>
              </div>
            </div>
          </div>

          <div className={block}>
            <div className={formControl}>
              <input
                maxLength={45}
                className={input + `${errors.email ? " border-red-500" : ""}`}
                type="text"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
              />
              <div className="flex items-center space-x-4">
                <label className={labelStyles}>* Email Address</label>
                <p className={errorMessage}>{errors.email?.message}</p>
              </div>
            </div>

            <div className={formControl}>
              <PhoneInput
                country={"us"}
                isValid={(value) => (phones.phone ? value.length >= 11 : true)}
                onChange={(value) => handlePhoneChange(value, "phone")}
                inputStyle={{ border: "none", fontSize: 16 }}
                containerStyle={{ borderBottom: "1px solid black" }}
              />

              <div className="flex items-center space-x-4">
                <label className={labelStyles}>* Phone Number</label>
                <p className={errorMessage}>requires</p>
              </div>
            </div>
          </div>

          <div className={block}>
            <div className={formControl}>
              <PhoneInput
                country={"us"}
                isValid={(value) =>
                  phones.extraContact ? value.length >= 11 : true
                }
                onChange={(value) => handlePhoneChange(value, "extraContact")}
                inputStyle={{ border: "none", fontSize: 16 }}
                containerStyle={{ borderBottom: "1px solid black" }}
              />
              <label className={labelStyles}>Alternate Number or contact</label>
            </div>
            <div className={formControl}>
              <input
                className={input}
                type="text"
                {...register("messenger", {
                  required: "required",
                })}
              />
              <label className={labelStyles}>
                This is Messenger, WhatsApp, Skype?
              </label>
            </div>
          </div>

          <div className={block}>
            <div className={formControl}>
              <select className={selectStyles} {...register("vacancyTitle")}>
                <option>Select vacancy</option>
                {vacancies.list.map(({ id, title }) => (
                  <option key={id} value={title}>
                    {title}
                  </option>
                ))}
              </select>
              <label className={labelStyles}>* Vacancies</label>
            </div>
            <div className={formControl}>
            <input
              type={"text"}
              maxLength={100}
              className={input}
              {...register("message", {
                required: "required",
              })}
            />
            <label className={labelStyles}>Message</label>
            </div>
            
          </div>
          <div className={block}>
              <label></label>
          </div>

          <div className={uploadFileControl}>
            <label htmlFor="fileInput" className={fileInputLabel}>
              {!isFileSelected
                ? "Upload resume CV"
                : "Uploaded resume CV"}
            <AiOutlineFileAdd className='text-xl mx-2'/>
            </label>
            <input
              id="fileInput"
              className={fileInput}
              type="file"
              accept=".pdf,.doc,.docx"
              {...register("cv", {
                required: "File is required",
                validate: validateFile,
              })}
              onChange={() => setIsFileSelected(true)}
            />
            <p className={errorMessage}>{errors.cv?.message}</p>
          </div>
          
          <button className={submitBtn} type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CandidateForm;

const wrapper =
  "flex flex-col justify-center items-center w-full h-[700px] lg: px-20";
const formStyles = "flex flex-col ";
const block = "flex justify-between items-center lg:flex-wrap ";
const formControl = "w-[45%] lg:w-full mb-5 relative";
const uploadFileControl = "mb-7 relative flex ";
const input = "border-b border-[black] w-full outline-none";
const errorMessage = "text-red-500 text-[14px]";
const labelStyles = "font-gilda";
const submitBtn =
  "self-center rounded-lg px-4 py-2 w-[150px] bg-gray-600 text-gray-100 hover:bg-gray-700 duration-300 font-gilda font-bold";
const fileInputLabel = "flex font-gilda mr-2  cursor-pointer";
const fileInput = "self-start hidden";
const selectStyles = `
  border-b border-[black] w-full outline-none cursor-pointer appearance-none p-2
  bg-white text-gray-800 rounded-md transition duration-300 focus:outline-none focus:border-blue-500
`;
