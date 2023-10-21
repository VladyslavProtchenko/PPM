import { create } from 'zustand'
import {IUserLogin} from "./interfaces.ts";
import {devtools} from "zustand/middleware";


type State = {
    user: IUserLogin
}

type Actions = {
    setLoginData: (user: IUserLogin) => void
    // setUserOrEmail: (user: string) => void
    // setPassword: (user: string) => void
}


export const useStoreLogin = create<State & Actions>()(devtools((set) => ({
    user: {
        userOrEmail: '',
        password: '',
    },

    setLoginData: (loginuser) => set(state => ({user: {...state.user, ...loginuser}}))


    // setUserOrEmail: (userOrEmail) => set(state=> ({ user: {...state.user,  userOrEmail}})),
    // setPassword: (password) => set(state=> ({ user: {...state.user,  password}})),
})))

