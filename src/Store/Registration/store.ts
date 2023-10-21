import {create} from 'zustand'
import {IUserRegistration} from "./interfaces.ts";
import {devtools} from "zustand/middleware";


type State = {
    user: IUserRegistration
}

type Actions = {
    // setFirstName: (data: string) => void
    // setLastName: (data: string) => void
    // setEmail: (data: string) => void
    // setPassword: (data: string) => void
    // setConfirmPassword: (data: string) => void

    setRegistration: (data: IUserRegistration) => void
}


export const useStoreRegistration = create<State & Actions>()(devtools((set) => ({
    user: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
    },

    setRegistration: (regData) => set(state => ({user: {...state.user, ...regData}}))
    // setFirstName: (firstName) => set(state => ({user: {...state.user, firstName}})),
    // setLastName: (lastName) => set(state => ({user: {...state.user, lastName}})),
    // setEmail: (email) => set(state => ({user: {...state.user, email}})),
    // setPassword: (password) => set(state => ({user: {...state.user, password}})),
    // setConfirmPassword: (password) => set(state => ({user: {...state.user, password}})),
})))

