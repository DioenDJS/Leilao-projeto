import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {  
    apiKey: "AIzaSyCzy3cAA0bZ-7_dceidE4XBvX33qeRAzTM",
    authDomain: "leilao-dioend.firebaseapp.com",
    projectId: "leilao-dioend",
    storageBucket: "leilao-dioend.appspot.com",
    messagingSenderId: "514401506688",
    appId: "1:514401506688:web:1af588852643d1e6941d65" 
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
