import {db} from '../firebase-config';
import {
    collection,
    getDocs, 
    getDoc, 
    addDoc, 
    updateDoc, 
    deleteDoc,
    doc
} from 'firebase/firestore';

// database reference based table name
const AdminEmailDataCollectionRef = collection(db,'admin-emails');

// CRUD operation 
class AdminEmailDataService {

    // add new element
    addAdminEmailData = (newPlot) =>  {
         return addDoc(AdminEmailDataCollectionRef, newPlot);
    }

    // update existing element
    updateAdminEmailData = (id,newPlot) =>  {
        const plotDataDoc = doc(db, 'admin-emails',id);
        return updateDoc(plotDataDoc, newPlot);
    }

    // delete existing element
    deleteAdminEmailData = (id) =>  {
        const plotDataDoc = doc(db, 'admin-emails',id);
        return deleteDoc(plotDataDoc);
    }

    // get all elements
    getAllAdminEmailData = () =>  {
        return getDocs(AdminEmailDataCollectionRef);
    }

    // get particular element
    getAdminEmailData = (id) =>  {
        const plotDataDoc = doc(db, 'admin-emails',id);
        return getDoc(plotDataDoc);
    }
}

export default new AdminEmailDataService();

