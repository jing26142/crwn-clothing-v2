import { initializeApp } from 'firebase/app';
import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup,
    GoogleAuthProvider,
} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyB7vc6NrV8Ydg_O_UXOHSwvoMisjBJwWh0",
    authDomain: "crwn-clothing-db-37254.firebaseapp.com",
    projectId: "crwn-clothing-db-37254",
    storageBucket: "crwn-clothing-db-37254.appspot.com",
    messagingSenderId: "1009019626474",
    appId: "1:1009019626474:web:639e57af2272acc3954893"
  };
  
  // Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);


const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    promt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
