import {create} from 'zustand'
import {devtools} from "zustand/middleware";
import { IUser } from "../../types/Types";

interface IUserProps {
    user: IUser ;
    setUser:(data: IUser) => void;
    removeUser:(data: number) => void;
}

export const useUser = create<IUserProps>()(devtools((set) => ({
    user: {
        id: 1,
        name: "John Doe",
        email: "john@example.com",
        phone: "123-456-7890",
        address:{
            number: "123",
            street: "Main Street",
            apt: "Apt 4B",
            city: "New York",
            state: "NY",
            country: "USA",
            postalCode: "10001",
        },
        status: "Active",
        title: "Software Engineer",
        jobDescription: "Front-end development",
        compensation: "$80,000 per year",
        paymentMethod: "Direct Deposit",
        compensationPeriod: "Monthly",
        agreementSigned: "2023-01-15",
        manager: "Alice Smith",
        lastPaymentDate: "2023-10-15",
        signedConfidentiallyAgreement: "2023-01-10",
        workAgreements: "Full-time, 40 hours per week",
        GovtID: "123-45-6789",
        TimeSheetsSubmitted: "2023-10-25",
        ConfirmReceiptPaid: "2023-10-28",
    },
    setUser: (data) => set(state => ({user: {...state.user, ...data}})),
    removeUser: () => set(() => ({user: 
    {
        id: 0,
        name: "",
        email: "",
        phone: "",
        address:{
            number: "",
            street: "",
            apt: "",
            city: "",
            state: "",
            country: "",
            postalCode: "",
        },
        status: "",
        title: "",
        jobDescription: "",
        compensation: "",
        paymentMethod: "",
        compensationPeriod: "",
        agreementSigned: "",
        manager: "",
        lastPaymentDate: "",
        signedConfidentiallyAgreement: "",
        workAgreements: "",
        GovtID: "",
        TimeSheetsSubmitted: "",
        ConfirmReceiptPaid: "",
    }})),
})))