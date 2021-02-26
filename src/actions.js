import { firebaseApp } from "./firebase";
import firebase from "firebase/app";
require('firebase/firestore');

const db = firebase.firestore(firebaseApp);

export const getCollection = async(collection)=>{
    const result = {statusResponse : false, data: [], error : null};
    try {
        const data = await db.collection(collection).get();
        const arrayData = data.docs.map(doc => ({id : doc.id, ...doc.data()}));
        result.statusResponse = true;
        result.data = arrayData;
    } catch (error) {
        result.error = error;
    }
    return result;
}

export const addDocument = async(collection, data)=>{
    const result = {statusResponse : false, error : null};
    try {
        const r = await db.collection(collection).add(data);
        console.log(r);
        result.statusResponse = true;
    } catch (error) {
        result.error = error;
    }

    return result;
}

export const deleteDocument = async (collection, id)=>{
    const result = {statusResponse : false, error : null};
    try {
        await db.collection(collection).doc(id).delete(id);
        result.statusResponse = true;
    } catch (error) {
        result.error = error;
    }
    return result;
}