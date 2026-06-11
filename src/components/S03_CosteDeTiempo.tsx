import type { AuditDataParticular } from '../types';
import { useIsMobile } from '../hooks/useIsMobile';

export default function S03CosteDeTiempo({ data }: { data: AuditDataParticular }) {
  const mesesEnMercado = Math.round(data.situacion.diasMercado / 30);
  const costoTotalAcumulado = mesesEnMercado * data.situacion.costeMensualOportunidad;

  const isMobile = useIsMobile();
  return (
    <section style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', borderTop: '1px solid rgba(245,241,234,0.06)' }}>
      {/* LEFT */}
      <div style={{ background: '#0e0e0e', padding: isMobile ? '20px' : '40px 48px', borderRight: '1px solid rgba(245,241,234,0.06)' }}>
        <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: '10px', letterSpacing: '0.4em', color: 'rgba(201,169,110,0.6)', textTransform: 'uppercase', marginBottom: '10px' }}>03</div>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: isMobile ? '32px' : '52px', fontWeight: 300, color: '#f5f1ea', lineHeight: 1.05, margin: '0 0 32px 0' }}>
          Lo que cuesta<br />cada mes<br />de espera.
        </h2>
        <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '14px', fontWeight: 300, color: '#f5f1ea', lineHeight: 1.85, maxWidth: '340px', margin: '0 0 40px 0' }}>
          Una propiedad parada en mercado no es un activo en espera. Es capital inmovilizado que genera un coste de oportunidad real cada mes que no se convierte en venta.
        </p>

        {/* Métricas */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {[
            {
              label: 'Coste de oportunidad mensual',
              value: `USD ${data.situacion.costeMensualOportunidad.toLocaleString()}`,
              sub: 'Capital inmovilizado al 0,55% mensual sobre USD 1.150.000',
              highlight: false,
            },
            {
              label: `Acumulado en ${mesesEnMercado} meses en mercado`,
              value: `USD ${costoTotalAcumulado.toLocaleString()}`,
              sub: 'En rentabilidad no generada desde que está publicada',
              highlight: false,
            },
            {
              label: 'Ya cedido en precio de publicación',
              value: `−USD ${data.situacion.bajadaPrecio.toLocaleString()}`,
              sub: 'Sin haber cambiado nada en la presentación del inmueble',
              highlight: true,
              negative: true,
            },
          ].map((row, i) => (
            <div key={i} style={{ padding: '24px 0', borderBottom: '1px solid rgba(245,241,234,0.06)' }}>
              <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: '11px', fontWeight: 300, color: '#f5f1ea', marginBottom: '8px' }}>{row.label}</div>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: isMobile ? '24px' : '36px', fontWeight: 300, color: row.negative ? 'rgba(245,100,100,0.6)' : 'rgba(245,241,234,0.6)', lineHeight: 1, marginBottom: '6px' }}>
                {row.value}
              </div>
              <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: '11px', fontWeight: 300, color: 'rgba(245,241,234,0.9)', lineHeight: 1.5 }}>{row.sub}</div>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT */}
      <div style={{ background: '#111111', padding: isMobile ? '24px' : '64px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div>
          <div style={{ height: '72px' }} />
          <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: '9px', letterSpacing: '0.4em', color: 'rgba(201,169,110,0.75)', textTransform: 'uppercase', marginBottom: '32px' }}>
            La presión que no cede
          </div>

          <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '14px', fontWeight: 300, color: '#f5f1ea', lineHeight: 1.9, marginBottom: '32px' }}>
            Bajar el precio es la respuesta más fácil cuando una propiedad no se mueve. Y también la más cara. Los USD 100.000 ya cedidos no vinieron de un mercado que rechazó el inmueble — vinieron de una presentación que no lo defendió.
          </p>

          <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '14px', fontWeight: 300, color: '#f5f1ea', lineHeight: 1.9, marginBottom: '40px' }}>
            Sin intervención estratégica, la dinámica continúa: más tiempo en mercado, más presión para seguir bajando, más capital cedido en una negociación que nunca debería haber llegado a ese punto.
          </p>

          {/* Cita */}
          <div style={{ borderLeft: '2px solid rgba(201,169,110,0.25)', paddingLeft: '24px' }}>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '20px', fontStyle: 'italic', fontWeight: 300, color: '#f5f1ea', lineHeight: 1.6, margin: 0 }}>
              "El mercado no rechazó tu propiedad. Rechazó cómo se presentó."
            </p>
          </div>
        </div>

        {/* Toggle vendo solo / tengo agente */}
        <ToggleArgumento data={data} />
      </div>
    </section>
  );
}

function ToggleArgumento({ data }: { data: AuditDataParticular }) {
  return (
    <div style={{ marginTop: '48px' }}>
      <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: '9px', letterSpacing: '0.3em', color: 'rgba(201,169,110,0.75)', textTransform: 'uppercase', marginBottom: '16px' }}>
        Tu situación actual
      </div>
      <div id="toggle-wrapper">
        {/* Toggle buttons */}
        <div style={{ display: 'flex', gap: '0', marginBottom: '24px' }}>
          <button
            id="btn-solo"
            onClick={() => {
              document.getElementById('panel-solo')!.style.display = 'block';
              document.getElementById('panel-agente')!.style.display = 'none';
              (document.getElementById('btn-solo') as HTMLButtonElement).style.background = 'rgba(201,169,110,0.15)';
              (document.getElementById('btn-solo') as HTMLButtonElement).style.borderColor = 'rgba(201,169,110,0.4)';
              (document.getElementById('btn-solo') as HTMLButtonElement).style.color = '#c9a96e';
              (document.getElementById('btn-agente') as HTMLButtonElement).style.background = 'transparent';
              (document.getElementById('btn-agente') as HTMLButtonElement).style.borderColor = 'rgba(245,241,234,0.12)';
              (document.getElementById('btn-agente') as HTMLButtonElement).style.color = 'rgba(245,241,234,0.82)';
            }}
            style={{
              flex: 1, padding: '12px', border: '1px solid rgba(201,169,110,0.4)', background: 'rgba(201,169,110,0.15)',
              color: '#c9a96e', fontFamily: "'Outfit', sans-serif", fontSize: '11px', letterSpacing: '0.2em',
              textTransform: 'uppercase', cursor: 'pointer', transition: 'all 0.2s'
            }}
          >
            Vendo por mi cuenta
          </button>
          <button
            id="btn-agente"
            onClick={() => {
              document.getElementById('panel-solo')!.style.display = 'none';
              document.getElementById('panel-agente')!.style.display = 'block';
              (document.getElementById('btn-agente') as HTMLButtonElement).style.background = 'rgba(201,169,110,0.15)';
              (document.getElementById('btn-agente') as HTMLButtonElement).style.borderColor = 'rgba(201,169,110,0.4)';
              (document.getElementById('btn-agente') as HTMLButtonElement).style.color = '#c9a96e';
              (document.getElementById('btn-solo') as HTMLButtonElement).style.background = 'transparent';
              (document.getElementById('btn-solo') as HTMLButtonElement).style.borderColor = 'rgba(245,241,234,0.12)';
              (document.getElementById('btn-solo') as HTMLButtonElement).style.color = 'rgba(245,241,234,0.82)';
            }}
            style={{
              flex: 1, padding: '12px', border: '1px solid rgba(245,241,234,0.12)', background: 'transparent',
              color: 'rgba(245,241,234,0.82)', fontFamily: "'Outfit', sans-serif", fontSize: '11px', letterSpacing: '0.2em',
              textTransform: 'uppercase', cursor: 'pointer', transition: 'all 0.2s'
            }}
          >
            Tengo agente
          </button>
        </div>

        {/* Panel vendo solo */}
        <div id="panel-solo" style={{ display: 'block' }}>
          <div style={{ padding: '24px', border: '1px solid rgba(201,169,110,0.2)', background: 'rgba(201,169,110,0.04)' }}>
            <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: '9px', letterSpacing: '0.3em', color: 'rgba(201,169,110,0.5)', textTransform: 'uppercase', marginBottom: '12px' }}>
              Lo que te ahorras frente a una agencia
            </div>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '44px', fontWeight: 300, color: '#c9a96e', lineHeight: 1, marginBottom: '8px' }}>
              USD {data.financiero.ahorroNeto.toLocaleString()}
            </div>
            <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: '12px', fontWeight: 300, color: 'rgba(245,241,234,0.82)', lineHeight: 1.6 }}>
              Una agencia cobra USD {data.financiero.comisionAgencia.toLocaleString()} (5% de comisión).<br />
              Larum cuesta USD {data.financiero.inversionLarum.toLocaleString()}.<br />
              La diferencia se queda en tu patrimonio.
            </div>
          </div>
        </div>

        {/* Panel tengo agente */}
        <div id="panel-agente" style={{ display: 'none' }}>
          <div style={{ padding: '24px', border: '1px solid rgba(245,241,234,0.1)', background: 'rgba(245,241,234,0.02)' }}>
            <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: '9px', letterSpacing: '0.3em', color: 'rgba(201,169,110,0.75)', textTransform: 'uppercase', marginBottom: '12px' }}>
              Lo que una mejor presentación cambia
            </div>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '44px', fontWeight: 300, color: 'rgba(245,241,234,0.6)', lineHeight: 1, marginBottom: '8px' }}>
              {data.conLarum.diasAhorrados} días menos
            </div>
            <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: '12px', fontWeight: 300, color: 'rgba(245,241,234,0.82)', lineHeight: 1.6 }}>
              Tu agente trabaja mejor con materiales de primer nivel. La presentación Larum no reemplaza al agente — le da las herramientas para cerrar más rápido y sin ceder precio.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
