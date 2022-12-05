
import { UURL } from "../models/URL.models";

// Create ID and short URL operation

export const createURL = async (id:string, ogUrl:string) => {
    try {
        const newModel = await UURL.create({
            id,
            ogUrl
        })

        // await newTodo.save();
        return newModel.id;
    } catch (error) {
        console.error(error);
    }
}

// Obtain Url through and ID

export const fetchUrlById = async (id:string) => {
    try {
        const urlFetched = await UURL.findByPk(id);

        if (!urlFetched) {
            return "Id not found";
        }

        return urlFetched.ogUrl;
    } catch (error) {
        console.error(error);
    }
}