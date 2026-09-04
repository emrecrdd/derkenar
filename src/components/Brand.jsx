import React from 'react';

export default function Brand({ compact = false }) {
  return (
    <a
      className={`brand ${compact ? 'brand-compact' : ''}`}
      href="/"
      aria-label="Derkenar ana sayfa"
    >
      <img
        src="/favicon.svg"
        alt=""
        className="brand-logo"
        aria-hidden="true"
      />

      <span className="brand-copy">
        <strong>DERKENAR</strong>
        {!compact && <small>HUKUK BÜRO YÖNETİMİ</small>}
      </span>
    </a>
  );
}