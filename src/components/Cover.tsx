import type { AuditDataParticular } from '../types';
import { useIsMobile } from '../hooks/useIsMobile';

export default function Cover({ data }: { data: AuditDataParticular }) {
  const isMobile = useIsMobile();
  return (
    <section style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', minHeight: isMobile ? 'auto' : '100vh' }}>
      {/* LEFT */}
      <div style={{ background: '#0a0a0a', padding: isMobile ? '24px' : '64px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div>
          <div style={{ marginBottom: '80px' }}>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '26px', fontWeight: 300, letterSpacing: '0.38em', color: '#f5f1ea' }}>LARUM</div>
            <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: '8px', letterSpacing: '0.55em', color: 'rgba(245,241,234,0.9)', textTransform: 'uppercase', marginTop: '4px' }}>STUDIO</div>
          </div>

          <div style={{ marginBottom: '40px' }}>
            <div style={{ display: 'inline-block', border: '1px solid rgba(201,169,110,0.3)', padding: '8px 16px', marginBottom: '28px' }}>
              <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: '9px', letterSpacing: '0.4em', color: 'rgba(201,169,110,0.7)', textTransform: 'uppercase' }}>
                {data.meta.tipo}
              </span>
            </div>
            <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: isMobile ? '36px' : '60px', fontWeight: 300, color: '#f5f1ea', lineHeight: 1.0, margin: '0 0 20px 0' }}>
              Tu propiedad<br />lleva{' '}
              <span style={{ color: '#f5f1ea' }}>{data.situacion.diasMercado} días</span><br />
              esperando<br />al comprador.
            </h1>
            <div style={{ width: '48px', height: '1px', background: '#c9a96e', opacity: 0.5, margin: '28px 0' }} />
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '14px', fontWeight: 300, color: '#f5f1ea', lineHeight: 1.85, maxWidth: '320px' }}>
              El problema no es el precio. No es la ubicación. No es el inmueble. Es lo que ve el comprador antes de decidir si te llama.
            </p>
          </div>
        </div>

        <div>
          <div style={{ width: '100%', height: '1px', background: 'rgba(245,241,234,0.07)', marginBottom: '28px' }} />
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
            <div>
              <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: '10px', letterSpacing: '0.2em', color: 'rgba(245,241,234,0.6)', textTransform: 'uppercase', marginBottom: '6px' }}>Preparado para</div>
              <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: '13px', fontWeight: 300, color: '#f5f1ea' }}>{data.propietario.nombre}</div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: '10px', letterSpacing: '0.2em', color: '#c9a96e', textTransform: 'uppercase', marginBottom: '6px' }}>{data.meta.fecha}</div>
              <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: '10px', letterSpacing: '0.2em', color: '#c9a96e', textTransform: 'uppercase' }}>{data.meta.numeroInforme}</div>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT — hero image con overlay */}
      <div style={{ position: 'relative', overflow: 'hidden', minHeight: isMobile ? '300px' : undefined }}>
        <img src={data.imagenes.hero} alt="Residencia" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(10,10,10,0.2) 0%, rgba(10,10,10,0.8) 100%)' }} />

        <div style={{ position: 'absolute', bottom: '64px', left: '40px', right: '40px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {/* Stat principal */}
          <div style={{ background: 'rgba(201,169,110,0.1)', border: '1px solid rgba(201,169,110,0.3)', padding: '20px 24px', backdropFilter: 'blur(8px)' }}>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: isMobile ? '26px' : '42px', fontWeight: 300, color: '#c9a96e', lineHeight: 1, marginBottom: '6px' }}>
              {data.caso.precioFormato}
            </div>
            <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: '9px', letterSpacing: '0.25em', color: 'rgba(201,169,110,0.6)', textTransform: 'uppercase' }}>
              {data.caso.titulo}
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '12px' }}>
            <div style={{ background: 'rgba(10,10,10,0.85)', border: '1px solid rgba(245,241,234,0.1)', padding: '16px 20px', backdropFilter: 'blur(8px)' }}>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '30px', fontWeight: 300, color: 'rgba(245,241,234,0.82)', lineHeight: 1, marginBottom: '6px' }}>
                {data.situacion.diasMercado} días
              </div>
              <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: '9px', letterSpacing: '0.25em', color: 'rgba(245,241,234,0.6)', textTransform: 'uppercase' }}>En mercado</div>
            </div>
            <div style={{ background: 'rgba(10,10,10,0.85)', border: '1px solid rgba(245,241,234,0.1)', padding: '16px 20px', backdropFilter: 'blur(8px)' }}>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '30px', fontWeight: 300, color: 'rgba(220,60,60,0.85)', lineHeight: 1, marginBottom: '6px' }}>
                −USD {data.situacion.bajadaPrecio.toLocaleString()}
              </div>
              <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: '9px', letterSpacing: '0.25em', color: 'rgba(220,60,60,0.7)', textTransform: 'uppercase' }}>Ya bajado de precio</div>
            </div>
          </div>
        </div>

        <div style={{ position: 'absolute', top: '28px', right: '28px', fontFamily: "'Outfit', sans-serif", fontSize: '8px', letterSpacing: '0.4em', color: 'rgba(201,169,110,0.75)', textTransform: 'uppercase' }}>
          LARUMSTUDIO.COM
        </div>
      </div>
    </section>
  );
}
