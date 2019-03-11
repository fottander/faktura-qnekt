import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const about = () => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />
      <link rel="stylesheet" href="/static/base.css" />
      <title>Om oss - fakturera utan företag som privatperson</title>
      <meta name="description" content="Vill du veta mer om hur man kan fakturera utan företag som privatperson? Vi hjälper dig att jämföra de olika tjänsterna som finns på marknaden samt massor av bra information." />
    </Head>
    < Navbar />
    <div className="App-header">
      <h1>Ska du fakturera utan företag som privatperson?</h1>
      <h4>Så hur kan vi hjälpa dig?</h4>
    </div>
    < Footer />
  </div>
)

export default about
