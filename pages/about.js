import React from 'react';
import Head from 'next/head';
import App from '../components/App/App';
import Footer from '../components/Footer/Footer';

const about = () => (
  <div>
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />
      <link rel="stylesheet" href="/static/base.css" />
      <title>Om oss - fakturera utan företag som privatperson</title>
      <meta name="description" content="Vill du veta mer om hur man kan fakturera utan företag som privatperson? Vi hjälper dig att jämföra de olika tjänsterna som finns på marknaden samt massor av bra information." />
    </Head>
    < App />
    <p>This is the about page</p>
    < Footer />
  </div>
)

export default about
