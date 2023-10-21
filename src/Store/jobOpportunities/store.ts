import {create} from 'zustand'
import {IJobOpportunity} from "./interfaces.ts";
import {devtools} from "zustand/middleware";

type State = {
    candidates: IJobOpportunity[]
}

type Actions = {
    setJobOpportunity: (data: IJobOpportunity) => void

    // setUserName: (data: string) => void
    // setLastName: (data: string) => void
    // setEmailAddress: (data: string) => void
    // setPhoneNumber: (data: string) => void
    // setAlternativeNumber: (data: string) => void
    // setSocialMedia: (data: string) => void
    // setMessage: (data: string) => void
    // setMessage: (data: string) => void
}



export const useStoreJobOpportunity = create<State & Actions>()(devtools((set) => ({
    candidates: [],

    setJobOpportunity: (candidate) => set(state => ({candidates: [...state.candidates, candidate]}))

    // setUserName: (firstName) => set((state) => ({ candidate: {...state.candidate, firstName }})),
    // setLastName: (lastName) => set((state) => ({ candidate: {...state.candidate, lastName }})),
    // setEmailAddress: (emailAddress) => set((state) => ({ candidate: {...state.candidate, emailAddress }})),
    // setPhoneNumber: (phoneNumber) => set((state) => ({ candidate: {...state.candidate, phoneNumber }})),
    // setAlternativeNumber: (alternativeNumber) => set((state) => ({ candidate: {...state.candidate, alternativeNumber }})),
    // setSocialMedia: (socialMedia) => set((state) => ({ candidate: {...state.candidate, socialMedia }})),
    // setMessage: (message) => set((state) => ({ candidate: {...state.candidate, message }})),
    // setMessage: (message) => set((state) => ({ candidate: {...state.candidate, uploadFile }})),
})))

