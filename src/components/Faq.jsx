import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const questions = [
 {
  question: 'Derkenar’ı kaç kişi kullanabilir?',
  answer:
    'Derkenar 10’dan fazla kullanıcıyı destekleyebilir. Büro çalışanları için ayrı kullanıcı hesapları oluşturulabilir ve her kullanıcıya rol veya kişiye özel erişim yetkileri tanımlanabilir.'
},
  {
    question: 'Derkenar lisanslı bir ürün mü?',
    answer:
      'Evet. Derkenar kullanım hakkı lisans kapsamında sunulur. Lisans ve kullanıcı kapsamı hukuk büronuzun ihtiyaçlarına göre belirlenir.'
  },
  {
    question: '7 günlük ücretsiz deneme nasıl çalışıyor?',
    answer:
      'Canlı demo sonrasında Derkenar’ı 7 gün boyunca ücretsiz kullanarak değerlendirebilirsiniz. Deneme sürecinin amacı sistemi kendi çalışma düzeniniz içinde deneyebilmenizdir.'
  },
  {
  question: 'Derkenar hangi hukuk büroları için tasarlandı?',
  answer:
    'Derkenar; yapay zekâyı yalnızca metin üretmek için değil, doğrudan dosya üzerinde çalışmak için kullanmak isteyen hukuk büroları için geliştirilmiştir. Derkenar AI; dosyadaki belgeleri, dava kayıtlarını, duruşmaları, görevleri ve notları birlikte değerlendirerek dosyanın mevcut durumunu analiz eder; stratejik noktaları, çelişki ve tutarsızlıkları, önemli tespitleri, delilleri ve dikkat edilmesi gereken hususları ortaya çıkarmaya yardımcı olur. Duruşma öncesinde dosya bağlamına göre hazırlık yapılmasını, eksiklerin belirlenmesini, belgelerin analiz edilmesini ve gerekli iş adımlarının oluşturulmasını destekler. Tüm bunlar dava, müvekkil, belge, görev, duruşma, takvim, finans ve ekip yönetimiyle aynı sistem içinde çalışır.'
},
  {
    question: 'UYAP UDF dosyalarını Derkenar içinde görüntüleyebilir miyim?',
    answer:
      'Evet. Derkenar, UYAP UDF dosyalarının sistem içerisinde görüntülenmesini ve içeriklerinin çalışma süreçlerinde kullanılmasını destekler. Orijinal UDF dosyası korunarak saklanır.'
  },
  {
  question: 'Derkenar AI ne yapar?',
  answer:
    'Derkenar AI, yalnızca genel sorulara yanıt veren bir yapay zekâ değildir; dava kayıtları, görevler, duruşmalar, toplantılar, notlar ve analiz edilmiş belgelerden oluşan dosya bağlamıyla çalışır. Belgeleri ve dosya içeriğini birlikte değerlendirerek önemli tespitleri, çelişki ve tutarsızlıkları, delilleri, riskli noktaları ve dikkat edilmesi gereken hususları ortaya çıkarmaya yardımcı olur. Dosyaya Sor, Duruşmaya Hazırla, Dosyayı Tamamla, Belge Analizi ve otomatik görev oluşturma gibi araçlarla dosyanın mevcut durumuna göre hazırlık yapılmasını, eksiklerin belirlenmesini ve sonraki iş adımlarının planlanmasını destekler.'
},
  {
  question: 'Derkenar AI avukatın yerine hukuki karar verir mi?',
  answer:
    'Derkenar AI, avukatın hukuki kararını ikame etmek için değil; karar ve hazırlık sürecini güçlendirmek için tasarlanmıştır. Dosya kapsamındaki kayıt ve belgeleri tarar, benzer uyuşmazlık ve geçmiş dava örüntülerini araştırma sürecinde değerlendirmeye yardımcı olur, çelişki ve eksikleri ortaya çıkarır, delil ve önemli tespitleri belirginleştirir, olası strateji ve yaklaşım seçenekleri üretir. Duruşma öncesi hazırlık, dosya tamamlama, belge analizi ve sonraki iş adımlarının oluşturulmasında dosya bağlamına göre destek sağlar. Nihai hukuki değerlendirme ve karar ise her zaman avukata aittir.'
},
  {
    question: 'Kullanıcıların erişim yetkileri belirlenebilir mi?',
    answer:
      'Evet. Rol bazlı yetkilerin yanında kullanıcıya özel izinler de tanımlanabilir. Görüntüleme, düzenleme, silme, atama, indirme ve versiyon yönetimi gibi işlemler için ayrıntılı erişim kontrolü uygulanabilir.'
  },
  {
    question: 'Derkenar mobil cihazlardan kullanılabilir mi?',
    answer:
      'Evet. Derkenar web tabanlı ve mobil uyumlu bir arayüze sahiptir. Masaüstü bilgisayarların yanında tablet ve mobil cihazlardan da kullanılabilir.'
  },
  {
  question: 'Google Calendar ile çalışıyor mu?',
  answer:
    'Evet. Derkenar’daki görev, toplantı ve duruşma kayıtları Google Calendar ile senkronize edilebilir. Böylece Google Calendar destekleyen Android ve iOS cihazlarda, ayrıca uyumlu akıllı saat ve giyilebilir cihazlarda takvim bildirimlerini takip edebilirsiniz.'
},
  {
    question: 'Bilgisayara program kurulması gerekiyor mu?',
    answer:
      'Hayır. Derkenar web tabanlıdır ve desteklenen modern internet tarayıcıları üzerinden kullanılabilir.'
  },
  {
    question: 'Derkenar’ın fiyatı ne kadar?',
    answer:
      'Fiyatlandırma; kullanıcı sayısı, kullanım kapsamı ve hukuk büronuzun ihtiyaçlarına göre belirlenir. Canlı demo sonrasında büronuza uygun teklif paylaşılır.'
  }
];

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="section section-soft faq-section">
      <div className="container">
        <div className="faq-heading">
          <span className="faq-eyebrow">
            SIK SORULAN SORULAR
          </span>

          <h2>
            Derkenar hakkında merak edilenler.
          </h2>

          <p>
            Kullanım, lisans, yapay zekâ, UYAP UDF ve
            ücretsiz deneme süreciyle ilgili temel soruların
            yanıtlarını inceleyin.
          </p>
        </div>

        <div className="faq-list">
          {questions.map((item, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                className={`faq-item ${
                  isOpen ? 'faq-item-open' : ''
                }`}
                key={item.question}
              >
                <button
                  type="button"
                  className="faq-question"
                  onClick={() => toggleQuestion(index)}
                  aria-expanded={isOpen}
                >
                  <span>{item.question}</span>

                  <ChevronDown
                    size={21}
                    className="faq-chevron"
                  />
                </button>

                <div
                  className={`faq-answer ${
                    isOpen ? 'faq-answer-open' : ''
                  }`}
                >
                  <div>
                    <p>{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="faq-contact">
          <span>
            Aradığınız yanıtı bulamadınız mı?
          </span>

          <a href="/iletisim/">
            Bize ulaşın
          </a>
        </div>
      </div>
    </section>
  );
}