import React, { useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

// Inizializza Firebase con la tua configurazione
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  appId: process.env.FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Link al pdf da scaricare
const pdfFileUrl = '/CV/ScaudoAlessandoCV.pdf';

function DownloadCV() {
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [showError, setShowError] = useState(false);
  const [confirmationVisible, setConfirmationVisible] = useState(false); // Stato per il messaggio di conferma
  const [isDownloadEnabled, setIsDownloadEnabled] = useState(false); // Stato per abilitare/disabilitare il download

  const handleEmailChange = (e) => {
    const inputValue = e.target.value;
    setEmail(inputValue);
    // Verifica la validità dell'indirizzo email
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    setIsEmailValid(regex.test(inputValue));
  };

  const handleDownload = async () => {
    if (isDownloadEnabled) {
      // Simula il download di un file PDF
      window.open(pdfFileUrl, '_blank');
    } else if (isEmailValid) {
      // Salva l'indirizzo email su Firestore
      const emailData = {
        email: email,
        timestamp: new Date(),
      };

      try {
        await addDoc(collection(db, 'emailCV'), emailData);
        setDownloadEnabled(true); // Abilita il download
        setConfirmationVisible(true); // Mostra il messaggio di conferma
      } catch (error) {
        console.error('Errore durante il salvataggio su Firestore: ', error);
      }
    } else {
      setShowError(true);
    }
  };

  return (
    <div className="containerHigh">
      <h2 className="mt-1">Scarica il mio Curriculum Vitae</h2>

      <p>Inserisci il tuo indirizzo email per scaricare il CV.</p>
      <div className="input-group mb-3">
        <input
          type="email"
          className={`form-control ${isEmailValid ? '' : 'is-invalid'} me-2`}
          placeholder="Indirizzo email"
          value={email}
          onChange={handleEmailChange}
        />
        <div className="input-group-append">
          <button className="btn btn-flat" onClick={handleDownload}>
            Scarica il CV
          </button>
        </div>
      </div>

      {showError && !isEmailValid && (
        <div className="alert alert-danger" role="alert">
          Indirizzo email non valido. Inserisci un indirizzo email valido.
        </div>
      )}

      {confirmationVisible && (
        <div className="alert alert-success" role="alert">
          Il download è stato completato con successo!
        </div>
      )}

      {isDownloadEnabled && (
        <p>
          <a href={pdfFileUrl} download>
            Clicca qui per scaricare il CV
          </a>
        </p>
      )}

      <div>
        <p style={{ fontWeight: "lighter" }}>
          Premendo "Scarica il CV", accetti la nostra{' '}
          <a style={{ fontWeight: 'bold' }} href="/privacyPolicy">
            Informativa sulla privacy
          </a>
          .
        </p>
      </div>
    </div>
  );
}

export default DownloadCV;
