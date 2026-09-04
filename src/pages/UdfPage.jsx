import React from 'react';
import Layout from '../components/Layout.jsx';
import SectionTitle from '../components/SectionTitle.jsx';
import DeviceShot from '../components/DeviceShot.jsx';
import Cta from '../components/Cta.jsx';
import { CheckCircle2, FileArchive, History, Link2, LockKeyhole, Tags } from 'lucide-react';

export default function UdfPage(){
  return <Layout>
    <section className="page-hero"><div className="container split-showcase"><div><span className="hero-kicker dark"><span/>UYAP UDF & BELGE YÖNETİMİ</span><h1>Hukuk bürosuna özel belge çalışma deneyimi.</h1><p>UYAP UDF dosyalarını sistem içinde görüntüleyin, orijinal dosyayı koruyun ve belgenin dava, müvekkil, vekâletname, erişim ve versiyon ilişkilerini aynı yerde yönetin.</p></div><DeviceShot src="/screenshots/udf-belge.jpg" alt="UYAP UDF belgesi Derkenar ekranı"/></div></section>
    <section className="section section-white"><div className="container"><SectionTitle eyebrow="BELGE YAŞAM DÖNGÜSÜ" title="Dosyayı yüklemek başlangıçtır." text="Derkenar belgeyi bağlamıyla yönetir; kimle ve hangi dosyayla ilişkili olduğu, erişim seviyesi ve sürüm geçmişi görünür kalır." align="center"/><div className="feature-grid three"><article className="detail-feature"><span><FileArchive/></span><h2>UYAP UDF dahili görüntüleyici</h2><p>UDF dosyalarını sistem içinde görüntüleyin ve içeriklerini işleyin. Resmî UYAP Editör’ün tüm imza doğrulama veya düzenleme yeteneklerini taklit ettiği iddia edilmez.</p></article><article className="detail-feature"><span><History/></span><h2>Versiyon geçmişi</h2><p>Belgenin kayıtlı sürümlerini, güncel versiyonu ve indirme/açma seçeneklerini yönetin.</p></article><article className="detail-feature"><span><Link2/></span><h2>İlişkili kayıtlar</h2><p>Belgeyi dava, müvekkil ve vekâletname kayıtlarıyla ilişkilendirerek bağlam içinde saklayın.</p></article><article className="detail-feature"><span><LockKeyhole/></span><h2>Erişim seviyesi</h2><p>Kısıtlı belge mantığı ve kullanıcı yetkileriyle hassas içeriğin erişimini kontrol edin.</p></article><article className="detail-feature"><span><Tags/></span><h2>Etiketleme</h2><p>Belgeleri etiketlerle sınıflandırın ve düzenli bir ofis arşivi oluşturun.</p></article><article className="detail-feature"><span><CheckCircle2/></span><h2>Orijinal dosya korunur</h2><p>UDF dosyasının orijinal sürümünü değiştirmeden saklama yaklaşımıyla çalışın.</p></article></div></div></section>
    <Cta/>
  </Layout>
}
