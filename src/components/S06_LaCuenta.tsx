import type { AuditDataParticular } from '../types';
import { useIsMobile } from '../hooks/useIsMobile';

export default function S06LaCuenta({ data }: { data: AuditDataParticular }) {
  const isMobile = useIsMobile();
  return (
    <section style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', borderTop: '1px solid rgba(245,241,234,0.06)' }}>
      {/* LEFT */}
      <div style={{ background: '#0e0e0e', padding: isMobile ? '20px' : '40px 48px', borderRight: '1px solid rgba(245,241,234,0.06)' }}>
        <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: '10px', letterSpacing: '0.4em', color: 'rgba(201,169,110,0.6)', textTransform: 'uppercase', marginBottom: '10px' }}>06</div>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: isMobile ? '32px' : '52px', fontWeight: 300, color: '#f5f1ea', lineHeight: 1.05, margin: '0 0 32px 0' }}>
          La cuenta<br />final.
        </h2>
        <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '14px', fontWeight: 300, color: '#f5f1ea', lineHeight: 1.85, maxWidth: '340px', margin: '0 0 40px 0' }}>
          {data.caso.titulo} · {data.caso.precioFormato} · Villa Morra, Asunción
        </p>

        {/* Desglose */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {[
            {
              label: 'Comisión si vende con agencia (5%)',
              value: `USD ${data.financiero.comisionAgencia.toLocaleString()}`,
              sub: 'Sale íntegro de tu patrimonio. Sin garantía de presentación superior a la actual.',
              negative: true,
            },
            {
              label: 'Inversión con Larum — ecosistema completo',
              value: `USD ${data.financiero.inversionLarum.toLocaleString()}`,
              sub: 'Fotografía editorial · Video · 3 reels · Landing · Dossier · Narrativa en 3 idiomas.',
              negative: false,
              highlight: true,
            },
            {
              label: 'Diferencia que permanece en tu patrimonio',
              value: `USD ${data.financiero.ahorroNeto.toLocaleString()}`,
              sub: 'El coste de una intervención estratégica frente al coste de ceder la venta a terceros.',
              negative: false,
              gold: true,
            },
          ].map((row, i) => (
            <div key={i} style={{ padding: '24px 0', borderBottom: '1px solid rgba(245,241,234,0.06)' }}>
              <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: '11px', fontWeight: 300, color: '#f5f1ea', marginBottom: '8px' }}>{row.label}</div>
              <div style={{
                fontFamily: "'Cormorant Garamond', serif", fontSize: isMobile ? '24px' : '36px', fontWeight: 300, lineHeight: 1, marginBottom: '6px',
                color: row.gold ? '#c9a96e' : row.negative ? 'rgba(245,100,100,0.55)' : 'rgba(245,241,234,0.6)'
              }}>
                {row.value}
              </div>
              <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: '11px', fontWeight: 300, color: 'rgba(245,241,234,0.9)', lineHeight: 1.5 }}>{row.sub}</div>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT */}
      <div style={{ background: '#111111', padding: isMobile ? '20px' : '40px 48px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div>
          <div style={{ height: '72px' }} />

          {/* El número que importa */}
          <div style={{ padding: '40px', border: '1px solid rgba(201,169,110,0.25)', background: 'rgba(201,169,110,0.05)', marginBottom: '32px' }}>
            <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: '9px', letterSpacing: '0.4em', color: 'rgba(201,169,110,0.5)', textTransform: 'uppercase', marginBottom: '16px' }}>
              La decisión en un número
            </div>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '80px', fontWeight: 300, color: '#c9a96e', lineHeight: 1, marginBottom: '8px' }}>
              USD {data.financiero.inversionLarum.toLocaleString()}
            </div>
            <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: '13px', fontWeight: 300, color: '#f5f1ea', lineHeight: 1.7 }}>
              Por USD {data.financiero.inversionLarum.toLocaleString()} tienes el ecosistema visual completo que una agencia de primer nivel usaría para defender el precio de tu propiedad — y cobrar USD {data.financiero.comisionAgencia.toLocaleString()} por ello.
            </div>
          </div>

          {/* Comparativa visual — barras */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: '10px', color: '#f5f1ea', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Comisión de agencia</span>
                <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '16px', color: 'rgba(245,241,234,0.82)' }}>USD {data.financiero.comisionAgencia.toLocaleString()}</span>
              </div>
              <div style={{ height: '5px', background: 'rgba(245,241,234,0.06)', borderRadius: '2px' }}>
                <div style={{ height: '100%', width: '100%', background: 'rgba(245,100,100,0.3)', borderRadius: '2px' }} />
              </div>
            </div>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: '10px', color: 'rgba(201,169,110,0.6)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Inversión Larum</span>
                <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '16px', color: '#c9a96e' }}>USD {data.financiero.inversionLarum.toLocaleString()}</span>
              </div>
              <div style={{ height: '5px', background: 'rgba(245,241,234,0.06)', borderRadius: '2px' }}>
                <div style={{ height: '100%', width: `${(data.financiero.inversionLarum / data.financiero.comisionAgencia) * 100}%`, background: '#c9a96e', borderRadius: '2px', opacity: 0.7 }} />
              </div>
            </div>
          </div>
        </div>

        {/* Cita cierre */}
        <div style={{ borderLeft: '2px solid rgba(201,169,110,0.25)', paddingLeft: '24px', marginTop: '40px' }}>
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '20px', fontStyle: 'italic', fontWeight: 300, color: '#f5f1ea', lineHeight: 1.65, margin: 0 }}>
            "Bajaste USD {data.situacion.bajadaPrecio.toLocaleString()} del precio. Larum cuesta USD {data.financiero.inversionLarum.toLocaleString()}. La presentación correcta habría evitado la primera cifra."
          </p>
        </div>
      </div>
    </section>
  );
}
