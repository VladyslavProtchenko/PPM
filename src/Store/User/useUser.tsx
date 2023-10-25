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
        img: "https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        lastName: "Hubbard",
        name: "Eula",
        email: "kewez@@gmail.com",
        phone: "123 456 789",
        createdAt: "01.02.2023",
        verified: true,
        fullName: "Hubbard Eula",
        address: 'Lviv, Ukraine',
        title: 'profileInformation',
        briefJobDescription: '',
        compensationType: 'fixed rate',
        methodOfPayment: 'Payoneer',
        compensationSchedule: 'weekly',
        fullNameOfSupervisor: 'new',
        lastPaymentDate: '07/09/2023',
    },
    setUser: (data) => set(state => ({user: {...state.user, ...data}})),
    removeUser: () => set(() => ({user: {
        id: 1,
        img: "",
        lastName: "",
        name: "",
        email: "",
        phone: "",
        createdAt: "",
        verified: true,
        fullName: "",
        address: '',
        title: '',
        briefJobDescription: '',
        compensationType: '',
        methodOfPayment: '',
        compensationSchedule: '',
        fullNameOfSupervisor: '',
        lastPaymentDate: '',
    }})),
})))


