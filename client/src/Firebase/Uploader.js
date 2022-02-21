import firebase from "firebase/compat/app";
import "firebase/compat/storage";
// const key=process.env.REACT_APP_APIKEY;
// const auths=process.env.REACT_APP_AUTH_DOMAINauthDomain;
// const porjetc=process.env.REACT_APP_PROJETC_IDprojectId;
// const store=process.env.REACT_APP_STORAGE_BUCKET;
// const messge=process.env.REACT_APP_MESSAGE_SENDER;
// const appi=process.env.REACT_APP_APP_ID;


const firebaseConfig = {
    apiKey: "AIzaSyCwXljEuBwl0H-bZLEgEa6wyNEh_RVEBAw",
    authDomain: "ecommerce-87fae.firebaseapp.com",
    projectId: "ecommerce-87fae",
    storageBucket: "ecommerce-87fae.appspot.com",
    messagingSenderId: "464053325413",
    appId: "1:464053325413:web:d754a5f63439868de2008c"
};

firebase.initializeApp(firebaseConfig);
export const Storage = firebase.storage();

