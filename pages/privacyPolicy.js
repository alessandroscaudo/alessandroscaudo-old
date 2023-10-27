import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function privacyPolicy() {
  return (
    <div className="container">
      <Head>
        <title>Alessandro Scaudo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header title="Alessandro Scaudo" />
      <main>
        <div className='containerLow'>
            <h1>Privacy Policy</h1>
            <h3 style={{fontWeight:"lighter", color:"#7a7a7a"}}>Data di applicazione: 17 novembre, 2022</h3>
            <p className="text-justify">
            La presente Informativa sulla privacy spiega come alessandroscaudo.com (“noi” o “ci”) raccoglie, utilizza e divulga informazioni su di te. <br />
            La presente Informativa sulla privacy si applica quando utilizzi il nostro sito Web e altri prodotti e servizi online collegati alla presente Informativa sulla privacy (collettivamente, i nostri "Servizi"), 
            contatti il ​​nostro team di assistenza clienti, interagisci con noi sui social media o interagisci in altro modo con noi. <br />
            Potremmo modificare la presente Informativa sulla privacy di tanto in tanto. Se apportiamo modifiche, ti informeremo modificando la data nella parte superiore di questa politica e, in alcuni casi, potremmo fornirti un avviso aggiuntivo (come aggiungere una dichiarazione al nostro sito Web o fornirti una notifica). Ti invitiamo a rivedere regolarmente la presente Informativa sulla privacy per rimanere informato sulle nostre pratiche informative e sulle scelte a tua disposizione.
            </p>
            <h2>Contenuti</h2>
            <ul>
              <li>Raccolta delle informazioni</li>
              <li>Uso delle informazioni</li>
              <li>Condivisione delle informazioni</li>
              <li>Incorporamenti di terze parti</li>
            </ul>
            <h3>Raccolta delle informazioni</h3>
            <strong>Informazioni che ci fornisci</strong>
            <p>Raccogliamo le informazioni che ci fornisci direttamente. Ad esempio, condividi informazioni direttamente con noi quando crei un account, compili un modulo, invii o pubblichi contenuti tramite i nostri Servizi, 
            acquisti un abbonamento, comunichi con noi tramite piattaforme di terze parti, richiedi assistenza clienti o comunichi in altro modo con noi. 
            I tipi di informazioni personali che potremmo raccogliere includono il tuo nome, nome visualizzato, nome utente, biografia, indirizzo e-mail, informazioni aziendali, contenuti, inclusa l'immagine avatar, foto, post, 
            risposte e serie pubblicate da te e qualsiasi altra informazione tu scegli di fornire.
            In alcuni casi, potremmo anche raccogliere informazioni fornite su altri, ad esempio quando acquisti un abbonamento Medium come regalo per qualcuno. 
            Utilizzeremo queste informazioni per soddisfare la tua richiesta e non invieremo comunicazioni ai tuoi contatti non correlati alla tua richiesta, a meno che non acconsentano separatamente a 
            ricevere comunicazioni da noi o ad impegnarsi in altro modo con noi.
            Non raccogliamo informazioni di pagamento attraverso i nostri Servizi. Facciamo affidamento su terze parti per elaborare i pagamenti in relazione ai nostri Servizi. 
            Qualsiasi informazione fornita per facilitare tale pagamento è soggetta all'informativa sulla privacy del processore di pagamento di terze parti e ti invitiamo a rivedere questa politica prima di fornire qualsiasi informazione
             al processore di pagamento.</p>
            <strong>Contattaci</strong>
            <p>In caso di domande sulla presente Informativa sulla privacy, contattaci all'indirizzo: <a href='mailto:scaudo.alessandro@gmail.com'>scaudo.alessandro@gmail.com</a> .
            </p>
        </div>
      </main>
      <Footer />
      
    </div>
  )
}
