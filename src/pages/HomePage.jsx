import React from 'react';
import Layout from '../components/Layout.jsx';
import SectionTitle from '../components/SectionTitle.jsx';
import DeviceShot from '../components/DeviceShot.jsx';
import FeatureCard from '../components/FeatureCard.jsx';
import Faq from '../components/Faq.jsx';
import Cta from '../components/Cta.jsx';

import {
  ArrowRight,
  BrainCircuit,
  BriefcaseBusiness,
  CalendarDays,
  CheckCircle2,
  FileArchive,
  FileSearch,
  LockKeyhole,
  MessageCircle,
  Search,
  ShieldCheck,
  Sparkles,
  Users,
  WalletCards,
  Workflow,
  BellRing,
  Scale
} from 'lucide-react';

export default function HomePage() {
  return (
    <Layout>
      <section className="hero hero-home">
        <div className="hero-orb hero-orb-a" />
        <div className="hero-orb hero-orb-b" />

        <div className="container hero-grid-main">
          <div className="hero-copy-main">
            <span className="hero-kicker">
              <span />
              Hukuk büroları için tek çalışma sistemi
            </span>

            <div className="trial-badge">
              <Sparkles size={15} />
              7 GÜN ÜCRETSİZ DENEME
            </div>

            <h1>
              Hukuk büronuzun tüm operasyonu,{' '}
              <em>tek merkezde.</em>
            </h1>

            <p>
              Dava ve müvekkillerden belgelere, görev ve
              duruşmalardan finans ve ekip iletişimine kadar
              günlük işlerinizi Derkenar’da yönetin. UYAP UDF
              desteği ve dosya bağlamıyla çalışan Derkenar AI
              ile hukuki çalışma süreçlerinizi hızlandırın.
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
                href="/iletisim/"
              >
                Canlı Demo Talep Et
              </a>
            </div>

            <div className="trial-note">
              <CheckCircle2 size={16} />

              <span>
                Canlı demo sonrasında Derkenar’ı 7 gün boyunca
                ücretsiz kullanarak değerlendirin.
              </span>
            </div>

            <div className="hero-proof">
              <span>
                <CheckCircle2 />
                Dava & müvekkil
              </span>

              <span>
                <CheckCircle2 />
                Belge & UDF
              </span>

              <span>
                <CheckCircle2 />
                Görev & takvim
              </span>

              <span>
                <CheckCircle2 />
                AI & finans
              </span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-label">
              DERKENAR · OFİS KONTROL PANELİ
            </div>

            <DeviceShot
              src="/screenshots/dashboard.png"
              alt="Derkenar hukuk bürosu kontrol paneli"
              phone={false}
            />

            <div className="hero-float hero-float-ai">
              <BrainCircuit />
              <div>
                <strong>Derkenar AI</strong>
                <span>Dosya bağlamıyla çalışır</span>
              </div>
            </div>

            <div className="hero-float hero-float-sec">
              <ShieldCheck />
              <div>
                <strong>Kontrollü erişim</strong>
                <span>Rol ve kullanıcı bazlı yetki</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="trust-strip">
        <div className="container trust-grid">
          <span>
            <ShieldCheck />
            Rol bazlı yetkilendirme
          </span>

          <span>
            <LockKeyhole />
            Ekran kilidi
          </span>

          <span>
            <BellRing />
            Uygulama & e-posta hatırlatmaları
          </span>

          <span>
            <CalendarDays />
            Google Calendar senkronizasyonu
          </span>
        </div>
      </section>

      <section className="section section-white">
        <div className="container">
          <SectionTitle
            eyebrow="NEDEN DERKENAR?"
            title="Sadece dava takip etmeyin. Büronun çalışma düzenini yönetin."
            text="Derkenar, birbirinden kopuk kayıtları tek bir hukuk bürosu çalışma alanında birleştirir. Her modül diğerinin bağlamını güçlendirir."
            align="center"
          />

          <div className="feature-grid four">
            <FeatureCard
              icon={BrainCircuit}
              title="Dosyayla çalışan AI"
              href="/yapay-zeka/"
            >
              Dosyaya Sor, Duruşmaya Hazırla, Dosyayı Tamamla
              ve otomatik görev oluşturma gibi dosya odaklı
              akışlar.
            </FeatureCard>

            <FeatureCard
              icon={FileArchive}
              title="UYAP UDF & belge yaşam döngüsü"
              href="/uyap-udf/"
            >
              UDF görüntüleme, belge ilişkileri, erişim seviyesi,
              etiketler ve kayıtlı versiyon geçmişi.
            </FeatureCard>

            <FeatureCard
              icon={Workflow}
              title="Bütünleşik ofis operasyonu"
              href="/ozellikler/"
            >
              Dava, müvekkil, görev, duruşma, toplantı, takvim,
              finans ve iletişim aynı sistemde.
            </FeatureCard>

            <FeatureCard
              icon={ShieldCheck}
              title="Kurumsal kontrol"
              href="/guvenlik/"
            >
              Kullanıcı/rol yönetimi, özel yetkiler, denetim
              logları, ekran kilidi ve kontrollü belge erişimi.
            </FeatureCard>
          </div>
        </div>
      </section>

      <section className="section ai-showcase">
        <div className="container split-showcase">
          <div>
            <SectionTitle
              eyebrow="DERKENAR AI · DOSYA HAFIZASI"
              title="Dosyanızı takip eden değil, dosyanızla çalışan yapay zekâ."
              text="Dava kayıtları, görevler, duruşmalar, toplantılar, notlar ve analiz edilmiş belgelerden oluşan dosya bağlamını hukuki çalışma sürecinde kullanın."
              light
            />

            <div className="pill-list">
              <span>
                <Sparkles />
                Dosyaya Sor
              </span>

              <span>
                <Scale />
                Duruşmaya Hazırla
              </span>

              <span>
                <FileSearch />
                Dosyayı Tamamla
              </span>

              <span>
                <Workflow />
                Otomatik görev oluşturma
              </span>

              <span>
                <BrainCircuit />
                Belge analizi
              </span>

              <span>
                <FileArchive />
                Hukuki şablon oluşturma
              </span>
            </div>

            <a
              className="text-link-light"
              href="/yapay-zeka/"
            >
              Derkenar AI’ı detaylı incele
              <ArrowRight size={17} />
            </a>
          </div>

          <div className="phone-pair">
            <DeviceShot
              src="/screenshots/dosyaya-sor.jpg"
              alt="Derkenar AI Dosyaya Sor ekranı"
            />

            <DeviceShot
              src="/screenshots/ai.jpg"
              alt="Derkenar AI hukuki ön değerlendirme ekranı"
              className="phone-shift"
            />
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="container">
          <SectionTitle
            eyebrow="DOSYA BAĞLAMI"
            title="Bir dava dosyasındaki her şey, aynı bağlamda."
            text="Müvekkil, taraf, belge, görev, duruşma, toplantı ve finans hareketleri birbirinden kopuk ekranlar değil; dosyanın çalışma hafızasının parçalarıdır."
          />

          <div className="module-grid">
            <div className="module-card">
              <Users />
              <div>
                <h3>Müvekkil & taraflar</h3>
                <p>
                  Bireysel ve kurumsal müvekkilleri, davaya
                  bağlı veya müvekkilden bağımsız taraf
                  kayıtlarını yönetin.
                </p>
              </div>
            </div>

            <div className="module-card">
              <BriefcaseBusiness />
              <div>
                <h3>Dava yönetimi</h3>
                <p>
                  Yargı türü, mahkeme, dosya no, sorumlu avukat
                  ve ilgili tüm kayıtları tek dosyada görün.
                </p>
              </div>
            </div>

            <div className="module-card">
              <FileArchive />
              <div>
                <h3>Belgeler</h3>
                <p>
                  Dava, müvekkil ve vekâletname ilişkileri;
                  erişim seviyesi, etiketler ve versiyon
                  geçmişi.
                </p>
              </div>
            </div>

            <div className="module-card">
              <Workflow />
              <div>
                <h3>Görevler</h3>
                <p>
                  Sorumlular, öncelik, son tarih, tahmini süre,
                  ilerleme, notlar ve takvime ekleme.
                </p>
              </div>
            </div>

            <div className="module-card">
              <CalendarDays />
              <div>
                <h3>Duruşma & toplantı</h3>
                <p>
                  Dava bağlantılı duruşmalar, ofis toplantıları,
                  katılımcılar, notlar ve hatırlatmalar.
                </p>
              </div>
            </div>

            <div className="module-card">
              <WalletCards />
              <div>
                <h3>Finans</h3>
                <p>
                  Ücret anlaşmaları, ödeme planları, tahsilat,
                  gider, iade ve kalan bakiye takibi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section document-showcase">
        <div className="container split-showcase reverse">
          <div className="device-stack">
            <DeviceShot
              src="/screenshots/udf-belge.jpg"
              alt="Derkenar UYAP UDF belge yönetimi ekranı"
            />
          </div>

          <div>
            <SectionTitle
              eyebrow="BELGE YÖNETİMİ"
              title="Bir belge yalnızca yüklenmez. Dosyayla birlikte yönetilir."
              text="Derkenar belgenin yalnızca dosyasını değil; ilişkisini, erişimini, etiketlerini ve sürüm geçmişini de kayıt altında tutar."
            />

            <ul className="check-list-pro">
              <li>
                <CheckCircle2 />
                UYAP UDF dosyalarını sistem içinde görüntüleme
                ve içerik işleme
              </li>

              <li>
                <CheckCircle2 />
                Orijinal UDF dosyasını değiştirmeden saklama
              </li>

              <li>
                <CheckCircle2 />
                Belge aileleri ve versiyon geçmişi
              </li>

              <li>
                <CheckCircle2 />
                Dava, müvekkil ve vekâletname ilişkileri
              </li>

              <li>
                <CheckCircle2 />
                Kısıtlı erişim ve etiketleme
              </li>
            </ul>

            <a
              className="btn btn-outline"
              href="/uyap-udf/"
            >
              UYAP UDF özelliğini incele
            </a>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <SectionTitle
            eyebrow="EKİP & ZAMAN"
            title="İş dağılımı, ilerleme ve önemli tarihler görünür olsun."
            text="Görev modülü, performans görünümü, ortak takvim ve bildirim sistemi birlikte çalışarak büronun günlük operasyonunu görünür hale getirir."
            align="center"
          />

          <div className="screenshot-row three">
            <div>
              <DeviceShot
                src="/screenshots/gorev-detay.jpg"
                alt="Görev detay ve ilerleme ekranı"
              />
              <h3>Görev & sorumluluk</h3>
              <p>
                Çoklu sorumlu, son tarih, öncelik, tahmini süre
                ve ilerleme takibi.
              </p>
            </div>

            <div>
              <DeviceShot
                src="/screenshots/performans.jpg"
                alt="Derkenar performans ve iş yükü ekranı"
              />
              <h3>Performans & iş yükü</h3>
              <p>
                Kişisel ve ekip performansı, gecikmeler ve aktif
                iş yükü görünürlüğü.
              </p>
            </div>

            <div>
              <DeviceShot
                src="/screenshots/takvim.jpg"
                alt="Derkenar ortak takvim ekranı"
              />
              <h3>Tek takvim</h3>
              <p>
                Duruşma, toplantı, görev ve son tarihleri ay,
                hafta ve gün görünümünde yönetin.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="container split-showcase">
          <div>
            <SectionTitle
              eyebrow="FİNANS YÖNETİMİ"
              title="Ücret anlaşmasından tahsilata kadar dosyanın finansal sürecini yönetin."
              text="Müvekkil ve dava bazlı ödeme planlarını, tahsilatları, giderleri, iadeleri ve kalan bakiyeyi aynı çalışma alanında takip edin."
            />

            <div className="metric-cards">
              <div>
                <strong>Anlaşılan ücret</strong>
                <span>Ödeme planlarının toplamı</span>
              </div>

              <div>
                <strong>Net tahsilat</strong>
                <span>Tahsilat eksi geçerli iadeler</span>
              </div>

              <div>
                <strong>Kalan bakiye</strong>
                <span>Henüz tahsil edilmemiş plan bakiyesi</span>
              </div>

              <div>
                <strong>Net finansal sonuç</strong>
                <span>Tahsilat, gider ve iade görünümü</span>
              </div>
            </div>

            <a
              className="text-link"
              href="/ozellikler/#finans"
            >
              Finans özelliklerini incele
              <ArrowRight size={17} />
            </a>
          </div>

          <div className="device-stack right">
            <DeviceShot
              src="/screenshots/finans.jpg"
              alt="Derkenar finans yönetimi ekranı"
            />
          </div>
        </div>
      </section>

      <section className="section security-home">
        <div className="container split-showcase reverse">
          <div className="phone-pair security-pair">
            <DeviceShot
              src="/screenshots/ekran-kilidi.jpg"
              alt="Derkenar ekran kilidi PIN ekranı"
            />

            <DeviceShot
              src="/screenshots/google-calendar.jpg"
              alt="Google Calendar senkronizasyon ekranı"
              className="phone-shift"
            />
          </div>

          <div>
            <SectionTitle
              eyebrow="KURUMSAL KULLANIM"
              title="Kontrol sizde kalsın."
              text="Hukuk bürosunun hassas verileri için kullanıcı, yetki, oturum ve denetim katmanlarını birlikte kullanın."
              light
            />

            <ul className="check-list-pro light">
              <li>
                <CheckCircle2 />
                Rol bazlı ve kullanıcıya özel yetkiler
              </li>

              <li>
                <CheckCircle2 />
                Belge indirme, silme ve versiyon yönetimi gibi
                ayrıntılı izinler
              </li>

              <li>
                <CheckCircle2 />
                Ekran kilidi ve oturum güvenliği
              </li>

              <li>
                <CheckCircle2 />
                Denetim logları ve kritik işlem kayıtları
              </li>

              <li>
                <CheckCircle2 />
                Kurumsal lisans ve kullanıcı yönetimi
              </li>
            </ul>

            <a
              className="btn btn-outline-light"
              href="/guvenlik/"
            >
              Güvenlik yaklaşımını incele
            </a>
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="container">
          <SectionTitle
            eyebrow="BAĞLANTILI ÇALIŞMA"
            title="Ofis içindeki bilgi akışı Derkenar’dan kopmasın."
            text="Arama, bildirim, iletişim ve takvim entegrasyonları günlük kullanımı tamamlar."
            align="center"
          />

          <div className="feature-grid four compact">
            <FeatureCard
              icon={Search}
              title="Global Arama"
            >
              Müvekkil, dava, belge, görev ve not kayıtlarında
              tek noktadan arama.
            </FeatureCard>

            <FeatureCard
              icon={BellRing}
              title="Bildirim & hatırlatma"
            >
              Görev, toplantı ve duruşma için uygulama içi
              bildirim ve e-posta hatırlatmaları.
            </FeatureCard>

            <FeatureCard
              icon={MessageCircle}
              title="Ofis içi sohbet"
            >
              Ofis Genel ve birebir sohbetler; çevrimiçi durum
              ve okundu bilgisi.
            </FeatureCard>

            <FeatureCard
              icon={CalendarDays}
              title="Google Calendar"
            >
              Görev, toplantı ve duruşmaların Google Calendar
              ile otomatik senkronizasyonu.
            </FeatureCard>
          </div>

          <div className="mini-shots">
            <DeviceShot
              src="/screenshots/bildirimler.jpg"
              alt="Derkenar bildirim merkezi"
            />

            <DeviceShot
              src="/screenshots/sohbet.jpg"
              alt="Derkenar ofis içi sohbet"
            />
          </div>
        </div>
      </section>
<Faq />
      <Cta />
    </Layout>
  );
}