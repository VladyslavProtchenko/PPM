export interface IMessage {
  id: number;
  userId: number;
  text: string;
  from: string;
  isApproved: boolean;
}
export interface IContent {
  section: number;
  title?: string;
  title2?: string;
  text?: string;
  text2?: string;
}

export interface IAdmin {
  id: number;
  name: string;
  email: string;
  phone: string;
  status?: string;
  jobDescription: string;
}
export interface IUser {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: {
    number: string;
    street: string;
    apt: string;
    city: string;
    state: string;
    country: string;
    postalCode: string;
  };
  status: string;
  title: string;
  jobDescription: string;

  manager: string;
  compensation: string;
  paymentMethod: string;
  compensationPeriod: string;
  agreementSigned: string; //date
  lastPaymentDate: string; //date

  signedConfidentiallyAgreement: string;
  workAgreements: string;
  GovtID: string;
  TimeSheetsSubmitted: string;
  ConfirmReceiptPaid: string; //date
}

export interface Posts {
  id: number | null;
  title: string;
  content: string;
  isActive?: boolean;
}

export interface EditProps {
  post: Posts;
  modalOpen: boolean;
  setModalOpen: (data: boolean) => void;
}

export type IVacancy = {
  id: number;
  title: string;
  text: string;
};
export interface IVacancies {
  vacancies: {
    list: IVacancy[];
    isModal: boolean;
    editedVacancy: IVacancy;
    isAdd: boolean;
  };
  setVacancy: (data: IVacancy) => void;
  editVacancy: (data: IVacancy) => void;
  removeVacancy: (data: number) => void;
  setModal: (data: boolean) => void;
  setIsAdd: (data: boolean) => void;
  setIsEditable: (data: number) => void;
}

export interface ICandidate {
  id: number;
  name: string;
  lastName: string;
  email: string;
  phone: string;
  extraContact?: string;
  messenger?: string;
  message?: string;
  cv: File | null | { name: string; file: string; type: string };
  vacancyTitle: string;
  vacancyId: number;
}
export interface ICandidates {
  candidates: {
    candidate: ICandidate;
    list: ICandidate[];
    activeVacancy: {
      title: string;
      id: number;
    };
  };
  setCandidate: (vacancy: ICandidate) => void;
  setActiveVacancy: (vacancy: { title: string; id: number }) => void;
}

export interface IUsers {
  users: {
    list: IUser[];
  };
  setUsers: (data: IUser[]) => void;
  addUser: (data: IUser) => void;
  editUser: (data: IUser) => void;
  removeUser: (data: number) => void;
}
