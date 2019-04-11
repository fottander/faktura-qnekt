import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const about = () => (
  <div>
    <Head>
      <title>Om oss - fakturera utan företag som privatperson</title>
      <meta name="description" content="Vill du veta mer om hur man kan fakturera utan företag som privatperson? Vi hjälper dig att jämföra de olika tjänsterna som finns på marknaden samt massor av bra information." />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />
      <link rel="stylesheet" href="/static/base.css" />
    </Head>
    < Navbar />
    <div className="App-header">
      <h2>Vi är en jämförelsesajt som hjälper dig när du ska fakturera utan företag</h2>
      <h3>Vi jämför de främsta aktörerna på den svenska marknaden.</h3>
      <h3>Vi skriver också om hur det fungerar när du fakturerar som privatperson eller frilansare.</h3>
      <h5>Vill du kontakta oss kan du göra det på felix@ottander.se</h5>
    </div>
    < Footer />
  </div>
)

export default about
