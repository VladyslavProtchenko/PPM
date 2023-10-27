import {create} from 'zustand'
import {devtools} from "zustand/middleware";
import { IUser } from "../../types/Types";


interface IUserProps {
    user: IUser;
    setUser:(data: IUser) => void;
    removeUser:(data: number) => void;
}

export const useUser = create<IUserProps>()(devtools((set) => ({
    user: {
        id: 1,
        name: "",
        email: "",
        phone: "",
        address: '',
        status: '',
        title: '',
        jobDescription: '',
        
        manager: '',
        compensation: '',
        paymentMethod: '',
        compensationPeriod: '',
        agreementSigned:'',//date
        lastPaymentDate: '',//date
    
        signedConfidentiallyAgreement: '',
        workAgreements: '',
        GovtID: '',
        TimeSheetsSubmitted: '',
        ConfirmReceiptPaid: '',//date
    },
    setUser: (data) => set(state => ({user: {...state.user, ...data}})),
    removeUser: () => set(() => ({user: {
        id: 1,
        name: "",
        email: "",
        phone: "",
        address: '',
        status: '',
        title: '',
        jobDescription: '',
        
        manager: '',
        compensation: '',
        paymentMethod: '',
        compensationPeriod: '',
        agreementSigned:'',//date
        lastPaymentDate: '',//date
    
        signedConfidentiallyAgreement: '',
        workAgreements: '',
        GovtID: '',
        TimeSheetsSubmitted: '',
        ConfirmReceiptPaid: '',//date
    }})),
})))


