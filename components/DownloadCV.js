import React, { useState } from "react";
import { db } from "./API/firebase";
import {collection, addDoc} from 'firebase/firestore';
import { Form, Alert } from "react-bootstrap";

// Link al CV
const pdfFileUrl = '/CV/ScaudoAlessandoCV.pdf';

// Gestisco il messaggio di errore
const handleAlert = (variant, show, alertMessage) => {
    if (show) {
        return (
            <Alert key={variant} variant={variant} show={show}>
                {alertMessage}
            </Alert>
        );
    }
    return null;
}

const handleDownloadCV = () => {
    const [email, setEmail] = useState('');
    const [emailSaved, setEmailSaved] = useState(false);
    const [loading, setLoading] = useState(false);
    const [alertData, setAlertData] = useState({ variant: null, show: false, message: '' });
    
    //Gestisco il reset del messaggio
    const resetAlert = () => {
        setAlertData({ variant: null, show: false, message: '' });
    };
    
    //Controllo la validità della email
    const validateEmail = (email) => {
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        return emailRegex.test(email);
    }

    //Set riferimenti database
    const dbref = collection(db, 'emailCV')

    //Invio i dati a Firestore
    const sendOnFirestore  = async () => {
        if (!validateEmail(email)) {
            setAlertData({ variant: 'danger', show: true, message: 'Indirizzo email non valido' });
            return;
        }
            
        //aggiungo la data alla email
        const emailData = {
            Email: email,
            timestamp: new Data(),
        }
        setLoading(true);
        try
        {
            await addDoc(dbref, {Email: emailData})
            setEmailSaved(true);
            setAlertData({ variant: 'success', show: true, message: 'Informazioni inviate con successo' });
            window.open(pdfFileUrl, '_blank');
        }
        catch (error)
        {
            setAlertData({ variant: 'danger', show: true, message: error.message });
        }
        setLoading(false);
        setTimeout(resetAlert, 20000);
    }

    const handleDownloadPDF = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            window.open(pdfFileUrl, '_blank');
        }, 1000); // Simulazione del download
    };

    return (
        <>
            <div className="containerHigh">
                <Form>
                    <h2>Scarica il mio Curricul Vitae</h2>
                    <p>Compila il form con il tuo indirizzo E-mail per scaricare il CV</p>
                    <div className="input-group mb-2">
                        <input 
                        type='email'
                        value={email}
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="E-mail..."
                        onChange={(e) => setEmail(e.target.value)} 
                        />
                        <button
                        className="btn btn-flat mx-2"
                        onClick={sendOnFirestore}>Scarica!</button>      
                    </div>
                    {handleAlert(alertData.variant, alertData.show, alertData.message)}
                </Form>
            </div>
        </>
    )
}


export default handleDownloadCV