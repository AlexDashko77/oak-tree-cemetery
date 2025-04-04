import axios from "axios";
import { IContact, IOrganization, IPhoto } from "../interfaces/interfaces";

const API_URL = "https://test-task-api.allfuneral.com";
const getHeaders = (token: string) => ({
    Authorization: `Bearer ${token}`
});

export const getCompanyData = async (token: string): Promise<IOrganization> => {
    const res = await axios.get(`${API_URL}/companies/12`, { headers: getHeaders(token) });
    return res.data;
};

export const deleteCompany = async (token: string) => {
    await axios.delete(`${API_URL}/companies/12`, { headers: getHeaders(token) });
};

export const getContacts = async (token: string): Promise<IContact> => {
    const res = await axios.get(`${API_URL}/contacts/16`, { headers: getHeaders(token) });
    return res.data;
};

export const updateCompany = async (token: string, data: Partial<IOrganization>) => {
    const res = await axios.patch(`${API_URL}/companies/12`, data, { headers: getHeaders(token) });
    return res.data;
};

export const updateContact = async (token: string, contactData: Partial<IContact>) => {
    const res = await axios.patch(`${API_URL}/contacts/16`, contactData, { headers: getHeaders(token) });
    return res.data;
};

export const deleteImage = async (token: string, imgName: string) => {
    await axios.delete(`${API_URL}/companies/12/image/${imgName}`, { headers: getHeaders(token) });
};

export const uploadImage = async (token: string, file: File): Promise<IPhoto> => {
    const formData = new FormData();
    formData.append("file", file);

    const res = await axios.post(`${API_URL}/companies/12/image`, formData, {
        headers: {
            "Content-Type": "multipart/form-data",
            ...getHeaders(token)
        }
    });

    return res.data;
};
