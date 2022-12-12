
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { query, where, getDocs, getDoc } from "firebase/firestore";
import {  GoogleAuthProvider } from "firebase/auth";
import { signInWithPopup, FacebookAuthProvider } from "firebase/auth";



const firebaseConfig = {
    apiKey: "AIzaSyDlNRqmAY6iKEovbf0Nocd7HtHKyjaOnYM",
    authDomain: "olxclone-47a82.firebaseapp.com",
    projectId: "olxclone-47a82",
    storageBucket: "olxclone-47a82.appspot.com",
    messagingSenderId: "985041448426",
    appId: "1:985041448426:web:12b341ccccf7894d6a5693",
    measurementId: "G-MHV3Z9WNXK"
};




const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage();
const fprovider = new FacebookAuthProvider();
const gprovider = new GoogleAuthProvider();



async function fbLogin() {

    const auth = getAuth();
    await signInWithPopup(auth, fprovider)

}


async function googleLogin() {

    const auth = getAuth();
    const data = await signInWithPopup(auth, gprovider)
    console.log('fire',data.user)

}

async function register(form) {

    let { email, name, gender, age, password } = form
    await createUserWithEmailAndPassword(auth, email, password)

    const uid = auth.currentUser.uid
    await setDoc(doc(db, "users", uid), {
        name, age, gender, email, uid
    });
    return 'done'
}



async function login(email, password) {

    await signInWithEmailAndPassword(auth, email, password)
    return 'done'
}


//post Ads
async function postAd(file) {
    const imgRef = ref(storage, 'images/' + file.name);
    const uploadedImg = await uploadBytes(imgRef, file)
    const url = await getDownloadURL(uploadedImg.ref)
    return url
}

export {
    register,
    login,
    postAd,
    fbLogin,
    googleLogin,
}