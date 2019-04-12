import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Link from 'next/link';
import Layout from '../components/Layout'

const lankar = () => (
  <div>
    <Head>
      <title>Bra länkar - Faktura-utan-företag.se</title>
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />
      <link rel="stylesheet" href="/static/base.css" />
    </Head>
    <Layout>
    < Navbar />
    <div className="App-header-content-news">
      <h1>Våra länkkompisar</h1>
    </div>
    <div className="Content-divider-2">
      <div className="Comp-divider">
        <a href="http://xn--svenskalnkar-ncb.com" target="_blank"><img src="http://xn--svenskalnkar-ncb.com/images/80x15.png" width="80" height="15" border="0" alt="SvenskaLänkar.com - en bra svensk seo-optimerad länkkatalog" /></a>      
      </div>
    </div>
    < Footer />
    </Layout>
  </div>
)

export default lankar
