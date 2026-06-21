import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDvaLIuGJdbGwHI-ZfB_K2k0HYNZO3YKVA",
  authDomain: "netflix-clone-e7261.firebaseapp.com",
  projectId: "netflix-clone-e7261",
  storageBucket: "netflix-clone-e7261.firebasestorage.app",
  messagingSenderId: "688028837321",
  appId: "1:688028837321:web:1537cec5e18a9fac8fb418",
  measurementId: "G-LJCG1Z610L"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
