export interface IMessage {
    id:number,
    userId: number; 
    text: string; 
    from: string,
    isApproved: boolean
}

export interface IUser {
    id: number;
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
export interface IVacancies {
    vacancies:{
        list: IVacancy[];
        isModal: boolean;
        isEditable: number;
        isAdd: boolean;
    } 
    setVacancy: (data: IVacancy) => void
    editVacancy: (data: IVacancy) => void
    removeVacancy: (data: number) => void
    setModal: (data: boolean) => void
    setIsAdd: (data: boolean) => void
    setIsEditable: (data: number) => void
}


export interface ICandidate {
    id:number;
    name: string
    lastName: string
    email: string
    phone: string
    extraContact?: string
    messenger?: string
    message?: string
    cv: File | null
    vacancyTitle: string
    vacancyId: number
}
export interface ICandidates { 
    candidates:{
        candidate:ICandidate;
        list: ICandidate[];
        activeVacancy: {
            title: string
            id:number
        }
    }
    setCandidate: (vacancy: ICandidate) => void;
    setActiveVacancy: (vacancy: {title:string, id:number}) => void;
}

export interface IUserLogin {
    userOrEmail: string
    password: string
    acceptTerms?: boolean | undefined
}

export interface IUsers {
    users: {
        list: IUser[]
    }
    setUsers: (data: IUser[]) => void
    addUser: (data: IUser) => void
    editUser: (data: IUser) => void
    removeUser: (data: number) => void
}