import { flow, makeAutoObservable, runInAction } from "mobx";
import { IContact, IOrganization, IPhoto } from "../interfaces/interfaces";
import { formatPhone } from "../utils/utils";
import {
    getCompanyData, deleteCompany, getContacts, updateCompany, updateContact,
    deleteImage, uploadImage
} from "../api/company";

class Store {
    constructor() {
        makeAutoObservable(this)
    }
    [key: string]: any
    isCompanyExist: boolean = true
    organizationData: IOrganization | null = null
    contacts: IContact | null = null
    isRemoveOpen: boolean = false
    isUpdateOpen: boolean = false
    token:string =  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiVVNFUk5BTUUiLCJpYXQiOjE3NDM2MTE3NzcsImV4cCI6MTc0NDIxNjU3N30.qqmgBZWmaHFECD3KqbCxxyUpiNdGzX5VWS-Jw4WE6qU"
    nameOrg:string = ""
    agreement: string = ""
    date: string = ""
    bussinessEntity: string = ""
    companyType: string = "Funeral Home, Logistics services"
    person: string = ""
    phone: string = ""
    email: string = ""
    photos: IPhoto[] = []

    isUploadModalOpen = false;
    image: File | null = null;
    preview: string | null = null;

    changeState = (key:string, value: any) => {
        this[key] = value;
    }

    getData = flow(function* (this: Store) {
        try {
            this.organizationData = yield getCompanyData(this.token);
            this.photos = this.organizationData?.photos || [];
            this.saveCompany();
        } catch (err) {
            console.error(err);
        }
    });

    deleteCompany = flow(function* (this:Store) {
        try {
            yield deleteCompany(this.token);
            this.isCompanyExist = false;
        } catch (err) {
            console.error(err);
        }
    });

    getContacts = flow(function* (this: Store) {
        try {
            this.contacts = yield getContacts(this.token);
            this.saveContacts();
        } catch (err) {
            console.error(err);
        }
    });

    updateCompany = flow(function*(this: Store) {
        try {
            this.organizationData = yield updateCompany(this.token, {
                name: this.nameOrg,
                businessEntity: this.bussinessEntity,
                contract: {
                    no: this.agreement,
                    issue_date: this.date
                }
            });
        } catch (err) {
            console.error("Ошибка при обновлении компании:", err);
        }
    });
    updateContact = flow(function* (this:Store) {
        try {
            this.contacts = yield updateContact(this.token, {
                firstname: this.person.split(" ")[0],
                lastname: this.person.split(" ")[1],
                email: this.email,
                phone: formatPhone(this.phone)
            });
        } catch (err) {
            console.error("Ошибка при обновлении контактов:", err);
        }
    });
    deleteImage = flow(function* (this: Store, imgName: string) {
        try {
            yield deleteImage(this.token, imgName); // Асинхронная операция
            this.photos = this.photos.filter((el) => el.name !== imgName); // Обновление состояния
        } catch (err) {
            console.error("Ошибка при удалении фото:", err); // Логирование ошибки
        }
    });

    uploadImage = async () => {
        if (!this.image) return;
        
        try {
            const newPhoto = await uploadImage(this.token, this.image); 
            runInAction(() => {
                this.photos.push(newPhoto);
                this.closeUploadModal(); 
            });
        } catch (error) {
            console.error(error); 
        } 
    };

    saveCompany = () => {
        this.nameOrg = this.organizationData?.name || ""
        this.agreement = this.organizationData?.contract.no || ""
        this.date = this.organizationData?.contract.issue_date || ""
        this.bussinessEntity = this.organizationData?.businessEntity || ""
    }
    saveContacts = () => {
        this.person = this.contacts?.firstname + " " + this.contacts?.lastname || ""
        this.phone = this.contacts?.phone || ""
        this.email = this.contacts?.email || ""
    }

   
    
   
    closeUploadModal = () => {
        this.isUploadModalOpen = false;
        this.image = null;
        this.preview = null;
    }
    setImage = (file: File) => {
        this.image = file;
        this.preview = URL.createObjectURL(file);
    }
    
}

export default new Store()