import {create} from 'zustand'
import {devtools} from "zustand/middleware";
import { State } from '../../types/Types';



export const useVacancy = create<State>()(devtools((set) => ({
    vacancies:[
        {
            id: 1,
            title: "Software Engineer",
            text: "Develop and maintain software applications.",
        },
        {
            id: 2,
            title: "Graphic Designer",
            text: "Create visually appealing designs for various media.",
        },
        {
            id: 3,
            title: "Marketing Specialist",
            text: "Plan and execute marketing campaigns to promote products.",
        },
        {
            id: 4,
            title: "Data Analyst",
            text: "Analyze and interpret data to support business decisions.",
        },
        {
            id: 5,
            title: "Customer Support Representative",
            text: "Assist customers with their inquiries and issues.",
        },
        {
            id: 6,
            title: "Project Manager",
            text: "Coordinate and manage projects to ensure successful delivery.",
        },
        {
            id: 7,
            title: "Accountant",
            text: "Handle financial records and prepare financial statements.",
        },
        {
            id: 8,
            title: "Nurse",
            text: "Provide medical care and support to patients.",
        },
        {
            id: 9,
            title: "Teacher",
            text: "Educate and inspire students in various subjects.",
        },
        {
            id: 10,
            title: "Electrician",
            text: "Install and repair electrical systems and equipment.",
        },
    ],

    setVacancy: (data) => set(() => ({vacancies: [...data]})),
})))