export interface IState {
    list:IMedecine[]
    currentFilter:string
}

export interface IMedecine {
    id:string
    name:string
    price:number
}

export type InputMedicine = Omit<IMedecine, 'id'>