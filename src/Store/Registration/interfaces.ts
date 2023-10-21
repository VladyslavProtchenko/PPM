export interface IUserRegistration {
    firstName: string
    lastName: string
    email: string
    password: string
    confirmPassword?: string | undefined
    acceptTerms?: boolean | undefined
}