# Derkenar Satış Sitesi

React + Vite ile hazırlanmış, Netlify'a doğrudan deploy edilebilen çok sayfalı kurumsal pazarlama sitesi.

## Çalıştırma

```bash
npm install
npm run dev
```

Production kontrolü:

```bash
npm run build
npm run preview
```

Netlify ayarları:
- Build command: `npm run build`
- Publish directory: `dist`

## Ekran görüntülerini değiştirme

`public/screenshots/` içindeki dosyaları aynı dosya adlarını koruyarak temiz demo ekranlarıyla değiştirmeniz yeterli. Kod değiştirmeniz gerekmez.

Önerilen temiz ekranlar:
- `dashboard.png` → masaüstü Genel Bakış / ana kontrol paneli
- `dosyaya-sor.jpg` → Derkenar AI / Dosyaya Sor
- `ai-calisma-alani.jpg` → AI Belge Analizi / Hukuki Ön Değerlendirme
- `udf-belge.jpg` → UYAP UDF belge ekranı
- `gorev-detay.jpg` → görev detay / ilerleme
- `performans.jpg` → ekip veya kişisel performans
- `takvim.jpg` → ortak takvim
- `finans.jpg` → finans yönetimi
- `ekran-kilidi.jpg` → PIN ekran kilidi
- `google-calendar.jpg` → Google Calendar senkronizasyonu
- `bildirimler.jpg` → bildirim merkezi
- `sohbet.jpg` → Ofis Genel veya birebir sohbet

**Yayına almadan önce:** Test isimlerini, e-posta adreslerini, IP adreslerini, lisans kimliklerini ve anlamsız test verilerini temizleyin.

## Logo

Header şu an kodla oluşturulmuş kurumsal bir DERKENAR wordmark kullanıyor. Gerçek logoyu daha sonra `public/brand/` içine koyup Layout/Brand componentinde kullanabilirsiniz.

## Domain / SEO

HTML dosyalarında ve `public/sitemap.xml`, `public/robots.txt` içinde `https://derkenar.com` kullanıldı. Gerçek domain farklı olacaksa yayından önce toplu değiştirin.

## Metin yaklaşımı

- UDF özelliği: **UYAP UDF dahili görüntüleyici** şeklinde ifade edildi.
- Resmî UYAP Editör'ün tüm imza doğrulama/düzenleme yetenekleri taklit ediliyor iddiası yapılmadı.
- AI çıktıları hukukî işlemden önce avukat kontrolü gerektiren çalışma/ön değerlendirme aracı olarak konumlandırıldı.
- Güvenlik için “%100 güvenli” gibi mutlak iddialar kullanılmadı.
