import React, { useEffect, useState } from 'react';
import {
  Menu,
  X,
  ArrowRight,
  MessageCircle
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
        <MessageCircle size={22} />
        <span>WhatsApp</span>
      </a>
    </div>
  );
}