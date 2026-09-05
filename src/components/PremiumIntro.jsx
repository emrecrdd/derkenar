import React from 'react';
import {
  ArrowRight,
  BrainCircuit,
  CheckCircle2,
  ChevronDown
} from 'lucide-react';

export default function PremiumIntro() {
  const scrollToContent = () => {
    const target = document.getElementById('home-content');

    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="premium-intro">
      <video
        className="premium-intro-video"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      >
        <source
          src="/videos/hero.mp4"
          type="video/mp4"
        />
      </video>

      <div className="premium-intro-overlay" />
      <div className="premium-intro-vignette" />
      <div className="premium-intro-grid" />

      <div className="premium-intro-content container">
        <div className="premium-intro-brand">
          <img
            src="/brand/favicon.svg"
            alt=""
            aria-hidden="true"
          />

          <div>
            <strong>DERKENAR</strong>
            <span>HUKUK BÜRO YÖNETİMİ</span>
          </div>
        </div>

        <div className="premium-intro-ai">
          <BrainCircuit size={16} />
          DERKENAR AI · HUKUK BÜROLARI İÇİN YENİ NESİL ÇALIŞMA SİSTEMİ
        </div>

        <h1>
          Dosyanızı takip etmekten
          <br />

          <em>dosyanızla çalışmaya geçin.</em>
        </h1>

        <p>
          Derkenar; dava, müvekkil, belge, görev, duruşma,
          toplantı, takvim, finans ve ekip yönetimini,
          dosya bağlamıyla çalışan Derkenar AI ile
          tek çalışma sisteminde birleştirir.
        </p>

        <div className="premium-intro-actions">
          <a
            href="/iletisim/"
            className="btn btn-gold btn-lg"
          >
            7 Gün Ücretsiz Deneyin
            <ArrowRight size={18} />
          </a>

          <a
            href="/yapay-zeka/"
            className="premium-intro-secondary"
          >
            Derkenar AI’ı Keşfedin
            <ArrowRight size={17} />
          </a>
        </div>

        <div className="premium-intro-features">
          <span>
            <CheckCircle2 />
            Dosya bağlamıyla çalışan AI
          </span>

          <span>
            <CheckCircle2 />
            UYAP UDF dahili görüntüleyici
          </span>

          <span>
            <CheckCircle2 />
            Duruşma ve görev yönetimi
          </span>
        </div>
      </div>

      <button
        type="button"
        className="premium-intro-scroll"
        onClick={scrollToContent}
        aria-label="Sayfanın devamına git"
      >
        <span>Keşfet</span>
        <ChevronDown />
      </button>
    </section>
  );
}