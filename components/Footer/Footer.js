import React from 'react';
import Link from 'next/link';

const footer = props => (
  <div>
    <div className="Footer-content">
      <div className="Footer-div">
        <h4>VAD GÖR VI?</h4>
        Vi hjälper dig välja tjänst när du ska fakturera utan företag som privatperson.
        Vi sammanställer också all information som du kan tänkas behöva veta.
      </div>
      <div className="Footer-div">
        <h4>INFORMATION</h4>
        <div><Link href='/news' prefetch><a>Nyheter & guider</a></Link></div>
        <div><Link href='/about' prefetch><a>Läs mer om oss här</a></Link></div>
        <div>© 2019 Faktura-utan-företag.se</div>
      </div>
    </div>
  </div>
);

export default footer;
