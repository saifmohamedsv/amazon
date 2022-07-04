import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDZS-fhBdi4p1y-bLWKej25Qof7o7CtR7Q",
    authDomain: "fir-e81a7.firebaseapp.com",
    projectId: "fir-e81a7",
    storageBucket: "fir-e81a7.appspot.com",
    messagingSenderId: "584971979697",
    appId: "1:584971979697:web:6cc502f26c675a5d250b90"
};

const app = initializeApp(firebaseConfig)

const db = getFirestore()
const auth = getAuth()


export {db, auth}
