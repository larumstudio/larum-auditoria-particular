import type { AuditDataParticular } from '../types';
import { useIsMobile } from '../hooks/useIsMobile';

export default function S05ElEcosistema({ data }: { data: AuditDataParticular }) {
  const isMobile = useIsMobile();
  return (
    <section style={{ borderTop: '1px solid rgba(245,241,234,0.06)' }}>
      {/* Header */}
      <div style={{ background: '#0e0e0e', padding: '36px 48px', borderBottom: '1px solid rgba(245,241,234,0.06)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '64px', alignItems: 'end' }}>
          <div>
            <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: '10px', letterSpacing: '0.4em', color: 'rgba(201,169,110,0.6)', textTransform: 'uppercase', marginBottom: '10px' }}>05</div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: isMobile ? '32px' : '52px', fontWeight: 300, color: '#f5f1ea', lineHeight: 1.05, margin: 0 }}>
              El ecosistema<br />completo.
            </h2>
          </div>
          <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '14px', fontWeight: 300, color: '#f5f1ea', lineHeight: 1.85, maxWidth: '360px', margin: 0 }}>
            No es fotografía. Es la infraestructura visual completa que convierte una propiedad estancada en un activo con demanda internacional activa — sin agencia, sin comisión, sin ceder precio.
          </p>
        </div>
      </div>

      {/* Items del ecosistema — grid 2x3 */}
      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr 1fr', background: '#111111' }}>
        {data.ecosistema.map((item, i) => (
          <div key={i} style={{
            padding: '32px 28px',
            borderRight: i % 3 !== 2 ? '1px solid rgba(245,241,234,0.06)' : 'none',
            borderBottom: i < 3 ? '1px solid rgba(245,241,234,0.06)' : 'none',
          }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '20px' }}>
              <div style={{ width: '24px', height: '1px', background: '#c9a96e', opacity: 0.4, marginTop: '10px' }} />
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: isMobile ? '28px' : '48px', fontWeight: 300, color: 'rgba(201,169,110,0.55)', lineHeight: 1 }}>
                {item.numero}
              </div>
            </div>
            <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: '13px', fontWeight: 500, color: '#f5f1ea', marginBottom: '12px', lineHeight: 1.4, letterSpacing: '0.02em' }}>
              {item.titulo}
            </div>
            <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: '12px', fontWeight: 300, color: '#f5f1ea', lineHeight: 1.75 }}>
              {item.descripcion}
            </div>
          </div>
        ))}
      </div>

      {/* Footer — imagen + resultado esperado */}
      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', borderTop: '1px solid rgba(245,241,234,0.06)' }}>
        <div style={{ position: 'relative', overflow: 'hidden', minHeight: '320px' }}>
          <img src='https://larumstudio.com/wp-content/uploads/2026/06/wmremove-transformed-3.webp' alt="Resultado" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(10,10,10,0.7) 0%, transparent 60%)' }} />
          <div style={{ position: 'absolute', bottom: '40px', left: '48px' }}>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: isMobile ? '28px' : '48px', fontWeight: 300, color: '#c9a96e', lineHeight: 1 }}>
              {data.conLarum.diasEstimados} días
            </div>
            <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: '10px', letterSpacing: '0.25em', color: 'rgba(201,169,110,0.55)', textTransform: 'uppercase', marginTop: '8px' }}>
              Estimado con ecosistema completo
            </div>
          </div>
        </div>
        <div style={{ background: '#0e0e0e', padding: isMobile ? '24px' : '48px 64px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '24px' }}>
          <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: '9px', letterSpacing: '0.4em', color: 'rgba(201,169,110,0.75)', textTransform: 'uppercase' }}>
            El resultado esperado
          </div>
          {[
            { v: `${data.conLarum.diasEstimados} días`, l: 'Tiempo estimado en mercado' },
            { v: data.conLarum.estado, l: 'Estado objetivo' },
            { v: 'Brasil · Argentina · Europa', l: 'Mercados activos' },
            { v: '3 idiomas', l: 'Narrativa y materiales' },
          ].map((s, i) => (
            <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', borderBottom: '1px solid rgba(245,241,234,0.05)', paddingBottom: '12px' }}>
              <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: '11px', fontWeight: 300, color: '#f5f1ea' }}>{s.l}</span>
              <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '20px', fontWeight: 300, color: '#c9a96e' }}>{s.v}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
