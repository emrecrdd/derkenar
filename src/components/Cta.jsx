import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Cta() {
  return (
    <section className="cta-section">
      <div className="container cta-card">
        <div>
          <span className="eyebrow-text gold">CANLI DEMO</span>
          <h2>Derkenar’ı kendi hukuk büronuzun iş akışıyla değerlendirin.</h2>
          <p>Hazır bir ürün turu yerine, büronuzun ihtiyaçlarına göre sistemi birlikte inceleyelim.</p>
          <div className="cta-points"><span><CheckCircle2 size={17}/>Gerçek ürün ekranları</span><span><CheckCircle2 size={17}/>Hukuk bürosuna özel akış</span><span><CheckCircle2 size={17}/>Kurulum öncesi değerlendirme</span></div>
        </div>
        <a className="btn btn-gold btn-lg" href="/iletisim/">Demo Talep Et <ArrowRight size={18}/></a>
      </div>
    </section>
  );
}
