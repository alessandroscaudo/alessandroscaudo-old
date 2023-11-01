import React, { useState } from "react";
import { db } from "./API/firebase";
import {collection, addDoc} from 'firebase/firestore';

// Link al CV
const pdfFileUrl = '/CV/ScaudoAlessandoCV.pdf';

const Form = () => {

    //Recupero la variabile da Form
    const[email, setEmail] = useState()

    //Set riferimenti database
    const dbref = collection(db, 'emailCV')

    //Invio i dati a Firestore
    const sendOnFirestore  = async () =>
    {
        try
        {
            await addDoc(dbref, {Email: email})
            alert("Informazioni inviate con successo")
            //window.open(pdfFileUrl, '_blank');
        }
        catch (error)
        {
            alert(error)
        }
    }

    return (
        <>
            <div className="containerHigh">
                <div className="form">
                    <h2>Scarica il mio Curricul Vitae</h2>
                    <p>Compila il form con il tuo indirizzo E-mail per scaricare il CV</p>
                    <div className="input-group">
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
                </div>
            </div>
        </>
    )
}


export default Form