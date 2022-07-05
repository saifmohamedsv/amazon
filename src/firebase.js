import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDQnO36uEm7HEZM4LYrEWCKHygsJbImdZE",
    authDomain: "saif-d8a42.firebaseapp.com",
    projectId: "saif-d8a42",
    storageBucket: "saif-d8a42.appspot.com",
    messagingSenderId: "794737457039",
    appId: "1:794737457039:web:ec0de4e75d09c5a4747dfa",
    measurementId: "G-XB3KXJCNKV"
};
const app = initializeApp(firebaseConfig)

const db = getFirestore()
const auth = getAuth()


export {db, auth}
