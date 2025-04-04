export interface IInput {
    value: string
    onChange: (value: string) => void
    minLength?: number
    maxLength?: number
    type?: string
}
export interface IDropdown {
    value?: string;
    onChange: (value: string) => void;
}
export interface IImage {
    filepath: string
    name: string
}
export interface IOrganization {
    businessEntity: string
    contactId: string
    contract: IContract
    type: string[]
    id: string
    name: string
    photos: IPhoto[]
}

export interface IContact {
    email: string
    firstname: string
    id: string
    lastname: string
    phone:string
}

export interface IContract {
    no: string
    issue_date: string
}

export interface IPhoto {
    filepath: string
    name: string
    thumbpath: string
}