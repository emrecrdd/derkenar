import React from 'react';

export default function SectionTitle({ eyebrow, title, text, align = 'left', light = false }) {
  return (
    <div className={`section-title ${align === 'center' ? 'center' : ''} ${light ? 'light' : ''}`}>
      {eyebrow && <span className="eyebrow-text">{eyebrow}</span>}
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}
