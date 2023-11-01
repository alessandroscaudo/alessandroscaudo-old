import React, { useState } from "react";
import { db } from "./API/firebase";
import {collection, addDoc} from 'firebase/firestore';


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
                    <div className="box">
                        <input 
                        type='email'
                        value={email}
                        id="email"
                        placeholder="E-mail"
                        onChange={(e) => setEmail(e.target.value)} />
                        <button
                        onClick={sendOnFirestore}>Scarica!</button>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Form