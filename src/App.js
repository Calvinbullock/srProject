
// react
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from 'react';

// firebase
import { db } from "./config/firebase";
import { collection, onSnapshot} from "firebase/firestore";

// Components
import './App.css';
import HomePage from "./components/HomePage";
import SignInPage from "./components/signIn-SignUp/SignInPage";
import SignUpPage from "./components/signIn-SignUp/SignUpPage";
import { AppProvider } from './components/AppContext';

// main function
export default function App() {
    const notesCollectionRef = collection(db, "Notes");
    const [noteData, setNoteData] = useState([]);

    // get all Notes from DB
    useEffect(() => {
        const unsubscribe = onSnapshot(notesCollectionRef, (snapshot) => {
            try {
                // TODO: only get Notes that match user ID
                //const userId = auth?.currentUser.uid;
                //const notesCollectionRef = collection(db, "notes");
                //const q = query(notesCollectionRef, where("userId", "==", userId));
                //const data = await getDocs(q);
                
                const noteData = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));

                setNoteData(noteData);   
            } catch (err) { console.log(err); }
        });
        // Clean up the listener when the component unmounts
        return () => unsubscribe();
    }, [notesCollectionRef]);

    return (
        <AppProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage noteData={noteData}/>} />
                    <Route path="/SignIn" element={<SignInPage />} />
                    <Route path="/SignUp" element={<SignUpPage />} />
                </Routes>
            </BrowserRouter>   
        </AppProvider>
    );
}
