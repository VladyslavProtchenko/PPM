import { create } from 'zustand'
import {devtools} from "zustand/middleware";
import { IUserLogin } from '../../types/Types';


type State = {
    user: IUserLogin
}

type Actions = {
    setLoginData: (user: IUserLogin) => void
}


export const useStoreLogin = create<State & Actions>()(devtools((set) => ({
    user: {
        userOrEmail: '',
        password: '',
    },
    setLoginData: (data) => set(state => ({user: {...state.user, ...data}}))
})))


