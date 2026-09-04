import React from 'react';
import Layout from '../components/Layout.jsx';
import SectionTitle from '../components/SectionTitle.jsx';
import DeviceShot from '../components/DeviceShot.jsx';
import Cta from '../components/Cta.jsx';
import { ClipboardList, KeyRound, LockKeyhole, ShieldCheck, UserCog, CheckCircle2 } from 'lucide-react';

export default function SecurityPage(){
  return <Layout>
    <section className="page-hero page-hero-security"><div className="container split-showcase"><div><span className="hero-kicker dark"><span/>GÜVENLİK & YETKİ</span><h1>Kimin neye erişeceğini siz belirleyin.</h1><p>Derkenar’da kullanıcı, rol, özel yetki, ekran kilidi ve denetim kayıtları birlikte çalışarak kurumsal kontrol sağlar.</p></div><DeviceShot src="/screenshots/ekran-kilidi.jpg" alt="Derkenar ekran kilidi"/></div></section>
    <section className="section section-white"><div className="container"><SectionTitle eyebrow="KONTROLLÜ ERİŞİM" title="Yetki yalnızca rol adı değildir." text="Kullanıcıya özel izinlerle görüntüleme, düzenleme, silme, atama, belge indirme veya versiyon yönetimi gibi eylemler ayrı ayrı kontrol edilebilir." align="center"/><div className="feature-grid three"><article className="detail-feature"><span><UserCog/></span><h2>Kullanıcı & rol yönetimi</h2><p>Sistem kullanıcılarını, rollerini, hesap durumlarını ve erişim kapsamlarını yönetin.</p></article><article className="detail-feature"><span><KeyRound/></span><h2>Özel yetkiler</h2><p>Rol varsayılanlarının üzerine kullanıcı bazında izin verin veya engelleyin; gerektiğinde rol varsayılanlarına dönün.</p></article><article className="detail-feature"><span><LockKeyhole/></span><h2>Ekran kilidi</h2><p>Oturum açıkken çalışma alanını PIN ile koruyan ek güvenlik katmanı.</p></article><article className="detail-feature"><span><ClipboardList/></span><h2>Denetim logları</h2><p>Kritik sistem hareketlerini, zaman ve işlem bağlamıyla denetim kayıtlarında takip edin.</p></article><article className="detail-feature"><span><ShieldCheck/></span><h2>Belge erişim kontrolü</h2><p>Belge indirme, silme ve versiyon yönetimi gibi hassas işlemler yetkilendirilebilir.</p></article><article className="detail-feature"><span><CheckCircle2/></span><h2>Kurumsal lisans</h2><p>Lisans ve kullanım kapsamı sunucu tarafında doğrulanan kurumsal kullanım modeli.</p></article></div></div></section>
    <Cta/>
  </Layout>
}
