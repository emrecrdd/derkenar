import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function FeatureCard({ icon: Icon, title, children, href }) {
  const body = <><span className="feature-icon"><Icon size={22}/></span><h3>{title}</h3><p>{children}</p>{href && <span className="feature-link">İncele <ArrowUpRight size={16}/></span>}</>;
  return href ? <a className="feature-card" href={href}>{body}</a> : <article className="feature-card">{body}</article>;
}
