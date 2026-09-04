import React, { useEffect, useState } from 'react';
import {
  Menu,
  X,
  ArrowRight
} from 'lucide-react';

import Brand from './Brand.jsx';

const links = [
  ['/ozellikler/', 'Özellikler'],
  ['/yapay-zeka/', 'Derkenar AI'],
  ['/uyap-udf/', 'UYAP UDF'],
  ['/guvenlik/', 'Güvenlik']
];

const whatsappUrl =
  'https://wa.me/905537934281?text=Merhaba%2C%20Derkenar%20hakk%C4%B1nda%20bilgi%20almak%20ve%20demo%20talep%20etmek%20istiyorum.';

function WhatsAppIcon({ size = 24 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M16.04 3C9.39 3 4 8.24 4 14.7c0 2.28.68 4.5 1.96 6.4L4 27.09l6.2-1.93a12.3 12.3 0 0 0 5.83 1.46h.01c6.65 0 12.04-5.24 12.04-11.7C28.08 8.46 22.69 3 16.04 3Zm0 21.65h-.01a10.2 10.2 0 0 1-5.2-1.43l-.37-.22-3.68 1.15 1.2-3.47-.24-.36a9.55 9.55 0 0 1-1.6-5.3c0-5.35 4.44-9.7 9.9-9.7 5.46 0 9.9 4.35 9.9 9.7 0 5.34-4.44 9.63-9.9 9.63Zm5.43-7.22c-.3-.15-1.76-.85-2.03-.95-.27-.1-.47-.15-.67.15-.2.29-.77.95-.94 1.14-.17.2-.35.22-.65.08-.3-.15-1.25-.45-2.38-1.44a9.06 9.06 0 0 1-1.65-2c-.17-.29-.02-.45.13-.6.13-.13.3-.34.44-.51.15-.17.2-.29.3-.49.1-.19.05-.36-.02-.51-.08-.15-.67-1.57-.92-2.15-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.36-.27.29-1.04 1-1.04 2.44 0 1.43 1.07 2.82 1.22 3.01.15.2 2.1 3.13 5.1 4.39.71.3 1.27.48 1.7.61.72.22 1.37.19 1.88.12.58-.08 1.76-.7 2.01-1.38.25-.68.25-1.27.17-1.39-.07-.12-.27-.19-.57-.34Z" />
    </svg>
  );
}

export default function Layout({ children, darkHeader = false }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 920) {
        setOpen(false);
      }
    };

    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <div className="site-shell">
      <header
        className={`site-header ${
          darkHeader ? 'site-header-dark' : ''
        }`}
      >
        <div className="container nav-wrap">
          <Brand />

          <nav
            className="desktop-nav"
            aria-label="Ana menü"
          >
            {links.map(([href, label]) => (
              <a key={href} href={href}>
                {label}
              </a>
            ))}
          </nav>

          <a
            className="btn btn-gold btn-nav"
            href="/iletisim/"
          >
            Demo Talep Et
            <ArrowRight size={16} />
          </a>

          <button
            className="menu-button"
            aria-label="Menüyü aç"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="mobile-menu">
            <div className="container">
              {links.map(([href, label]) => (
                <a key={href} href={href}>
                  {label}
                </a>
              ))}

              <a
                className="btn btn-gold"
                href="/iletisim/"
              >
                Demo Talep Et
              </a>
            </div>
          </div>
        )}
      </header>

      <main>{children}</main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <Brand />
            <p>
              Hukuk bürolarının dava, belge, ekip, finans ve
              yapay zekâ destekli çalışma süreçlerini tek
              merkezde buluşturan yönetim sistemi.
            </p>
          </div>

          <div>
            <strong>Ürün</strong>
            <a href="/ozellikler/">Özellikler</a>
            <a href="/yapay-zeka/">Derkenar AI</a>
            <a href="/uyap-udf/">UYAP UDF</a>
          </div>

          <div>
            <strong>Kurumsal</strong>
            <a href="/guvenlik/">Güvenlik</a>
            <a href="/iletisim/">Demo Talep Et</a>
            <a href="/gizlilik/">Gizlilik</a>
          </div>
        </div>

        <div className="container footer-bottom">
          <span>© 2026 Derkenar. Tüm hakları saklıdır.</span>
          <span>Hukuk büroları için geliştirildi.</span>
        </div>
      </footer>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="Derkenar ile WhatsApp üzerinden iletişime geç"
        title="WhatsApp'tan ulaşın"
      >
        <WhatsAppIcon size={25} />
        <span>WhatsApp’tan Ulaşın</span>
      </a>
    </div>
  );
}