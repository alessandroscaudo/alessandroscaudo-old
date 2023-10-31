import React, { useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const EmailForm = () => {
    
    const [formData, setFormData] = useState({
    email: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
  };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const docRef = await addDoc(collection(db, 'emailCV'), formData);
            console.log('Document written with ID: ', docRef.id);
            // Esegui azioni aggiuntive qui se necessario
        } catch (error) {
            console.error('Error adding document: ', error);
        }
    };

    return (
        <div className="containerHigh">
        <h2>Scarica il mio Curriculum Vitae</h2>
        <p>Inserisci il tuo indirizzo email per scaricare il CV.</p>
        <div className="input-group mb-3">
            <form onSubmit={handleSubmit}>
            <input type="email" name="email" placeholder="Email" onChange={handleChange} />
            <button type="submit">Invia</button>
            </form>
        </div>
        <div>
            <p style={{ fontWeight: 'lighter' }}>
            Premendo "Scarica il CV", accetti la nostra{' '}
            <a style={{ fontWeight: 'bold' }} href="/privacyPolicy">
                Informativa sulla privacy
            </a>
            .
            </p>
        </div>
        </div>
    );
};

export default EmailForm;