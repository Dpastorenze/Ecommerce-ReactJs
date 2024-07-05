// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3VTURrxuKbWZ4IEwxPdzBCSwP3fQTkDk",
  authDomain: "nolonecesitoloquiero-1e4f5.firebaseapp.com",
  projectId: "nolonecesitoloquiero-1e4f5",
  storageBucket: "nolonecesitoloquiero-1e4f5.appspot.com",
  messagingSenderId: "160395323897",
  appId: "1:160395323897:web:54b01a27e17f6e3285f528"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)

// linea para agregar productos a la base de datos
// productos.forEach((prod) => {
//     addDoc(collection(db,'productos'),prod)
//     .then ((elem)=>console.log('se agrego por consolsa'%(elem.id)))
//     .catch((error)=>console.log(error))  
//   });
    