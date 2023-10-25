import React, { useState } from 'react';

function DownloadCV() {
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [showError, setShowError] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    // Verifica la validità dell'indirizzo email
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    setIsEmailValid(regex.test(e.target.value));
  };

  const handleDownload = () => {
    if (isEmailValid) {
        const handleDownload = () => {
            // Simula il download di un file PDF
            const pdfFileUrl = 'url-del-tuo-cv.pdf';
            window.open(pdfFileUrl, '_blank');
          };
    } else {
        setShowError(true);
    }
  };

  return (
    <div className="container">
      <h2 className="mt-4">Scarica il mio Curriculum Vitae</h2>
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
          <button className="btn btn-primary" onClick={handleDownload}>
            Scarica il CV
          </button>
        </div>
      </div>
      {showError && !isEmailValid && (
        <div className="alert alert-danger" role="alert">
          Indirizzo email non valido. Inserisci un indirizzo email valido.
        </div>
      )}
    </div>
  );
}

export default DownloadCV;
