import React from 'react';

export default function Brand({ compact = false }) {
  return (
    <a className={`brand ${compact ? 'brand-compact' : ''}`} href="/" aria-label="Derkenar ana sayfa">
      <span className="brand-mark" aria-hidden="true"><span>D</span></span>
      <span className="brand-copy">
        <strong>DERKENAR</strong>
        {!compact && <small>HUKUK BÜRO YÖNETİMİ</small>}
      </span>
    </a>
  );
}
