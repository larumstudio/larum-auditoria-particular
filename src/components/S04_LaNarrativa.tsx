import type { AuditDataParticular } from '../types';
import { useIsMobile } from '../hooks/useIsMobile';

export default function S04LaNarrativa({ data }: { data: AuditDataParticular }) {
  // Mostrar solo los primeros 400 caracteres de la descripción publicada
  const descripcionMala = `- Garage para 6 vehículos - Deposito/Bodega Planta Baja - Hall de Entrada - Escritorio - Baño social - Amplia Sala Principal con chimenea - Comedor - Estar Intimo Comedor - Altillo - 1 Habitación en Suite PB - Cocina Amoblada - Despensa - Área de Lavado - 2 Habitaciones de Servicio con Baño Completo - Comedor de Servicio - Amplio Jardín con piscina 40m2 - Amplio Quincho climatizado - Amoblado - Baño Social Completo - Depósito - Área de Masaje, GYM con Salida al Balcón - Baño completo con Jacuzzi - Sauna Húmedo - Ducha con Hidromasaje Planta Alta - 2 Habitaciones en suite las 2 con vestidores - Baño y Jacuzzi - Balcón en Ambas Habitaciones. Precio: USD ***`;

  const isMobile = useIsMobile();
  return (
    <section style={{ borderTop: '1px solid rgba(245,241,234,0.06)', background: '#0a0a0a' }}>
      {/* Header */}
      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', borderBottom: '1px solid rgba(245,241,234,0.06)' }}>
        <div style={{ padding: isMobile ? '20px' : '32px 48px' }}>
          <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: '10px', letterSpacing: '0.4em', color: 'rgba(201,169,110,0.6)', textTransform: 'uppercase', marginBottom: '10px' }}>04</div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: isMobile ? '32px' : '52px', fontWeight: 300, color: '#f5f1ea', lineHeight: 1.05, margin: 0 }}>
            Lo que lee<br />el comprador.
          </h2>
        </div>
        <div style={{ padding: isMobile ? '20px' : '32px 48px', display: 'flex', alignItems: 'flex-end' }}>
          <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '14px', fontWeight: 300, color: '#f5f1ea', lineHeight: 1.85, maxWidth: '360px', margin: 0 }}>
            La narrativa es la diferencia entre una propiedad que se describe y una propiedad que se desea. El comprador de alto patrimonio no necesita metros cuadrados — necesita imaginarse viviendo ahí.
          </p>
        </div>
      </div>

      {/* Comparativa narrativa */}
      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', borderBottom: '1px solid rgba(245,241,234,0.06)' }}>
        {/* Lo que hay ahora */}
        <div style={{ padding: isMobile ? '20px' : '32px 48px', borderRight: '1px solid rgba(245,241,234,0.06)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px' }}>
            <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: '11px', color: 'rgba(245,241,234,0.9)' }}>✗</span>
            <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: '9px', letterSpacing: '0.3em', color: 'rgba(201,169,110,0.75)', textTransform: 'uppercase' }}>
              Descripción publicada hoy
            </span>
          </div>
          <div style={{ border: '1px solid rgba(245,241,234,0.08)', padding: '28px', marginBottom: '28px' }}>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '15px', fontWeight: 300, color: 'rgba(245,241,234,0.82)', lineHeight: 1.8, margin: 0, fontStyle: 'italic' }}>
              "{descripcionMala}"
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {data.narrativaActual.problemas.map((p, i) => (
              <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <span style={{ color: 'rgba(245,100,100,0.5)', fontSize: '10px', marginTop: '2px', flexShrink: 0 }}>—</span>
                <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: '12px', fontWeight: 300, color: '#f5f1ea', lineHeight: 1.6 }}>{p}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Lo que Larum produce */}
        <div style={{ padding: isMobile ? '20px' : '32px 48px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px' }}>
            <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: '11px', color: '#c9a96e', opacity: 0.7 }}>✦</span>
            <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: '9px', letterSpacing: '0.3em', color: 'rgba(201,169,110,0.6)', textTransform: 'uppercase' }}>
              Narrativa Larum · en 3 idiomas
            </span>
          </div>
          <div style={{ border: '1px solid rgba(201,169,110,0.2)', padding: '28px', background: 'rgba(201,169,110,0.03)', marginBottom: '28px' }}>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '15px', fontWeight: 300, color: 'rgba(245,241,234,0.9)', lineHeight: 1.9, margin: '0 0 16px 0', fontStyle: 'italic' }}>
              "Hay propiedades que se compran por sus metros cuadrados. Y hay propiedades que se compran por lo que permiten ser. Esta residencia en Villa Morra pertenece a la segunda categoría."
            </p>
            <div style={{ width: '24px', height: '1px', background: '#c9a96e', opacity: 0.4, margin: '16px 0' }} />
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '12px', fontWeight: 300, color: 'rgba(245,241,234,0.9)', lineHeight: 1.6, margin: 0 }}>
              Redactada en español, inglés y portugués. Optimizada para el perfil de comprador que esta propiedad merece. Diseñada para circular entre perfiles de alto patrimonio.
            </p>
          </div>

          {/* Elementos de narrativa */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {[
              'Portada que detiene el scroll — elegida por impacto, no por orden de toma',
              'Secuencia de imágenes que construye deseo: exterior → vida → espacios íntimos',
              'Copy que activa la decisión emocional antes de la racional',
              'Distribución en 3 idiomas para mercados con capacidad de compra real',
              'Dossier de presentación para compartir con asesores y familia',
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <span style={{ color: '#c9a96e', opacity: 0.6, fontSize: '10px', marginTop: '3px', flexShrink: 0 }}>✦</span>
                <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: '12px', fontWeight: 300, color: 'rgba(245,241,234,0.88)', lineHeight: 1.6 }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
