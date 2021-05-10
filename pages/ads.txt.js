import React from 'react'
export default class Ads extends React.Component {
  static async getInitialProps ({ req, res }) {
    //res.writeHead(302, { Location: '/redirect' }) //sample how to response custom header
    res.write('google.com, pub-5319889050898668, DIRECT, f08c47fec0942fa0')
    res.end()
  }
}
