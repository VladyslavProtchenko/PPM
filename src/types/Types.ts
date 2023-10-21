export interface IMessage {
    id:number,
    userId: number; 
    text: string; 
    from: string,
    isApproved: boolean
}

export interface IUser {
    id: number | null;
    name: string;
    lastName: string;
    img: string;
    email: string
    phone: string;
    createdAt: string;
    verified: boolean;
    fullName: string;
    address: string;
    title: string;
    briefJobDescription: string;
    compensationType: string;
    methodOfPayment: string;
    compensationSchedule: string;
    fullNameOfSupervisor: string;
    lastPaymentDate: string;
}

export interface Posts {
    id: number | null,
    title: string,
    content: string,
    isActive?: boolean
}

export interface EditProps {
    post: Posts,
    modalOpen: boolean,
    setModalOpen: (data: boolean) => void
}

export type IVacancy = {
    id: number;
    title: string;
    text: string;
}
export type State = {
    vacancies: IVacancy[];
    setVacancy: (data: IVacancy[]) => void
}