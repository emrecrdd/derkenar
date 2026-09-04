import React from 'react';
import HomePage from './pages/HomePage.jsx';
import FeaturesPage from './pages/FeaturesPage.jsx';
import AiPage from './pages/AiPage.jsx';
import UdfPage from './pages/UdfPage.jsx';
import SecurityPage from './pages/SecurityPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import PrivacyPage from './pages/PrivacyPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';

export default function App() {
  const path = window.location.pathname.replace(/\/+$/, '') || '/';
  const pages = {
    '/': <HomePage />,
    '/ozellikler': <FeaturesPage />,
    '/yapay-zeka': <AiPage />,
    '/uyap-udf': <UdfPage />,
    '/guvenlik': <SecurityPage />,
    '/iletisim': <ContactPage />,
    '/gizlilik': <PrivacyPage />
  };

  return pages[path] || <NotFoundPage />;
}
