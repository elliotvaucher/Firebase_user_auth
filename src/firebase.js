import { initializeApp } from 'firebase/app'
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
 apiKey: "AIzaSyAu6gLWz5y7gty-v0TNKGfIVmazhBTHZUQ",
 authDomain: "iterator-5d01b.firebaseapp.com",
 projectId: "iterator-5d01b",
 storageBucket: "iterator-5d01b.appspot.com",
 messagingSenderId: "22481333276",
 appId: "1:22481333276:web:9110f23dbf0105360183d9",
 measurementId: "G-XMWMZYWC4B"
};

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)


export {auth}