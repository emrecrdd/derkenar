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