
import { initializeApp } from "firebase/app";
import envImport from "../envImport/envImport.js"
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: envImport.firebaseApiKey,
    authDomain: envImport.firebaseAuthDomain,
    projectId: envImport.firebaseProjectId,
    storageBucket: envImport.firebaseStorageBucket,
    messagingSenderId: envImport.firebaseMessagingSenderId,
    appId: envImport.firebaseAppId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();