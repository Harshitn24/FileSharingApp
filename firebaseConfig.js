// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAApPf7n52HG8hnQZ-dElFBq26b_uvvdzQ",
    authDomain: "web-apps-f18a0.firebaseapp.com",
    projectId: "web-apps-f18a0",
    storageBucket: "web-apps-f18a0.appspot.com",
    messagingSenderId: "888873487637",
    appId: "1:888873487637:web:f69b903106517f5ce86d1c",
    measurementId: "G-X8PGXGJ2P8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// export default {
//     app
// };