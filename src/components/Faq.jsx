import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const questions = [
  {
    question: 'Derkenar AI nedir?',
    answer:
      'Derkenar AI, yalnızca genel sorulara yanıt veren bir sohbet asistanı değildir. Dava kayıtları, belgeler, görevler, duruşmalar, toplantılar ve notlardan oluşan dosya bağlamıyla çalışan yapay zekâ destekli hukuk çalışma alanıdır. Dosyanın mevcut durumunu değerlendirir; riskleri, eksikleri, önemli tespitleri ve sonraki çalışma adımlarını görünür hale getirmeye yardımcı olur.'
  },

  {
    question: 'Derkenar AI bir dava dosyasını nasıl analiz eder?',
    answer:
      'Derkenar AI dava kaydını tek başına değerlendirmez; dosyaya bağlı belgeleri, görevleri, duruşmaları, toplantıları, notları ve diğer kayıtları birlikte ele alır. Dosyanın hazırlık seviyesini, mevcut risklerini, yaklaşan kritik işlemleri, eksik bilgileri ve tamamlanması gereken çalışma adımlarını bütüncül biçimde değerlendirmeye yardımcı olur.'
  },

  {
    question: 'Derkenar AI hukuki belgelerde neleri tespit edebilir?',
    answer:
      'Derkenar AI desteklenen hukuki belgeleri yalnızca özetlemekle kalmaz. Belge türünü, tarafları, önemli tarihleri, hukuki riskleri, çelişki ve tutarsızlıkları, eksik bilgileri, doğrulanması gereken noktaları ve ihtiyaç duyulabilecek delilleri tespit etmeye yardımcı olabilir. Tespit edilen hususlar için önerilen çalışma adımları da oluşturabilir.'
  },

  {
    question: 'Derkenar AI dosyadaki eksik bilgi ve delilleri ayırabilir mi?',
    answer:
      'Evet. Derkenar AI dosyada eksik olan bilgileri ve eksik veya doğrulanması gereken delilleri ayrı başlıklar altında değerlendirebilir. Örneğin taraf bilgileri, vekâletname, dava konusu, bilirkişi raporu, tebligat veya dosyanın niteliğine göre gerekli olabilecek diğer belge ve kayıtların eksikliğini görünür hale getirebilir.'
  },

  {
    question: 'Derkenar AI stratejik değerlendirme yapabilir mi?',
    answer:
      'Evet. Derkenar AI dosyanın mevcut kayıtlarını, belgelerini, risklerini, eksiklerini ve önemli tespitlerini birlikte değerlendirerek stratejik çalışma noktalarını ortaya çıkarmaya yardımcı olur. Hangi belgenin veya bilginin stratejiyi etkileyebileceğini, hangi hususların öncelikle doğrulanması gerektiğini ve dosyada hangi alanlara odaklanılabileceğini gösterebilir.'
  },

  {
    question: 'Dosyaya Sor özelliği nasıl çalışıyor?',
    answer:
      'Dosyaya Sor, genel bir chatbot mantığıyla değil dosyanın kendi hafızasıyla çalışır. Dava kaydı, görevler, duruşmalar, toplantılar, notlar ve analiz edilmiş belgeler üzerinden dosyaya ilişkin sorular sorabilirsiniz. Örneğin en kritik risk, yaklaşan işlem, eksik bilgi veya deliller gibi konularda dosya bağlamına dayalı yanıt alınabilir.'
  },

  {
    question: 'Derkenar AI duruşmaya nasıl hazırlar?',
    answer:
      'Duruşmaya Hazırla özelliği seçilen duruşmayı dosya kayıtları ve analiz edilmiş belgelerle birlikte değerlendirir. Duruşma özeti, dosyanın mevcut durumu, taraflar ve pozisyonlar, önemli deliller, kritik tarihler, eksik bilgi ve belgeler ile duruşmada dikkat edilmesi gereken hususlardan oluşan bir hazırlık brifi oluşturabilir.'
  },

  {
    question: 'Derkenar AI duruşma öncesi kontrol listesi oluşturabilir mi?',
    answer:
      'Evet. Derkenar AI duruşma öncesinde doğrulanması veya tamamlanması gereken işlemleri önceliklerine göre gösterebilir. Bilirkişi raporunun kontrolü, eksik belgelerin incelenmesi, karşı taraf ve vekil bilgilerinin doğrulanması, vekâletname kontrolü veya duruşma bilgilerinin teyidi gibi iş adımları hazırlık listesine dönüştürülebilir.'
  },

  {
    question: 'AI tarafından önerilen işlemler göreve dönüştürülebilir mi?',
    answer:
      'Evet. Derkenar AI tarafından önerilen sonraki işlemler yalnızca analiz ekranında kalmaz. Uygun öneriler görev modülüne aktarılabilir; görev başlığı, açıklaması, önceliği ve ilgili dava veya müvekkil bağlantısı çalışma akışına taşınabilir.'
  },

  {
    question: 'Derkenar AI müvekkille görüşülecek konuları belirleyebilir mi?',
    answer:
      'Evet. Dosyadaki eksik veya doğrulanması gereken bilgiler değerlendirilerek müvekkille görüşülmesi gereken konular ayrıca listelenebilir. Eksik iletişim bilgileri, belge talepleri, vekâletname, dava konusu veya ilgili kayıtların temini gibi başlıklar görüşme hazırlığına yardımcı olabilir.'
  },

  {
    question: 'Derkenar AI verdiği değerlendirmelerin kaynağını gösteriyor mu?',
    answer:
      'Uygun AI akışlarında değerlendirmelerin dayandığı dava kaydı, belge, duruşma veya toplantı gibi kaynaklara erişim sağlanabilir. Böylece kullanıcı yalnızca AI çıktısını görmekle kalmaz, değerlendirmenin dayandığı dosya kaydını da kontrol edebilir.'
  },

  {
    question: 'Derkenar AI avukatın yerine hukuki karar verir mi?',
    answer:
      'Hayır. Derkenar AI avukatın hukuki kararını ikame etmek için değil; araştırma, analiz, hazırlık ve dosya çalışma sürecini güçlendirmek için tasarlanmıştır. Riskleri, eksikleri, önemli noktaları ve olası çalışma seçeneklerini görünür hale getirir; nihai hukuki değerlendirme ve karar her zaman avukata aittir.'
  },

  {
    question: 'UYAP UDF dosyalarını Derkenar içinde görüntüleyebilir miyim?',
    answer:
      'Evet. Derkenar UYAP UDF dosyalarının sistem içerisinde görüntülenmesini ve içeriklerinin çalışma süreçlerinde kullanılmasını destekler. Orijinal UDF dosyası değiştirilmeden saklanabilir; belge dava, müvekkil, erişim seviyesi ve versiyon geçmişiyle birlikte yönetilebilir.'
  },

  {
    question: 'Derkenar hangi hukuk büroları için tasarlandı?',
    answer:
      'Derkenar; yapay zekâyı dosya çalışma sürecinin gerçek bir parçası haline getirmek isteyen dava ve danışmanlık ağırlıklı hukuk büroları için tasarlanmıştır. Yapay zekâ destekli analiz, duruşma hazırlığı ve dosya tamamlama araçları; dava, müvekkil, belge, görev, toplantı, takvim, finans ve ekip yönetimiyle aynı sistem içinde çalışır.'
  },

  {
    question: 'Derkenar’ı kaç kişi kullanabilir?',
    answer:
      'Derkenar 10’dan fazla kullanıcıyı destekleyebilir. Büro çalışanları için ayrı kullanıcı hesapları oluşturulabilir ve her kullanıcıya rol veya kişiye özel erişim yetkileri tanımlanabilir.'
  },

  {
    question: 'Kullanıcıların erişim yetkileri ayrı ayrı belirlenebilir mi?',
    answer:
      'Evet. Rol bazlı yetkilerin yanında kullanıcıya özel izinler de tanımlanabilir. Görüntüleme, düzenleme, silme, atama, indirme ve versiyon yönetimi gibi işlemler için ayrıntılı erişim kontrolleri uygulanabilir.'
  },

  {
    question: 'Derkenar lisanslı bir ürün mü?',
    answer:
      'Evet. Derkenar kullanım hakkı lisans kapsamında sunulur. Lisans ve kullanıcı kapsamı hukuk büronuzun ihtiyaçlarına göre belirlenir.'
  },

  {
    question: '7 günlük ücretsiz deneme nasıl çalışıyor?',
    answer:
      'Canlı demo sonrasında Derkenar’ı 7 gün boyunca ücretsiz kullanarak değerlendirebilirsiniz. Böylece sistemi ve Derkenar AI özelliklerini kendi hukuk büronuzun çalışma düzeni içinde deneyebilirsiniz.'
  },

  {
    question: 'Derkenar mobil cihazlardan kullanılabilir mi?',
    answer:
      'Evet. Derkenar web tabanlı ve mobil uyumlu bir arayüze sahiptir. Masaüstü bilgisayarların yanında tablet ve mobil cihazlardan da kullanılabilir.'
  },

  {
    question: 'Google Calendar ile çalışıyor mu?',
    answer:
      'Evet. Görev, toplantı ve duruşma kayıtları Google Calendar ile senkronize edilebilir. Böylece önemli tarih ve hatırlatmalarınızı bilgisayar, Android ve iOS cihazlar ile uyumlu giyilebilir cihazlardan takip edebilirsiniz.'
  },

  {
    question: 'Bilgisayara program kurulması gerekiyor mu?',
    answer:
      'Hayır. Derkenar web tabanlıdır ve desteklenen modern internet tarayıcıları üzerinden kullanılabilir.'
  },

  {
    question: 'Derkenar’ın fiyatı ne kadar?',
    answer:
      'Fiyatlandırma; kullanıcı sayısı, kullanım kapsamı ve hukuk büronuzun ihtiyaçlarına göre belirlenir. Canlı demo ve ihtiyaç değerlendirmesi sonrasında büronuza uygun teklif paylaşılır.'
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