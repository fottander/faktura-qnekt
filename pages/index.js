import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Layout from '../components/Layout'

const index = () => (
  <div>
    <Head>
      <meta name="description" content="Börja fakturera utan företag som privatperson och frilansare? Vi hjälper dig som frilansare och egenanställd att jämföra de olika tjänsterna som finns på marknaden samt att vi ger massor av bra information." />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta name="language" content="Swedish" />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />
      <link rel="stylesheet" href="/static/base.css" />
      <link rel="icon" href="/static/images/favicon.ico" />
      <title>Bästa tjänsten för fakturera utan företag som privatperson</title>
      <link rel="canonical" href="https://www.faktura-utan-företag.se" />
      <meta name="google-site-verification" content="A8Ly5KxY7iwwehMV5jeoVpXYqb1rqbQ1ER5PeiVfthc" />
      <script data-ad-client="ca-pub-5319889050898668" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
    </Head>
    <Layout>
    < Navbar />
    <div className="App-header">
      <h1>Ska du fakturera utan företag som privatperson?</h1>
      <h4>Så hur kan vi hjälpa dig?</h4>
      <div className="Button-row">
        <a id="button-1" href="#section1">Jämför tjänster</a>
        <div className="Button-divider" />
        <a id="button-2" href="#section2">Hur fungerar det</a>
      </div>
      <div className="Button-row">
        <a id="button-3" href="#section3">Starta eget eller fakturera utan företag?</a>
      </div>
    </div>
    <div className="App-header-content">
      <strong>Hur fungerar Faktura-utan-företag.se? Vi hjälper dig om du ska börja fakturera utan företag som privatperson och frilansare. Vi är en opartisk aktör som jämför olika egenanställningsföretag som finns på svenska marknaden. Målet med denna sida är att hjälpa dig att välja rätt tjänsteleverantör som passar dina behov.</strong>
    </div>
    <div id="section1" />
    <div className="Content-divider">
      <div className="Compare">
        <h2>Jämför olika företag där du kan fakturera utan företag som egenanställd</h2>
        <div className="Table-holder">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Företag</th>
                <th scope="col">Avgift</th>
                <th scope="col">Min. belopp</th>
                <th scope="col">Utbetalt av 10.000</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row"><a id="link-1" href="#comp-1">Frilans Finans</a></th>
                <td>6%</td>
                <td>500</td>
                <td>5007</td>
              </tr>
              <tr>
                <th scope="row"><a id="link-1" href="#comp-2">Cool Company</a></th>
                <td>5.98%</td>
                <td>1</td>
                <td>5008</td>
              </tr>
              <tr>
                <th scope="row"><a id="link-1" href="#comp-3">Ukko</a></th>
                <td>6%</td>
                <td>500</td>
                <td>5007</td>
              </tr>
              <tr>
                <th scope="row"><a id="link-1" href="#comp-4">Cansolo</a></th>
                <td>3.95%</td>
                <td>1000</td>
                <td>5166</td>
              </tr>
              <tr>
                <th scope="row"><a id="link-1" href="#comp-5">Firmify</a></th>
                <td>5%</td>
                <td>1000</td>
                <td>5060</td>
              </tr>
            </tbody>
          </table>
        </div>
        <section id="section02" className="demo">
        <div className= "Scrollbutton">
        <h4>Läs mer om varje företag</h4>
        </div>
          <a href="#comp-1" alt="Läs mer"><span></span></a>
        </section>
      </div>
    </div>
    <div className="App-header-content-news">
      <h2>Egenanställningsföretag i Sverige</h2>
      <p>Nedanför hittar du alla egenanställningsföretag som är aktiva på den svenska marknaden. Vi skriver lite om varje företag för att du enkelt ska kunna göra ett val som passar dig.</p>
      <p>Det finns ett flertal företag som sysslar med egenanställning i Sverige. Det finns tre stora aktörer; Frilans Finans, Cool Company och Firmify. Det var också dessa som var först på den svenska marknaden. Det finns många faktorer du som frilansare ska kolla på när du väljer leverantör, inte bara vem som har lägst avgift. Det är viktigt för oss att du får reda på all information som du behöver veta så om du har frågor så får du gärna höra av dig till oss. <strong>Vad kollar vi på när vi jämför?</strong></p>
      <ul>
        <li>Avgift</li>
        <li>Snabba utbetalningar</li>
        <li>Förmåga att få betalt</li>
        <li>Användarvänlighet</li>
      </ul>
    </div>
    <div className="Content-divider-2">
      <div className="Anchor" id="comp-1" />
      <div className="Comp-divider">
        <div className="Comp-title">
          <h3>Frilans finans</h3>
          <div className="comp-spacer" />
          <div><img src="./static/images/frilans-finans.jpeg" alt="frilans finans" /></div>
        </div>
        <div className="Star-ratings-sprite" alt="4,7 stjärnor">
          <span className="Star-ratings-sprite-rating-frilans"></span>
        </div>
        <p className="Rating-comp">4,7 av 5 på Trustpilot</p>
        <p>Frilans finans var först på den svenska marknaden inom egenanställning. De är 2019 den största aktören med över 1 miljard i omsättning. Deras tjänst har en avgift på 6% och minimibeloppet du kan fakturera är 500kr.</p>
        <p>Precis som de flesta andra tjänster finns möjligheten att få snabba utbetalningar så länge kunderna till dig som faktuerar godkänner att arbetet blivit utfört.</p>
        <p>Frilans finans är en väldigt bra tjänst för dig som ska frilansa eller börja fakturera utan företag som privatperson och inte har ett eget företag.</p>
        <p><strong>Telefon:</strong> 0771-15 10 00 <strong>Epost:</strong> info@frilansfinans.se</p>
        <p><strong>Adress:</strong> Frilans Finans, Stora Nygatan 7, 111 27 Stockholm</p>
        <a href="https://www.allabolag.se/5568021199/frilans-finans-sverige-ab" target="_blank" rel="noopener noreferrer">Frilans Finans - Allabolag.se</a>
      </div>
      <div className="Anchor" id="comp-2" />
      <div className="Comp-divider">
        <div className="Comp-title">
          <h3>Cool company</h3>
          <div className="comp-spacer" />
          <div><img src="./static/images/cool-company.png" alt="cool company" /></div>
        </div>
        <div className="Star-ratings-sprite" alt="4,6 stjärnor">
          <span className="Star-ratings-sprite-rating-cool"></span>
        </div>
        <p className="Rating-comp">4,6 av 5 på Trustpilot</p>
        <p>Cool Company var tvåa på den svenska marknaden inom egenanställning. De har snabbt etablerat sig som den näst största tjänsten i Sverige och nordiska marknaden.</p>
        <p>Precis som Frilans finans kan du få din lön utbetald snabbt om företaget som faktueras godkänner jobbet du genomfört.</p>
        <p>Vill du ha en enkel användarvänlig tjänst med relativt låg avgift så är Cool Company absolut ett alternativ.</p>
        <p><strong>Telefon:</strong> 010-330 30 11 <strong>Epost:</strong> fakturera@coolcompany.com</p>
        <p><strong>Adress:</strong> Cool Company Skandinavien AB, Riddargatan 7A, 114 35 Stockholm</p>
        <a href="https://www.allabolag.se/5564328390/cool-company-skandinavien-ab" target="_blank" rel="noopener noreferrer">Cool Company - Allabolag.se</a>
      </div>
      <div className="Anchor" id="comp-3" />
      <div className="Comp-divider">
        <div className="Comp-title">
          <h3>Ukko</h3>
          <div className="comp-spacer" />
          <div><img src="./static/images/ukko.png" alt="ukko" /></div>
        </div>
        <div className="Star-ratings-sprite" alt="4,2 stjärnor">
          <span className="Star-ratings-sprite-rating-ukko"></span>
        </div>
        <p className="Rating-comp">4,2 av 5 på Trustpilot</p>
        <p>Ukko är den finska versionen av våra svenska tjänster. De har också en stor del av verksamheten i de andra nordiska länderna.</p>
        <p>Ukko är den nordiska versionen för dig som ska skicka faktura utan företag. Som frilansare fungerar denna tjänsten oerhört bra. Det är också väldigt bra för dig som arbetar över landsgränserna i norden.</p>
        <p>Ukko har en låg avgift och användarvänligt gränssnitt som enligt oss är oerhört enkelt.</p>
        <p><strong>Telefon:</strong> 010 884 48 98 <strong>Epost:</strong> Kundservice@ukko.se</p>
        <p><strong>Adress:</strong> SLP Group AB, Nortullsgatan 6, 113 29 Stockholm</p>
        <a href="https://www.allabolag.se/5590683198/slp-group-ab" target="_blank" rel="noopener noreferrer">Ukko - Allabolag.se</a>
      </div>
      <div className="Anchor" id="comp-4" />
      <div className="Comp-divider">
        <div className="Comp-title">
          <h3>Cansolo</h3>
          <div className="comp-spacer" />
          <div><img src="./static/images/cansolo.png" alt="cansolo" /></div>
        </div>
        <div className="Star-ratings-sprite" alt="4,0 stjärnor">
          <span className="Star-ratings-sprite-rating-cansolo"></span>
        </div>
        <p className="Rating-comp">4 av 5 på Google</p>
        <p>Cansolo har grundats av två entrepenörer som har verklig koll på löner och anställningar.</p>
        <p>På så sätt har de lyckats skapa en riktigt bra tjänst för er som vill frilansa och fakturera utan krångel till en låg avgift.</p>
        <p>Det bästa med Cansolo är deras låga avgift på 3.95% som är under snittet på den svenska marknaden. Det är en betydligt lägre avgift än de större aktörerna. Inte nog med det är deras system väldigt enkelt att använda och allt ingår som expressutbetalning, bra försäkringar med mera.</p>
        <p><strong>Telefon:</strong> 08-220 256 <strong>Epost:</strong> info@cansolo.se</p>
        <p><strong>Adress:</strong> Cansolo AB, Katarinavägen 14, 116 45 Stockholm</p>
        <a href="https://www.allabolag.se/5590773593/cansolo-ab" target="_blank" rel="noopener noreferrer">Cansolo - Allabolag.se</a>
      </div>
      <div className="Anchor" id="comp-5" />
      <div className="Comp-divider">
        <div className="Comp-title">
          <h3>Firmify</h3>
          <div className="comp-spacer" />
          <div><img src="./static/images/firmify.png" alt="firmify" /></div>
        </div>
        <p>Firmify är en värdig uppstickare till de större aktörerna på svenska marknaden.</p>
        <p>Firmify har väldigt snabbt vuxit på den svenska marknaden och är just nu tredje största aktör. De har riktat sig till frilansare inom kreativa yrken.</p>
        <p>Firmify har en riktigt bra och låg avgift och deras tjänst är väldigt smidig och enkel att använda, samtidigt som du kan få extra avdrag för resor med mera och snabba utbetalningar.</p>
        <p><strong>Telefon:</strong> 010-490 10 07 <strong>Epost:</strong> info@firmify.se</p>
        <p><strong>Adress:</strong> Firmify AB, Box 120, 391 21 Kalmar</p>
        <a href="https://www.allabolag.se/5568498405/firmify-ab" target="_blank" rel="noopener noreferrer">Firmify - Allabolag.se</a>
      </div>
    </div>
    <div id="section2" />
    <div className="Content-divider-3">
      <div className="Readmore">
        <h2>Hur fungerar det när man fakturerar utan företag?</h2>
        <p>Det är väldigt enkelt att komma igång som egenanställd med att skicka fakturor som privatperson eller frilansare om du inte har ett företag.</p>
        <p>Du börjar med att skapa ett konto hos en av de företag vi rekomenderat ovanför. Därefter börjar du mata in dina uppgifter för den faktura och de jobb du genomfört. Glöm inte att hos de flesta aktörer så bör du skicka in en beskrivning av de jobb du ska utföra innan du börjar utföra jobbet. Annars kan det vara så att du är oförsäkrad under tiden du frilansar.</p>
        <p>Vanligtvis får du betalt efter att det företag du fakturerat betalt in de belopp din faktura avser. Men du kan också hos de flesta leverantörer få utbetald lön snabbare. Då behöver företaget som du fakturerat godkänna det jobb du genomfört.</p>
        <p>Skulle företaget inte betala sin faktura i tid eller om de inte alls betalar den så kommer leverantören(Frilans finans, Cool Company etc) hjälpa dig genom inkasso att få betalt av kunden.</p>
        <p>När du får din lön utbetald så får du det efter skatt, arbetsgivaravgifter, sociala avgifter(pension), försäkring och leverantörens avgift. På en faktura på 10 000 exkl. moms får du ut mellan 5000 och 5200 hos de tjänster vi rekommenderar.</p>
        <p>Som frilansare eller egenanställd som inte har ett företag blir detta väldigt mycket smidigare än att sköta allt detta själv. Istället för att starta eget företag, skaffa F-skatt, betala försäkring, avgifter, skatter med mera samt att bokföra blir det oerhört enkelt att använda en tjänst där du kan fakturera utan företag som privatperson eller frilansare.</p>
        <div className="divider" />
        <Link href="/vad_ar_egenanstallning"><a id="button-1">Vad är egenanställning?</a></Link>
      </div>
    </div>
    <div id="section3" />
    <div className="Content-divider-4">
      <div className="Readmore">
        <h2>Ska jag starta eget eller fakturera utan företag?</h2>
        <p>Detta är en svår fråga att svara på eftersom allas förutsättningar är olika. Därför ska vi redovisa skillnaderna som utgör grunden för det beslut du måste fatta.</p>
        <p>Det du behöver tänka på innan du fattar beslutet är i vilken grad du ska fakturera som egenanställd. Vilka kunder ska du jobba med? Hur mycket ska du jobba med din business. Handlar det om ett heltidsjobb eller är det endast vid sidan om? Är det så att du ska ha anställda kan vi redan nu säga att starta ett företag helt klart blir bäst. Men du kan såklart använda en faktureringstjänst också genom att din anställd faktuerar genom en sådan också. Det kan också vara ett alternativ att börja med att faktuera som privatperson eller frilansare och om du märker att det går bra så kan du starta en egen firma.</p>
        <p>Enkelt förklarat kan vi säga att skillnaderna är dessa</p>
        <div className="Compare-row">
          <div className="Compare-content-1">
            <h4>Fakturera utan företag</h4>
            <h5>Fördelar</h5>
            <ul>
              <li>Inget företag eller F-skatt behövs</li>
              <li>Du kan börja fakturera idag</li>
              <li>Minimal administration</li>
              <li>Ingen bokföring krävs</li>
              <li>Inkassotjänst ingår</li>
            </ul>
            <h5>Nackdelar</h5>
            <ul>
              <li>Det går inte att ha anställda</li>
              <li>Vissa avdrag går inte att göra</li>
            </ul>
          </div>
          <div className="Compare-divider" />
          <div className="Compare-content-2">
            <h4>Starta eget bolag</h4>
            <h5>Fördelar</h5>
            <ul>
              <li>Går att ha anställda</li>
              <li>Fler avdragsmöjligheter</li>
            </ul>
            <h5>Nackdelar</h5>
            <ul>
              <li>Tar lång tid att komma igång</li>
              <li>Registrering av företag och F-skatt</li>
              <li>Kräver bokföringsprogram</li>
              <li>Extern inkassotjänst</li>
              <li>Kräver mycket administration</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="Content-divider-5">
      <div className="Readmore">
        <h3>Vanliga frågor?</h3>
        <div><span>+ </span><a href="#försäkring">Är jag försäkrad när jag fakturerar utan företag?</a></div>
        <div><span>+ </span><a href="#pension">Får jag pension när jag jobbar på detta sättet?</a></div>
        <div><span>+ </span><a href="#utbetalning-lön">När får jag min lön utbetald?</a></div>
        <div><span>+ </span><a href="#bästa-tjänst">Vilken tjänst är bäst att använda?</a></div>
        <div><span>+ </span><a href="#lägst-avgift">Vem har lägst avgift?</a></div>
        <div><span>+ </span><a href="#obetald-faktura">Vad händer om min kund inte betalar fakturan?</a></div>
      </div>
    </div>
    <div className="Content-divider-2">
      <div className="Comp-divider">
        <div className="Anchor" id="försäkring" />
        <div className="Comp-title">
          <h3>Är jag försäkrad när jag fakturerar utan företag?</h3>
        </div>
        <p>Det är viktigt att du kollar upp exakt hur du ska gå tillväga för att bli försäkrad när du frilansar genom en av tjänsterna. Ibland kan du automatiskt vara skyddad av en försäkring men ibland måste du skicka in en anmälan till tjänsteleverantören innan du utför ett jobb för att täckas av en försäkring. Det kan bestå av en kort beskrivning av det jobb som ska utföras eller var exakt du ska frilansa.</p>
        <p>När du bestämt dig för den bästa tjänsten för dig så kolla upp hur du ska göra för att täckas av en försäkring när du ska använda en tjänst för att fakturera utan företag.</p>
      </div>
      <div className="Comp-divider">
        <div className="Anchor" id="pension" />
        <div className="Comp-title">
          <h3>Får jag pension när jag jobbar på detta sättet?</h3>
        </div>
        <p>Om du är mellan 25 och 65 år gammal och använder en av tjänsterna är det obligatoriskt för tjänsteleverantören att betala in pension. Det finns också extratjänster hos vissa av leverantörerna som kan sätta av extra pension(tjänstepension). De kan också hjälpa dig att förmedla kontakter till företag som kan förvalta kapitalet.</p>
      </div>
      <div className="Comp-divider">
        <div className="Anchor" id="utbetalning-lön" />
        <div className="Comp-title">
          <h3>När får jag min lön utbetald?</h3>
        </div>
        <p>Det är olika för varje företag. Kolla upp ovanför vad som gäller för varje leverantör. Vanligtvis får du din lön utbetald när din kund betalat fakturan. Men du kan också få snabbare betalt genom att leverantören får ett godkännande från din kund att du utfört det sagda jobbet.</p>
      </div>
      <div className="Comp-divider" >
        <div className="Anchor" id="bästa-tjänst" />
        <div className="Comp-title">
          <h3>Vilken tjänst är bäst att använda?</h3>
        </div>
        <p>Den slutgiltiga frågan. Ja som vi försökt förmedla med denna sida är det inte svart eller vitt. Vad är viktigast för dig? En smidig tjänst och hemsida eller lägst avgift? Det är den frågan du behöver fråga dig. Det finns också annat som spelar in. Hur enkelt är det att göra avdrag? Hur snabbt kan jag få betalt?</p>
        <p>Det är därför inte helt lätt att svara på för dina behov är annorlunda än andras och därför passar olika tjänster olika behov.</p>
      </div>
      <div className="Comp-divider" >
        <div className="Anchor" id="lägst-avgift" />
        <div className="Comp-title">
          <h3>Vem har lägst avgift?</h3>
        </div>
        <p>Den lägsta avgiften just nu är hos Firmify men det finns andra mindre aktörer som kan ge lägre avgift. Men man ska vara försiktig när man väljer en sådan tjänst då det kan finnas dolda avgifter samt att om de inte är så kända så kan din kund tveka med att betala fakturan vilket gör att betalningstiden blir längre. De större aktörerna är kända och kan därför på ett effektivt sätt begära in din betalning snabbt.</p>
      </div>
      <div className="Comp-divider">
        <div className="Anchor" id="obetald-faktura" />
        <div className="Comp-title">
          <h3>Vad händer om min kund inte betalar fakturan?</h3>
        </div>
        <p>Om din kund inte betalar sin faktura i tid så kommer tjänsteleverantören hjälpa dig att få betalt. De kommer skicka påminnelser. Om de ändå inte betalar blir det ett inkassoföretag som de samarbetar med som kommer ta över ärendet. Detta sker automatiskt.</p>
      </div>
    </div>
    <Footer />
    </Layout>
  </div>
)

export default index
