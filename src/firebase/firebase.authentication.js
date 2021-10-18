import firebaseConfig from "./firebase.config";
import { initializeApp } from "firebase/app";

const firebaseInitialize = () =>{
    initializeApp(firebaseConfig);
}
export default firebaseInitialize;