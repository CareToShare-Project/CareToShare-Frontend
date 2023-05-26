
import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOXslO6ARwmFDvrLTSvPoQ000fYBUy_Rc",
  authDomain: "uploadingfiles-2a2b0.firebaseapp.com",
  projectId: "uploadingfiles-2a2b0",
  storageBucket: "uploadingfiles-2a2b0.appspot.com",
  messagingSenderId: "527508072873",
  appId: "1:527508072873:web:2f32ed63f68a4c36f1bcb8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)