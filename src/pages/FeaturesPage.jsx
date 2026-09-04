import React from 'react';
import Layout from '../components/Layout.jsx';
import SectionTitle from '../components/SectionTitle.jsx';
import DeviceShot from '../components/DeviceShot.jsx';
import Cta from '../components/Cta.jsx';
import { BrainCircuit, BriefcaseBusiness, CalendarDays, FileArchive, Gauge, MessageCircle, Search, ShieldCheck, Users, WalletCards, Workflow, BellRing, Landmark, FileText, CheckCircle2 } from 'lucide-react';

const modules = [
  [BriefcaseBusiness,'Dava ve dosya yönetimi','Dava bilgileri, yargı türü/birimi, mahkeme, dosya no, sorumlu avukat ve dosyayla ilişkili kayıtlar.'],
  [Users,'Müvekkil ve taraf yönetimi','Bireysel/kurumsal müvekkiller, iletişim bilgileri, davaya bağlı taraflar ve ayrı taraf kayıtları.'],
  [FileArchive,'Belge yönetimi','Dava, müvekkil ve vekâletname ilişkileri; erişim seviyesi, etiket, sürüm ve indirme yönetimi.'],
  [Landmark,'UYAP UDF dahili görüntüleyici','UDF dosyalarını sistem içinde görüntüleme, içerik işleme ve orijinal dosyayı değiştirmeden saklama.'],
  [Workflow,'Görev ve iş akışı','Çoklu sorumlu, öncelik, son tarih, tahmini süre, ilerleme, notlar ve ilişkili kayıtlar.'],
  [Gauge,'Performans ve iş yükü','Kişisel/ekip performansı, gecikme, tamamlanma, zamanında teslim ve aktif iş yükü görünümü.'],
  [CalendarDays,'Takvim, duruşma ve toplantı','Duruşma, toplantı, görev ve son tarihlerin tek takvimde ay/hafta/gün görünümü.'],
  [WalletCards,'Finans yönetimi','Ücret anlaşmaları, ödeme planları, tahsilat, gider, iade/düzeltme ve bakiye takibi.'],
  [FileText,'Şablonlar','Dilekçe, ihtar ve sözleşme şablonlarını kategori ve hukuk alanına göre yönetme, önizleme, indirme ve versiyonlama.'],
  [BrainCircuit,'Derkenar AI','Dosyaya Sor, Duruşmaya Hazırla, Dosyayı Tamamla, otomatik görev oluşturma, belge analizi, ön değerlendirme ve şablon oluşturma.'],
  [MessageCircle,'Ofis içi iletişim','Ofis Genel ve birebir sohbetler, çevrimiçi durum, okundu bilgisi ve mesaj geçmişi.'],
  [BellRing,'Bildirim ve hatırlatma','Görev, dava, duruşma, toplantı ve sistem bildirimleri; e-posta hatırlatmaları.'],
  [Search,'Global Arama','Müvekkil, dava, belge, görev ve not kayıtlarına tek arama noktasından erişim.'],
  [ShieldCheck,'Kullanıcı, yetki ve denetim','Rol bazlı izinler, kullanıcıya özel yetkiler, denetim logları, ekran kilidi ve kurumsal lisans.']
];

export default function FeaturesPage(){
  return <Layout>
    <section className="page-hero"><div className="container"><span className="hero-kicker dark"><span/>DERKENAR ÖZELLİKLERİ</span><h1>Bir hukuk bürosunun günlük operasyonunu tek sistemde birleştirin.</h1><p>Dava takipten belge yönetimine, ekip iş akışından finans ve yapay zekâ destekli çalışma araçlarına kadar Derkenar’ın temel modüllerini keşfedin.</p></div></section>
    <section className="section section-white"><div className="container"><div className="all-features-grid">{modules.map(([Icon,t,d])=><article className="detail-feature" key={t}><span><Icon/></span><h2>{t}</h2><p>{d}</p></article>)}</div></div></section>
    <section className="section section-soft" id="finans"><div className="container split-showcase"><div><SectionTitle eyebrow="EKİP & FİNANS" title="Operasyonun yalnızca dosya tarafını değil, iş yükünü ve finansını da görün." text="Yönetici ve ekip üyeleri görev ilerlemesini, gecikmeleri, aktif iş yükünü ve finansal görünümü kendi yetkileri kapsamında takip eder."/><ul className="check-list-pro"><li><CheckCircle2/>Personel bazlı görev performansı</li><li><CheckCircle2/>Gecikme ve zamanında tamamlama oranları</li><li><CheckCircle2/>Ücret anlaşmaları ve ödeme planları</li><li><CheckCircle2/>Tahsilat, gider, iade ve kalan bakiye</li></ul></div><div className="phone-pair"><DeviceShot src="/screenshots/performans.jpg" alt="Performans görünümü"/><DeviceShot src="/screenshots/finans.jpg" alt="Finans yönetimi" className="phone-shift"/></div></div></section>
    <Cta/>
  </Layout>
}
