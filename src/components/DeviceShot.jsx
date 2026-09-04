import React, { useState } from 'react';
import { Image as ImageIcon } from 'lucide-react';

export default function DeviceShot({ src, alt, phone = true, className = '' }) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return <div className={`shot-placeholder ${phone ? 'phone' : 'desktop'} ${className}`}><ImageIcon/><strong>Ekran görüntüsü</strong><span>{src}</span></div>;
  }
  return (
    <figure className={`${phone ? 'phone-shot' : 'desktop-shot'} ${className}`}>
      <img src={src} alt={alt} loading="lazy" onError={() => setFailed(true)} />
    </figure>
  );
}
