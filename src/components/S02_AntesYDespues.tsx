import type { AuditDataParticular } from '../types';
import { useIsMobile } from '../hooks/useIsMobile';

export default function S02AntesYDespues({ data }: { data: AuditDataParticular }) {
  const isMobile = useIsMobile();
  return (
    <section style={{ borderTop: '1px solid rgba(245,241,234,0.06)', background: '#0a0a0a' }}>
      {/* Header */}
      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', borderBottom: '1px solid rgba(245,241,234,0.06)' }}>
        <div style={{ padding: isMobile ? '20px' : '32px 48px' }}>
          <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: '10px', letterSpacing: '0.4em', color: 'rgba(201,169,110,0.6)', textTransform: 'uppercase', marginBottom: '10px' }}>02</div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: isMobile ? '32px' : '52px', fontWeight: 300, color: '#f5f1ea', lineHeight: 1.05, margin: 0 }}>
            Lo que ve<br />el comprador.
          </h2>
        </div>
        <div style={{ padding: isMobile ? '20px' : '32px 48px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', gap: '16px' }}>
          <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '14px', fontWeight: 300, color: '#f5f1ea', lineHeight: 1.85, maxWidth: '360px', margin: 0 }}>
            El comprador de una propiedad de este nivel decide desde la pantalla, desde otro país, en segundos. La portada, el orden de las imágenes y la narrativa determinan si llama — o sigue buscando.
          </p>
          <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '13px', fontWeight: 300, color: 'rgba(245,241,234,0.9)', lineHeight: 1.7, maxWidth: '360px', margin: 0 }}>
            La primera imagen no es decoración. Es el filtro. Si no detiene el scroll, el resto del anuncio no existe.
          </p>
        </div>
      </div>

      {/* Grid fotos */}
      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr' }}>
        {/* ANTES */}
        <div style={{ borderRight: '1px solid rgba(245,241,234,0.06)' }}>
          <div style={{ padding: '24px 32px 16px', borderBottom: '1px solid rgba(245,241,234,0.06)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'rgba(245,241,234,0.32)' }} />
              <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: '9px', letterSpacing: '0.4em', color: 'rgba(201,169,110,0.75)', textTransform: 'uppercase' }}>
                Presentación actual · {data.situacion.diasMercado} días sin comprador
              </span>
            </div>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '12px', fontWeight: 300, color: 'rgba(245,241,234,0.9)', lineHeight: 1.6, margin: 0, maxWidth: '320px' }}>
              Imágenes planas sin composición editorial. Sin control de luz. Sin secuencia narrativa. El comprador internacional ve una propiedad — no una oportunidad.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '2px', padding: '2px' }}>
            {data.imagenes.antes.map((src, i) => (
              <div key={i} style={{ aspectRatio: '4/3', overflow: 'hidden', position: 'relative' }}>
                <img src={src} alt="Antes" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(40%) brightness(0.75)' }} />
                {i === 0 && (
                  <div style={{ position: 'absolute', bottom: '10px', left: '12px', fontFamily: "'Outfit', sans-serif", fontSize: '8px', letterSpacing: '0.2em', color: '#f5f1ea', textTransform: 'uppercase' }}>
                    Portada actual
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* DESPUÉS */}
        <div>
          <div style={{ padding: '24px 32px 16px', borderBottom: '1px solid rgba(245,241,234,0.06)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#c9a96e' }} />
              <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: '9px', letterSpacing: '0.4em', color: 'rgba(201,169,110,0.6)', textTransform: 'uppercase' }}>
                Estándar Larum · Estimado {data.conLarum.diasEstimados} días
              </span>
            </div>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '12px', fontWeight: 300, color: 'rgba(245,241,234,0.82)', lineHeight: 1.6, margin: 0, maxWidth: '320px' }}>
              Fotografía editorial con luz controlada. Secuencia diseñada para construir deseo. La portada detiene el scroll. El orden de imágenes lleva al comprador de la emoción a la decisión.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '2px', padding: '2px' }}>
            {data.imagenes.despues.map((src, i) => (
              <div key={i} style={{ aspectRatio: '4/3', overflow: 'hidden', position: 'relative' }}>
                <img src={src} alt="Después" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                {i === 0 && (
                  <div style={{ position: 'absolute', bottom: '10px', left: '12px', fontFamily: "'Outfit', sans-serif", fontSize: '8px', letterSpacing: '0.2em', color: 'rgba(201,169,110,0.8)', textTransform: 'uppercase' }}>
                    Portada editorial
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', borderTop: '1px solid rgba(245,241,234,0.06)' }}>
        <div style={{ padding: '24px 48px', borderRight: '1px solid rgba(245,241,234,0.06)' }}>
          <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: isMobile ? '28px' : '48px', fontWeight: 300, color: 'rgba(245,241,234,0.9)', lineHeight: 1 }}>{data.situacion.diasMercado} días</div>
          <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: '10px', letterSpacing: '0.25em', color: 'rgba(245,241,234,0.80)', textTransform: 'uppercase', marginTop: '8px' }}>Sin el comprador correcto</div>
        </div>
        <div style={{ padding: '24px 48px' }}>
          <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: isMobile ? '28px' : '48px', fontWeight: 300, color: '#c9a96e', lineHeight: 1 }}>{data.conLarum.diasEstimados} días</div>
          <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: '10px', letterSpacing: '0.25em', color: 'rgba(201,169,110,0.8)', textTransform: 'uppercase', marginTop: '8px' }}>Estimado con ecosistema Larum completo</div>
        </div>
      </div>
    </section>
  );
}
