import type { AuditDataParticular } from '../types';
import { useIsMobile } from '../hooks/useIsMobile';

export default function S01ElProblema({ data }: { data: AuditDataParticular }) {
  const isMobile = useIsMobile();
  return (
    <section style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', borderTop: '1px solid rgba(245,241,234,0.06)' }}>
      {/* LEFT */}
      <div style={{ background: '#0e0e0e', padding: isMobile ? '20px' : '40px 48px' }}>
        <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: '10px', letterSpacing: '0.4em', color: 'rgba(201,169,110,0.6)', textTransform: 'uppercase', marginBottom: '10px' }}>01</div>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: isMobile ? '32px' : '52px', fontWeight: 300, color: '#f5f1ea', lineHeight: 1.05, margin: '0 0 32px 0' }}>
          El diagnóstico<br />real.
        </h2>
        <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '14px', fontWeight: 300, color: 'rgba(245,241,234,0.9)', lineHeight: 1.85, maxWidth: '340px', margin: '0 0 16px 0' }}>
          Misma propiedad. Mismo precio. Dos formas de presentarla. La diferencia no está en el inmueble — está en lo que percibe el comprador antes de llamar.
        </p>
        <div style={{ width: '36px', height: '1px', background: '#c9a96e', opacity: 0.4, margin: '28px 0' }} />

        {/* Ficha */}
        <div style={{ border: '1px solid rgba(245,241,234,0.08)', padding: '28px' }}>
          <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: '9px', letterSpacing: '0.4em', color: 'rgba(201,169,110,0.75)', textTransform: 'uppercase', marginBottom: '16px' }}>La propiedad</div>
          <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '24px', fontWeight: 300, color: '#f5f1ea', marginBottom: '6px' }}>{data.caso.titulo}</div>
          <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: '12px', fontWeight: 300, color: '#f5f1ea', marginBottom: '20px' }}>
            {data.caso.ubicacion} · {data.caso.superficie} construidos · {data.caso.terreno} terreno
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '16px' }}>
            {[
              { v: data.caso.dormitorios, l: 'Dormitorios' },
              { v: data.caso.banos, l: 'Baños' },
              { v: data.caso.cocheras, l: 'Garajes' },
              { v: data.caso.precioFormato, l: 'Precio publicado' },
            ].map((s, i) => (
              <div key={i}>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '22px', fontWeight: 300, color: '#c9a96e', lineHeight: 1 }}>{s.v}</div>
                <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: '9px', letterSpacing: '0.2em', color: 'rgba(245,241,234,0.9)', textTransform: 'uppercase', marginTop: '4px' }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* RIGHT — lo que está pasando vs lo que podría pasar */}
      <div style={{ background: '#111111', padding: isMobile ? '20px' : '40px 48px' }}>
        <div style={{ height: '72px' }} />
        <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: '9px', letterSpacing: '0.4em', color: 'rgba(201,169,110,0.75)', textTransform: 'uppercase', marginBottom: '28px' }}>
          La misma propiedad · Dos realidades
        </div>

        {/* Comparativa */}
        {[
          { metrica: 'Días en mercado', sin: `${data.situacion.diasMercado} días`, con: `${data.conLarum.diasEstimados} días`, sinLabel: 'Hoy', conLabel: 'Con Larum' },
          { metrica: 'Precio', sin: `−USD ${data.situacion.bajadaPrecio.toLocaleString()}`, con: 'Sin ceder más', sinLabel: 'Ya bajado', conLabel: 'Precio protegido' },
          { metrica: 'Comprador objetivo', sin: 'Sin alcance internacional', con: 'Brasil · Argentina · Diáspora', sinLabel: 'Mercado local únicamente', conLabel: 'Ecosistema en 3 idiomas' },
          { metrica: 'Estado', sin: 'Sin oferta en firme', con: data.conLarum.estado, sinLabel: 'Situación actual', conLabel: 'Con ecosistema Larum' },
        ].map((row, i) => (
          <div key={i} style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr 1fr', borderBottom: '1px solid rgba(245,241,234,0.05)', paddingBottom: '4px' }}>
            <div style={{ padding: '16px 0', fontFamily: "'Outfit', sans-serif", fontSize: '10px', letterSpacing: '0.1em', color: 'rgba(245,241,234,0.9)', textTransform: 'uppercase' }}>
              {row.metrica}
            </div>
            <div style={{ padding: '16px', background: 'rgba(245,241,234,0.02)' }}>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '16px', fontWeight: 300, color: 'rgba(245,241,234,0.82)', marginBottom: '3px' }}>{row.sin}</div>
              <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: '8px', letterSpacing: '0.1em', color: 'rgba(245,241,234,0.65)', textTransform: 'uppercase' }}>{row.sinLabel}</div>
            </div>
            <div style={{ padding: '16px', background: 'rgba(201,169,110,0.04)' }}>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '16px', fontWeight: 300, color: '#c9a96e', marginBottom: '3px' }}>{row.con}</div>
              <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: '8px', letterSpacing: '0.1em', color: 'rgba(201,169,110,0.4)', textTransform: 'uppercase' }}>{row.conLabel}</div>
            </div>
          </div>
        ))}

        {/* Días ahorrados */}
        <div style={{ marginTop: '28px', padding: '24px', background: 'rgba(201,169,110,0.06)', border: '1px solid rgba(201,169,110,0.2)' }}>
          <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: '9px', letterSpacing: '0.35em', color: 'rgba(201,169,110,0.5)', textTransform: 'uppercase', marginBottom: '8px' }}>
            Tiempo que se puede recuperar
          </div>
          <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: isMobile ? '26px' : '42px', fontWeight: 300, color: '#c9a96e' }}>
            {data.conLarum.diasAhorrados} días menos
          </div>
          <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: '11px', fontWeight: 300, color: 'rgba(245,241,234,0.82)', marginTop: '8px' }}>
            entre la situación actual y el resultado con intervención estratégica
          </div>
        </div>
      </div>
    </section>
  );
}
