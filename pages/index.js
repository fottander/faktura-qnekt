import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const index = () => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />
      <link rel="stylesheet" href="/static/base.css" />
      <title>Bästa tjänsterna för att fakturera utan företag som privatperson</title>
      <meta name="description" content="Vill du veta mer om hur man kan fakturera utan företag som privatperson? Vi hjälper dig att jämföra de olika tjänsterna som finns på marknaden samt massor av bra information." />
      <meta name="google-site-verification" content="A8Ly5KxY7iwwehMV5jeoVpXYqb1rqbQ1ER5PeiVfthc" />
    </Head>
    < Navbar />
    <div className="App-header">
      <h1>Ska du fakturera utan företag som privatperson?</h1>
      <h4>Så hur kan vi hjälpa dig?</h4>
      <div className="Button-row">
        <a id="button-1" href="#section1">Jämför tjänster</a>
        <div className="Button-divider" />
        <a id="button-2" href="#section2">Hur fungerar det</a>
      </div>
    </div>
    <div className="App-header-content">
      <strong>Hur fungerar Faktura-utan-företag.se? Vi hjälper dig om du ska börja faktuera utan företag som privatperson. Vi är en opartisk aktör som jämför olika tjänster som finns på svenska marknaden.</strong>
    </div>
    <div id="section1" />
    <div className="Content-divider">
      <div className="Compare">
        <h2>Jämför de olika företagen där du kan fakturera utan företag</h2>
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
                <td>Markster</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row"><a id="link-1" href="#comp-2">Cool Company</a></th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row"><a id="link-1" href="#comp-3">Ukko</a></th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
              <tr>
                <th scope="row"><a id="link-1" href="#comp-4">Firmify</a></th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
        </div>
        <section id="section02" className="demo">
        <div className= "Scrollbutton">
        Läs mer om varje företag
        </div>
          <a href="#comp-1" alt="Läs mer"><span></span></a>
        </section>
      </div>
    </div>
    <div className="Content-divider-2">
      <div id="comp-1" />
      <div className="Comp-divider">
        <div className="Comp-title">
          <h3>Frilans finans</h3>
          <div className="comp-spacer" />
          <div><img src="./static/images/frilans-finans.jpeg" alt="frilans finans" /></div>
        </div>
        <p>Frilans finans var först på den svenska marknaden.</p>
      </div>
      <div id="comp-2" />
      <div className="Comp-divider">
        <div className="Comp-title">
          <h3>Cool company</h3>
          <div className="comp-spacer" />
          <div><img src="./static/images/cool-company.png" alt="cool company" /></div>
        </div>
        <p>Cool Company var två på den svenska marknaden.</p>
      </div>
      <div id="comp-3" />
      <div className="Comp-divider">
        <div className="Comp-title">
          <h3>Ukko</h3>
          <div className="comp-spacer" />
          <div><img src="./static/images/ukko.png" alt="ukko" /></div>
        </div>
        <p>Ukko är den finska versionen av våra svenska tjänster. De har också en stor del av verksamheten i de andra nrodiska länderna.</p>
      </div>
      <div id="comp-4" />
      <div className="Comp-divider">
        <div className="Comp-title">
          <h3>Firmify</h3>
          <div className="comp-spacer" />
          <div><img src="./static/images/firmify.png" alt="firmify" /></div>
        </div>
        <p>Firmify är en värdig uppstickare till de större aktörerna på svenska marknaden.</p>
      </div>
    </div>
    <div id="section2" />
    <div className="Content-divider-3">
      <div className="Readmore">
        <h3>Hur fungerar det när man fakturerar utan företag?</h3>
        <p>Det är väldigt enkelt att komma igång med att fakturera utan företag som privatperson.</p>
      </div>
    </div>
    <div className="Content-divider-4">
      <div className="Readmore">
        <h3>Vanliga frågor?</h3>
        <div><span>+</span><a href="#försäkring">Är jag försäkrad när jag fakturerar utan företag?</a></div>
        <div><span>+</span><a href="#pension">Får jag pension när jag jobbar på detta sättet?</a></div>
        <div><span>+</span><a href="#utbetalning-lön">När får jag min lön utbetald?</a></div>
        <div><span>+</span><a href="#bästa-tjänst">Vilken tjänst är bäst att använda?</a></div>
        <div><span>+</span><a href="#lägst-avgift">Vem har lägst avgift?</a></div>
      </div>
    </div>
    <div className="Content-divider-2">
      <div className="Comp-divider" id="försäkring">
        <div className="Comp-title">
          <h3>Är jag försäkrad när jag fakturerar utan företag?</h3>
        </div>
        <p>Är jag försäkrad när jag fakturerar utan företag?</p>
      </div>
      <div className="Comp-divider" id="pension">
        <div className="Comp-title">
          <h3>Får jag pension när jag jobbar på detta sättet?</h3>
        </div>
        <p>Får jag pension när jag jobbar på detta sättet?</p>
      </div>
      <div className="Comp-divider" id="utbetalning-lön">
        <div className="Comp-title">
          <h3>När får jag min lön utbetald?</h3>
        </div>
        <p>När får jag min lön utbetald?</p>
      </div>
      <div className="Comp-divider" id="bästa-tjänst">
        <div className="Comp-title">
          <h3>Vilken tjänst är bäst att använda?</h3>
        </div>
        <p>Vilken tjänst är bäst att använda?</p>
      </div>
      <div className="Comp-divider" id="lägst-avgift">
        <div className="Comp-title">
          <h3>Vem har lägst avgift?</h3>
        </div>
        <p>Vem har lägst avgift?</p>
      </div>
    </div>
    <Footer />
  </div>
)

export default index
