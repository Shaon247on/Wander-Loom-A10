// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvc0r3V0kfkOBfcFfatU62rhGJp01Z2N0",
  authDomain: "touring-site.firebaseapp.com",
  projectId: "touring-site",
  storageBucket: "touring-site.appspot.com",
  messagingSenderId: "389657024226",
  appId: "1:389657024226:web:1cf84337e74259657bf0bb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth