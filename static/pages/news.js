import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Link from 'next/link';

const news = () => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />
      <link rel="stylesheet" href="/static/base.css" />
      <title>Nyheter och guider - fakturera utan företag</title>
      <meta name="description" content="Alla senaste nyheterna och guiderna om hur du kan fakturera utan företag som privatperson eller frilansare." />
    </Head>
    < Navbar />
    <div className="App-header-content-news">
      <h2>Nyheter & guider</h2>
      <strong>Här hittar du de senaste guiderna och nyheterna som kan hjälpa dig att välja rätt tjänst när du ska fakturera utan företag som privatperson eller frilansare.</strong>
    </div>
    <div className="Content-divider-2">
      <div className="Comp-divider">
        <div className="Comp-title-news">
          <h3>Faktura-utan-företag.se lanseras</h3>
          <div className="comp-spacer" />
          <div><img src="./static/images/logga-faktura.png" alt="Faktura-utan-företag.se" /></div>
        </div>
        <p>Den mest växande arbetsformen i Sverige just nu är egenanställning eller frilansande som det kallas i folkmun. bara det största bolaget i Sverige omsätter över en miljard kronor.</p>
        <p>Det kan därför vara lite svårt att välja rätt bland alla de företag som just nu finns på marknaden. Det är heller inte helt lätt att veta hur det fungerar och om det passar just din verksamhet.</p>
        <p>Just därför startade vi Faktura-utan-företag.se som är en jämförelestjänst och informationssida som behandlar alla de provlem man kan tänkas ställas för. Vi är en opartisk aktör som strävar efter att ge de bästa tipsen och jämförelserna.</p>
        <div><Link href='/'><a>Fakturera utan företag som privatperson eller frilansare</a></Link></div>
      </div>
    </div>
    < Footer />
  </div>
)

export default news
