import { useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';


// Inizializza Firebase con la tua configurazione
const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function DownloadCV() {
    const [email, setEmail] = useState('')

    const emailChange = (e) => {
        const inputValue = e.target.value;
        setEmail(inputValue);
        // Verifica la validità dell'indirizzo email
        //const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        //setIsEmailValid(regex.test(inputValue));
      };

    const scaricaCV = async() => {
        const emailData = {
            email: email, 
            timestamp: new Date(), 
        };
        try {
            await addDoc(collection(db, 'emailCV'), emailData)
        } catch (error) {
            console.error('Errore durante il salvataggio su Firebase: ', error);
        }
    };

    return (
        <div className="containerHigh">
            <h2>Scarica il mio Curriculum Vitae</h2>
            <p>Inserisci il tuo indirizzo email per scaricare il CV.</p>
            <div className="input-group mb-3">
                <input
                id="email"
                type="email"
                placeholder="Indirizzo email..."
                className=''
                value={email}
                onChange={emailChange}
                />
                <div className="input-group-append mx-3">
                    <button 
                    className="btn btn-flat"
                    onClick={scaricaCV}>
                        Scarica il CV
                    </button>
                </div>
            </div>
            <div>
                <p style={{fontWeight:"lighter"}}>
                    Premendo "Scarica il CV", accetti la nostra <a style={{fontWeight:'bold'}} href="/privacyPolicy">Informativa sulla privacy</a>.
                </p>
            </div>
        </div>
    )
}

export default DownloadCV;