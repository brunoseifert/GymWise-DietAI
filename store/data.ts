import {create} from 'zustand'

export type User = {
    name:string;
    weight:string;
    age: string;
    height: string;
    level: string;
    objective: string;
    gender: string
}

type DataState = {
    user : User
    setPageOne: (data: Omit<User, "gender" | "objective" | "level">) => void
    setPageTwo: (data: Pick<User, "gender" | "objective" | "level">) => void
}

export const userDataStore = create<DataState>((set) => ({
    user: {
        name: "",
        age: "",
        gender: "",
        height: "",
        level:"",
        objective:"",
        weight:""
    },
    setPageOne: (data) => set((state) => ({user: {...state.user,...data}})),
    setPageTwo: (data) => set((state) => ({user: {...state.user,...data}}))
}))