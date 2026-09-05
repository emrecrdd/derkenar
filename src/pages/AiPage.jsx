import React from 'react';

import Layout from '../components/Layout.jsx';
import SectionTitle from '../components/SectionTitle.jsx';
import DeviceShot from '../components/DeviceShot.jsx';
import Cta from '../components/Cta.jsx';

import {
  ArrowRight,
  BrainCircuit,
  FileSearch,
  Scale,
  Workflow,
  FileText,
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  ShieldCheck,
  ListChecks,
  Target,
  MessageSquareText,
  CalendarDays,
  Search
} from 'lucide-react';

const aiCapabilities = [
  {
    icon: BrainCircuit,
    title: 'Dava Analizi',
    text: 'Dosyanın mevcut durumunu, hazırlık seviyesini, risklerini, eksiklerini ve sonraki çalışma adımlarını birlikte değerlendirir.'
  },
  {
    icon: FileSearch,
    title: 'Belge Analizi',
    text: 'Belge türünü, tarafları, önemli tarihleri, riskleri, çelişkileri, eksik bilgileri ve önerilen işlemleri ortaya çıkarır.'
  },
  {
    icon: Search,
    title: 'Dosyaya Sor',
    text: 'Dava kayıtları, görevler, duruşmalar, toplantılar, notlar ve analiz edilmiş belgeler üzerinden dosyaya soru sorun.'
  },
  {
    icon: Scale,
    title: 'Duruşmaya Hazırla',
    text: 'Duruşma özeti, kritik konular, önemli deliller, eksikler ve kontrol edilmesi gereken hususlar için hazırlık brifi oluşturur.'
  },
  {
    icon: ListChecks,
    title: 'Dosyayı Tamamla',
    text: 'Eksik bilgi, belge, delil ve tamamlanması gereken iş adımlarını görünür hale getirir.'
  },
  {
    icon: Workflow,
    title: 'Otomatik Görev Oluşturma',
    text: 'AI tarafından önerilen işlemleri öncelik ve açıklamalarıyla gerçek ofis görevlerine dönüştürür.'
  }
];

export default function AiPage() {
  return (
    <Layout>

      {/* HERO */}
      <section className="ai-page-hero">
        <div className="ai-page-glow ai-page-glow-one" />
        <div className="ai-page-glow ai-page-glow-two" />

        <div className="container ai-hero-grid">
          <div className="ai-hero-copy">
            <span className="hero-kicker">
              <span />
              DERKENAR AI · DOSYA ZEKÂSI
            </span>

            <div className="ai-hero-badge">
              <Sparkles size={15} />
              DOSYA BAĞLAMIYLA ÇALIŞIR
            </div>

            <h1>
              Dosyanızı anlayan{' '}
              <em>yapay zekâ çalışma alanı.</em>
            </h1>

            <p>
              Derkenar AI; dava kayıtları, görevler, duruşmalar,
              toplantılar, notlar ve analiz edilmiş belgelerden oluşan
              dosya bağlamıyla çalışır. Dosyanın yalnızca içeriğini değil;
              risklerini, eksiklerini, delil ihtiyaçlarını ve sonraki
              çalışma adımlarını da değerlendirmeye yardımcı olur.
            </p>

            <div className="hero-actions-main">
              <a
                className="btn btn-gold btn-lg"
                href="/iletisim/"
              >
                7 Gün Ücretsiz Deneyin
                <ArrowRight size={18} />
              </a>

              <a
                className="btn btn-ghost-light btn-lg"
                href="#ai-yetenekler"
              >
                AI Özelliklerini İncele
              </a>
            </div>

            <div className="ai-hero-points">
              <span>
                <CheckCircle2 />
                Risk & eksik tespiti
              </span>

              <span>
                <CheckCircle2 />
                Duruşma hazırlığı
              </span>

              <span>
                <CheckCircle2 />
                Stratejik değerlendirme
              </span>
            </div>
          </div>

          <div className="ai-hero-visual">
            <div className="ai-hero-shot ai-hero-shot-main">
              <DeviceShot
                src="/screenshots/2.png"
                alt="Derkenar AI belge analizi, önemli tarihler ve hukuki riskler"
                phone={false}
              />
            </div>

            <div className="ai-hero-shot ai-hero-shot-secondary">
              <DeviceShot
                src="/screenshots/11.png"
                alt="Derkenar AI duruşma hazırlık brifi"
                phone={false}
              />
            </div>

            <div className="ai-visual-note">
              <BrainCircuit size={19} />
              <div>
                <strong>Dosyayı analiz edin</strong>
                <span>Tespiti aksiyona dönüştürün</span>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* AI CAPABILITIES */}
      <section
        className="section section-white"
        id="ai-yetenekler"
      >
        <div className="container">
          <SectionTitle
            eyebrow="DERKENAR AI"
            title="Tek bir chatbot değil. Birbirine bağlı hukuki çalışma akışları."
            text="Dosyayı incelemekten duruşmaya hazırlanmaya, eksikleri belirlemekten yapılması gerekenleri göreve dönüştürmeye kadar farklı AI araçları aynı dosya bağlamında çalışır."
            align="center"
          />

          <div className="ai-capability-grid">
            {aiCapabilities.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  className="ai-capability-card"
                  key={item.title}
                >
                  <span className="ai-capability-icon">
                    <Icon />
                  </span>

                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>


      {/* BELGE ANALİZİ */}
      <section className="section ai-analysis-section">
        <div className="container">
          <div className="ai-section-heading">
            <span className="ai-section-eyebrow">
              GELİŞMİŞ BELGE ANALİZİ
            </span>

            <h2>
              Belgeyi yalnızca okumaz;{' '}
              <em>
                riskleri, çelişkileri, eksikleri ve yapılması
                gerekenleri ortaya çıkarır.
              </em>
            </h2>

            <p>
              Derkenar AI desteklenen hukuki belgeleri yapılandırılmış
              biçimde inceler. Önemli tarihleri ve tarafları tespit eder,
              hukuki riskleri sınıflandırır, eksik bilgi ve delilleri
              görünür hale getirir ve çalışma önerileri üretir.
            </p>
          </div>

          <div className="ai-two-shot-grid">
            <DeviceShot
              src="/screenshots/2.png"
              alt="Derkenar AI önemli tarihler ve risk analizi"
              phone={false}
            />

            <DeviceShot
              src="/screenshots/4.png"
              alt="Derkenar AI eksik bilgiler ve önerilen işlemler"
              phone={false}
            />
          </div>

          <div className="ai-analysis-points">
            <div>
              <CheckCircle2 />
              <span>
                <strong>Önemli tarihler</strong>
                Belgede geçen kritik tarihleri ve bağlamlarını çıkarır.
              </span>
            </div>

            <div>
              <CheckCircle2 />
              <span>
                <strong>Risk sınıflandırması</strong>
                Tespit edilen riskleri önem seviyelerine göre ayırır.
              </span>
            </div>

            <div>
              <CheckCircle2 />
              <span>
                <strong>Çelişki ve tutarsızlıklar</strong>
                Mevzuat, tarih, olay ve belge içeriğindeki dikkat edilmesi
                gereken noktaları görünür hale getirir.
              </span>
            </div>

            <div>
              <CheckCircle2 />
              <span>
                <strong>Önerilen işlemler</strong>
                Tespitlerin ardından hangi belge veya bilginin
                doğrulanması gerektiğini çalışma adımına dönüştürür.
              </span>
            </div>
          </div>
        </div>
      </section>


      {/* DAVA ANALİZİ */}
      <section className="section section-white ai-case-analysis">
        <div className="container split-showcase">
          <div className="ai-stack-shots">
            <DeviceShot
              src="/screenshots/6.png"
              alt="Derkenar AI dava riskleri ve kritik tarihler"
              phone={false}
            />

            <DeviceShot
              src="/screenshots/7.png"
              alt="Derkenar AI eksik bilgiler eksik deliller ve stratejik değerlendirme"
              phone={false}
              className="ai-stack-offset"
            />
          </div>

          <div>
            <SectionTitle
              eyebrow="AI DAVA ANALİZİ"
              title="Dosyanın hukuki ve operasyonel durumunu birlikte görün."
              text="Derkenar AI yalnızca yüklenen belgeye bakmaz. Dava kaydı, taraflar, belgeler, görevler, duruşmalar, toplantılar ve notları aynı dosya bağlamında değerlendirir."
            />

            <ul className="check-list-pro">
              <li>
                <CheckCircle2 />
                Dosya sağlığı ve hazırlık görünümü
              </li>

              <li>
                <CheckCircle2 />
                Risk skoru ve risk sınıflandırması
              </li>

              <li>
                <CheckCircle2 />
                Eksik bilgi tespiti
              </li>

              <li>
                <CheckCircle2 />
                Eksik delil ve belge ihtiyaçları
              </li>

              <li>
                <CheckCircle2 />
                Stratejik değerlendirme
              </li>

              <li>
                <CheckCircle2 />
                Müvekkille görüşülmesi gereken konular
              </li>
            </ul>
          </div>
        </div>
      </section>


      {/* ANALİZDEN GÖREVE */}
      <section className="section ai-action-section">
        <div className="container split-showcase reverse">
          <div>
            <SectionTitle
              eyebrow="ANALİZDEN AKSİYONA"
              title="Tespit ekranda kalmaz. Göreve dönüşür."
              text="Derkenar AI’ın önerdiği sonraki işlemleri tek tıkla görev modülüne taşıyın. Görevin açıklaması, önceliği, dosya ve müvekkil bağlantısı AI önerisinden çalışma akışına aktarılabilir."
              light
            />

            <div className="ai-action-cards">
              <div>
                <ListChecks />
                <strong>Önerilen Sonraki İşlemler</strong>
                <span>
                  Dosyanın mevcut durumuna göre yapılması gerekenleri
                  belirler.
                </span>
              </div>

              <div>
                <Target />
                <strong>Önceliklendirme</strong>
                <span>
                  Kritik, yüksek ve diğer öncelik seviyelerini
                  görünür hale getirir.
                </span>
              </div>

              <div>
                <Workflow />
                <strong>Görev Oluştur</strong>
                <span>
                  AI önerisini gerçek ekip görevine dönüştürür.
                </span>
              </div>
            </div>
          </div>

          <div>
            <DeviceShot
              src="/screenshots/5.png"
              alt="Derkenar AI önerilen sonraki işlemler ve görev oluşturma"
              phone={false}
            />
          </div>
        </div>
      </section>


      {/* DURUŞMA HAZIRLIĞI */}
      <section className="section section-white ai-hearing-section">
        <div className="container">
          <SectionTitle
            eyebrow="DURUŞMAYA HAZIRLA"
            title="Duruşmaya yalnızca takvim hatırlatmasıyla değil, dosya brifiyle hazırlanın."
            text="Derkenar AI seçili duruşmayı dosyanın kayıtları ve analiz edilmiş belgeleriyle birlikte değerlendirerek hazırlık brifi oluşturur."
            align="center"
          />

          <div className="ai-two-shot-grid hearing">
            <DeviceShot
              src="/screenshots/9.png"
              alt="Derkenar AI duruşmada dikkat edilecekler"
              phone={false}
            />

            <DeviceShot
              src="/screenshots/11.png"
              alt="Derkenar AI duruşma hazırlık brifi"
              phone={false}
            />
          </div>

          <div className="ai-hearing-features">
            <div>
              <Scale />
              <strong>Duruşma Özeti</strong>
              <p>
                Dosyanın mevcut durumu ve hedef duruşmanın bağlamı tek
                brifte sunulur.
              </p>
            </div>

            <div>
              <AlertTriangle />
              <strong>Dikkat Edilecekler</strong>
              <p>
                Duruşmadan önce doğrulanması veya tamamlanması gereken
                kritik hususlar belirlenir.
              </p>
            </div>

            <div>
              <FileSearch />
              <strong>Önemli Deliller</strong>
              <p>
                Mevcut ve eksik delillerin dosyadaki durumu
                değerlendirilir.
              </p>
            </div>

            <div>
              <CalendarDays />
              <strong>Kritik Tarihler</strong>
              <p>
                Duruşma ve dosya açısından önem taşıyan tarihler
                hazırlık akışında görünür tutulur.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* MÜVEKKİL + UYARILAR */}
      <section className="section ai-client-section">
        <div className="container split-showcase">
          <div>
            <SectionTitle
              eyebrow="MÜVEKKİL & AVUKAT KONTROLÜ"
              title="Müvekkille hangi konuların görüşülmesi gerektiğini de görün."
              text="Dosyadaki eksikler yalnızca belge listesinde bırakılmaz. Derkenar AI, müvekkilden istenebilecek bilgileri ve avukat incelemesi gerektiren kritik hususları ayrıca görünür hale getirir."
            />

            <div className="ai-client-list">
              <div>
                <MessageSquareText />
                <span>
                  Müvekkille görüşülebilecek konular
                </span>
              </div>

              <div>
                <FileText />
                <span>
                  Eksik belge ve bilgi talepleri
                </span>
              </div>

              <div>
                <ShieldCheck />
                <span>
                  Avukat incelemesi gereken noktalar
                </span>
              </div>

              <div>
                <AlertTriangle />
                <span>
                  Eksik veri nedeniyle kesin değerlendirme
                  yapılamayan hususlar
                </span>
              </div>
            </div>
          </div>

          <DeviceShot
            src="/screenshots/8.png"
            alt="Derkenar AI müvekkille görüşülebilecek konular ve avukat incelemesi gerekli uyarıları"
            phone={false}
          />
        </div>
      </section>


      {/* DOSYAYA SOR / ŞABLON */}
      <section className="section section-white">
        <div className="container">
          <SectionTitle
            eyebrow="DAHA FAZLASI"
            title="Dosyanızla konuşun, eksikleri tamamlayın ve hukuki çalışmayı hızlandırın."
            text="Derkenar AI farklı çalışma türleri için ayrı araçlar sunar; kullanıcı hangi AI akışını kullandığını bilir."
            align="center"
          />

          <div className="ai-extra-grid">
            <article>
              <BrainCircuit />
              <h3>Dosyaya Sor</h3>
              <p>
                “Bu dosyada en kritik risk nedir?”, “Hangi deliller
                eksik?” veya “Yaklaşan kritik işlemler neler?” gibi
                soruları doğrudan dosyanıza sorun.
              </p>
            </article>

            <article>
              <ListChecks />
              <h3>Dosyayı Tamamla</h3>
              <p>
                Dosyanın mevcut kayıtlarını değerlendirerek eksik bilgi,
                belge, delil ve iş adımlarının belirlenmesine destek olur.
              </p>
            </article>

            <article>
              <FileText />
              <h3>Hukuki Şablon Oluşturma</h3>
              <p>
                Belge türü, mahkeme, uyuşmazlık konusu, olaylar, talepler
                ve deliller gibi yapılandırılmış girdilerle avukat
                incelemesine hazır ilk taslaklar oluşturun.
              </p>
            </article>
          </div>
        </div>
      </section>


      {/* NOTICE */}
      <section className="ai-legal-notice-section">
        <div className="container">
          <div className="ai-legal-notice">
            <AlertTriangle />

            <div>
              <strong>Avukat kontrolü esastır.</strong>
              <p>
                Derkenar AI çıktıları çalışma ve ön değerlendirme
                amaçlıdır. Yapay zekâ tarafından oluşturulan analiz,
                öneri ve içerikler hukuki işlemden önce avukat tarafından
                kontrol edilmelidir.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Cta />

    </Layout>
  );
}