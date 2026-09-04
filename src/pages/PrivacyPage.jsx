import React from 'react';
import Layout from '../components/Layout.jsx';

export default function PrivacyPage() {
  return (
    <Layout>
      <section className="page-hero">
        <div className="container">
          <span className="hero-kicker dark">
            <span />
            GİZLİLİK
          </span>

          <h1>Gizlilik ve kişisel verilerin korunması.</h1>

          <p>
            Derkenar ile iletişime geçtiğinizde paylaştığınız bilgilerin
            hangi amaçlarla kullanıldığına ilişkin temel bilgilendirmeyi
            bu sayfada bulabilirsiniz.
          </p>
        </div>
      </section>

      <section className="section section-white">
        <div className="container prose">

          <h2>Demo talep formu</h2>
          <p>
            Demo talep formu üzerinden iletilen ad soyad, hukuk bürosu,
            telefon, e-posta ve mesaj bilgileri; demo talebinizi
            değerlendirmek, sizinle iletişime geçmek ve Derkenar hakkında
            talep ettiğiniz bilgileri sunmak amacıyla kullanılır.
          </p>

          <h2>Bilgilerin kullanımı</h2>
          <p>
            İletişim kapsamında paylaşılan bilgiler, talebinizle ilgili
            iletişim süreçlerinin yürütülmesi dışında farklı bir amaçla
            kullanılmaz. Bilgilerinizin gereksiz şekilde paylaşılmaması
            ve yetkisiz erişime karşı korunması için makul teknik ve
            idari önlemler uygulanır.
          </p>

          <h2>Çerezler ve analiz araçları</h2>
          <p>
            Derkenar tanıtım sitesi şu anda üçüncü taraf reklam veya
            davranışsal takip amacı taşıyan analiz araçları kullanmaz.
            İleride bu tür teknolojilerin kullanılması halinde gerekli
            bilgilendirmeler bu sayfa üzerinden güncellenir.
          </p>

          <h2>Derkenar uygulamasındaki veriler</h2>
          <p>
            Bu gizlilik bilgilendirmesi Derkenar tanıtım sitesi ve demo
            talep iletişimi kapsamındadır. Derkenar uygulamasında hukuk
            büroları tarafından işlenen dava, müvekkil, belge ve diğer
            çalışma verileri ayrı bir kullanım ve veri işleme kapsamına
            tabidir.
          </p>

          <h2>İletişim</h2>
          <p>
            Gizlilikle ilgili soru ve talepleriniz için
            {' '}
            <a href="mailto:derkenariletisim@gmail.com">
              derkenariletisim@gmail.com
            </a>
            {' '}
            adresinden bizimle iletişime geçebilirsiniz.
          </p>

        </div>
      </section>
    </Layout>
  );
}