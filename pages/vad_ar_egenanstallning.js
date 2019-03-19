import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Link from 'next/link';

const vad_ar_egenanstallning = () => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />
      <link rel="stylesheet" href="/static/base.css" />
      <title>Vad är egenanställning?</title>
      <meta name="description" content="Vad menas egentligen med egenanställing och ur funkar det när du arbetar som egenanställd?" />
    </Head>
    < Navbar />
    <div className="App-header-content-news">
      <h1>Vad är egenanställning och hur blir du egenanställd?</h1>
      <strong>Nedanför kommer vi beskriva vad som menas med egenanställning och hur det fungerar när du fakturerar utan företag som egenanställd.</strong>
    </div>
    <div className="Content-divider-2">
      <div className="Comp-divider">
        <div className="Comp-title-news">
          <h3>Det är inte så så komplicerat som du tror</h3>
          <div className="comp-spacer" />
          <div><img src="./static/images/logga-faktura.png" alt="Faktura-utan-företag.se" /></div>
        </div>
        <p>Egenanställning är den snabbast växande anställningsformen i Sverige. Det är alltså en anställningsform. Precis som att vara provanställd, egenföretagare eller projektanställd.</p>
        <p>Man kan enkelt förklara att det är en blandning av att ha ett eget företag och att vara anställd. Skillnaden är att du som privatperson utan företag kan skicka fakturor utan att ha F-skatt.</p>
        <p>Det är alltså en enklare form av att ha eget företag men du slipper mestadelen av administration och bokföring. Du är fortfarande helt ansvarig för ditt eget arbete och dina kunder. Det är perfekt för dig som frilansar, dessa ord går nästan hand i hand. Förr när du var frilansare och hade uppdrag för massor av olika kunder där du inte hade anställning var du tvungen att starta ett eget företag för att kunna fakturera dem. Nu kan du istället låta ett företag fakturera dina kunder, betala skatt, försäkringar och arbetsgivaravgifter med mera.</p>
        <p>Du kan som egenanställd fakturera både företag och privatkunder. Du kan till och med utföra Rut och Rot tjänster. Vanligtvis handlar det om en konsult eller frilansare som inte har tid eller orkar starta ett eget företag eller att det helt enkelt inte är värt mödan. Egenanställningsföretagen är numera så otroligt smidiga att det inte behövs.</p>
        <div><img src="./static/images/egenanstallning.jpg" alt="Egenanställning" /></div>
        <h3>Ett bra exempel</h3>
        <p>Du är utvecklar och designar en hemsida för lite olika företag. Du faktuerar 3 gånger i månaden. Du har inte så mycket utgifter när du arbetar förutom din dator och internet.</p>
        <p>Detta är ett perfekt exempel på när en egenanställning kan passa. Det är mycket enklare i detta fall att fakturera genom ett egenanställningsföretag.</p>
        <Link href="/"><a>Läs mer om hur du kan fakturera som egenanställd</a></Link>
        <h3>Fördelar med egenanställning</h3>
        <ul>
          <li>Det är enkelt att komma igång. Du kan i princip börja fakturera redan idag. Så länge du utfört ett jobb det vill säga.</li>
          <li>Du behöver inget företag eller F-skatt.</li>
          <li>Minimalt med administration. Du behöver bara ett konto hos ett egenanställningsföretag, det räcker.</li>
          <li>Du slipper hålla koll på obetalda fakturor.</li>
          <li>Du kan vara säker att du får rätt försäkring, betalar rätt skatt och arbetsgivaravgift, får inbetald pension.</li>
        </ul>
      </div>
    </div>
    < Footer />
  </div>
)

export default vad_ar_egenanstallning
