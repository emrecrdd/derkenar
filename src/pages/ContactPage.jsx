import React from 'react';
import Layout from '../components/Layout.jsx';

import {
  ArrowRight,
  CheckCircle2,
  MessageSquareText,
  Mail,
  Phone
} from 'lucide-react';

export default function ContactPage() {
  return (
    <Layout>
      <section className="page-hero contact-hero">
        <div className="container">
          <span className="hero-kicker dark">
            <span />
            DEMO TALEBİ
          </span>

          <h1>
            Derkenar’ı kendi hukuk büronuz için değerlendirin.
          </h1>

          <p>
            Demo talep formunu doldurun veya doğrudan bizimle
            iletişime geçin. Büronuzun çalışma yapısına göre
            demo sürecini birlikte planlayalım.
          </p>
        </div>
      </section>

      <section className="section section-white">
        <div className="container contact-grid">

          <div className="contact-copy">
            <span className="contact-icon">
              <MessageSquareText />
            </span>

            <h2>Canlı ürün demosu</h2>

            <p>
              Derkenar herkese açık bir demo bağlantısı yerine,
              ilgili hukuk bürosunun ihtiyacına göre tanıtılır.
            </p>

            <ul className="check-list-pro">
              <li>
                <CheckCircle2 />
                Dava ve müvekkil akışını görün
              </li>

              <li>
                <CheckCircle2 />
                Derkenar AI ve UDF özelliklerini inceleyin
              </li>

              <li>
                <CheckCircle2 />
                Görev, performans, takvim ve finans modüllerini
                değerlendirin
              </li>

              <li>
                <CheckCircle2 />
                Yetki ve güvenlik yaklaşımını birlikte gözden geçirin
              </li>
            </ul>

            <div className="direct-contact">
              <h3>Doğrudan iletişim</h3>

              <a
                href="tel:+905537934281"
                className="direct-contact-item"
              >
                <span className="direct-contact-icon">
                  <Phone size={20} />
                </span>

                <span>
                  <small>Telefon</small>
                  <strong>0553 793 42 81</strong>
                </span>
              </a>

              <a
                href="mailto:derkenariletisim@gmail.com"
                className="direct-contact-item"
              >
                <span className="direct-contact-icon">
                  <Mail size={20} />
                </span>

                <span>
                  <small>E-posta</small>
                  <strong>derkenariletisim@gmail.com</strong>
                </span>
              </a>
            </div>
          </div>

          <form
            className="contact-form"
            name="demo-talebi"
            method="POST"
            data-netlify="true"
            action="/iletisim/?basarili=1"
          >
            <input
              type="hidden"
              name="form-name"
              value="demo-talebi"
            />

            <label>
              Ad Soyad
              <input
                name="ad-soyad"
                required
                placeholder="Adınız ve soyadınız"
              />
            </label>

            <label>
              Hukuk Bürosu
              <input
                name="hukuk-burosu"
                placeholder="Büro / şirket adı"
              />
            </label>

            <div className="form-row">
              <label>
                Telefon
                <input
                  name="telefon"
                  type="tel"
                  placeholder="05xx xxx xx xx"
                />
              </label>

              <label>
                E-posta
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="ornek@hukuk.com"
                />
              </label>
            </div>

            <label>
              Mesaj
              <textarea
                name="mesaj"
                rows="5"
                placeholder="Büronuzun ekip büyüklüğü veya özellikle görmek istediğiniz alanlar..."
              />
            </label>

            <button
              className="btn btn-gold btn-lg"
              type="submit"
            >
              Demo Talebi Gönder
              <ArrowRight size={18} />
            </button>

            <small>
              Gönderdiğiniz bilgiler yalnızca demo talebinizle
              ilgili iletişim amacıyla kullanılır.
            </small>
          </form>

        </div>
      </section>
    </Layout>
  );
}