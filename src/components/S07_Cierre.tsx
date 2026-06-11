import type { AuditDataParticular } from '../types';
import { useIsMobile } from '../hooks/useIsMobile';

export default function S07Cierre({ data }: { data: AuditDataParticular }) {
  const isMobile = useIsMobile();
  return (
    <section style={{ borderTop: '1px solid rgba(245,241,234,0.06)' }}>

      {/* SECCIÓN ASPIRACIONAL — el potencial real de la propiedad */}
      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', borderBottom: '1px solid rgba(245,241,234,0.06)' }}>
        <div style={{ background: '#0e0e0e', padding: '48px' }}>
          <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: '9px', letterSpacing: '0.4em', color: 'rgba(201,169,110,0.7)', textTransform: 'uppercase', marginBottom: '10px' }}>
            Lo que esta propiedad puede comunicar
          </div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: isMobile ? '26px' : '38px', fontWeight: 300, color: '#f5f1ea', lineHeight: 1.05, margin: '0 0 24px 0' }}>
            Esta propiedad<br />no se ha mostrado<br />en serio todavía.
          </h2>
          <div style={{ width: '36px', height: '1px', background: '#c9a96e', opacity: 0.5, marginBottom: '24px' }} />
          <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '13px', fontWeight: 300, color: '#f5f1ea', lineHeight: 1.85, maxWidth: '340px', marginBottom: '20px' }}>
            La piscina de 40 m², el sauna, el jacuzzi, el quincho climatizado, el gym con salida a balcón — ninguno de estos espacios aparece en el listing actual. Son exactamente los elementos que activan al comprador de alto patrimonio.
          </p>
          <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '13px', fontWeight: 300, color: 'rgba(245,241,234,0.82)', lineHeight: 1.85, maxWidth: '340px' }}>
            Con fotografías de cada zona, Larum construye una secuencia narrativa que lleva al comprador desde la primera imagen hasta la decisión de llamar — sin que tenga que imaginar nada.
          </p>
        </div>
        <div style={{ background: '#111', padding: '48px' }}>
          <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: '9px', letterSpacing: '0.4em', color: 'rgba(245,241,234,0.5)', textTransform: 'uppercase', marginBottom: '28px' }}>
            Espacios que se venden solos cuando se presentan bien
          </div>
          {[
            { titulo: 'Zona de bienestar', detalle: 'Piscina 40m², sauna, jacuzzi, hidromasaje — fotografiados como resort privado, no como extras.' },
            { titulo: 'Quincho climatizado', detalle: 'Un espacio de entretenimiento amoblado que comunica estilo de vida, no solo metros cubiertos.' },
            { titulo: 'Gym con acceso a balcón', detalle: 'La conexión interior-exterior es un activo premium — hay que mostrarlo, no mencionarlo.' },
            { titulo: 'Jardín y privacidad', detalle: '905 m² en Villa Morra es escasez real. La amplitud y el verde hay que convertirlos en protagonistas.' },
            { titulo: 'Orden narrativo de imágenes', detalle: 'La portada detiene el scroll. La secuencia construye deseo. El cierre activa la llamada. Cada imagen tiene un rol.' },
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: '16px', paddingBottom: '16px', marginBottom: '16px', borderBottom: i < 4 ? '1px solid rgba(245,241,234,0.06)' : 'none' }}>
              <span style={{ color: '#c9a96e', fontSize: '9px', marginTop: '3px', flexShrink: 0 }}>✦</span>
              <div>
                <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: '12px', fontWeight: 500, color: '#f5f1ea', marginBottom: '4px' }}>{item.titulo}</div>
                <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: '11px', fontWeight: 300, color: 'rgba(245,241,234,0.75)', lineHeight: 1.6 }}>{item.detalle}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA + FIRMA */}
      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', background: '#0a0a0a' }}>
        <div style={{ padding: '48px', borderRight: '1px solid rgba(245,241,234,0.06)' }}>
          <div style={{ display: 'inline-block', border: '1px solid rgba(201,169,110,0.3)', padding: '7px 16px', marginBottom: '24px' }}>
            <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: '8px', letterSpacing: '0.4em', color: 'rgba(201,169,110,0.7)', textTransform: 'uppercase' }}>
              {data.cta.titulo}
            </span>
          </div>
          <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '30px', fontWeight: 300, color: '#f5f1ea', lineHeight: 1.1, margin: '0 0 16px 0' }}>
            Analizamos tu propiedad.<br />Te decimos exactamente<br />qué está frenando la venta.
          </h3>
          <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '12px', fontWeight: 300, color: 'rgba(245,241,234,0.82)', lineHeight: 1.8, maxWidth: '320px', margin: '0 0 20px 0' }}>
            {data.cta.descripcion}
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '28px' }}>
            {data.cta.garantias.map((g, i) => (
              <div key={i} style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <span style={{ color: '#c9a96e', fontSize: '9px' }}>✦</span>
                <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: '11px', fontWeight: 300, color: 'rgba(245,241,234,0.82)' }}>{g}</span>
              </div>
            ))}
          </div>
          <div style={{ padding: '20px 24px', border: '1px solid rgba(201,169,110,0.25)', background: 'rgba(201,169,110,0.04)' }}>
            <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: '8px', letterSpacing: '0.3em', color: 'rgba(201,169,110,0.6)', textTransform: 'uppercase', marginBottom: '8px' }}>
              Ecosistema completo · Inversión única
            </div>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: isMobile ? '26px' : '40px', fontWeight: 300, color: '#c9a96e', lineHeight: 1, marginBottom: '6px' }}>
              USD {data.financiero.inversionLarum.toLocaleString()}
            </div>
            <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: '11px', fontWeight: 300, color: 'rgba(245,241,234,0.75)', lineHeight: 1.6 }}>
              Fotografía editorial · Vídeo · 3 reels · Landing exclusiva · Dossier · Narrativa en 3 idiomas.<br />Sin comisión. Sin porcentaje sobre la venta.
            </div>
          </div>
        </div>

        <div style={{ padding: '48px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start', marginBottom: '32px' }}>
            <img src="https://larumstudio.com/wp-content/uploads/2026/06/gpt-image-2_artistic_portrait_photography_of_Use_the_first_image_as_the_person_s_face_and_id-0.jpg"
              alt="Jennifer González"
              style={{ width: '72px', height: '72px', objectFit: 'cover', borderRadius: '50%', border: '1px solid rgba(201,169,110,0.3)', flexShrink: 0 }} />
            <div>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '18px', fontWeight: 300, color: '#f5f1ea', marginBottom: '3px' }}>Jennifer González</div>
              <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: '9px', letterSpacing: '0.2em', color: 'rgba(201,169,110,0.7)', textTransform: 'uppercase', marginBottom: '8px' }}>Fundadora · Larum Studio</div>
              <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '11px', fontWeight: 300, color: 'rgba(245,241,234,0.75)', lineHeight: 1.7, maxWidth: '240px' }}>
                Especialista en reposicionamiento de valor percibido inmobiliario. Ayudo a propietarios y agencias a vender antes y mejor, sin bajar el precio.
              </p>
            </div>
          </div>

          <div style={{ marginBottom: '28px', border: '1px solid rgba(245,241,234,0.08)', overflow: 'hidden' }}>
            <img src="https://larumstudio.com/wp-content/uploads/2026/05/atardecer.webp" alt="Landing"
              style={{ width: '100%', height: '100px', objectFit: 'cover', display: 'block', filter: 'brightness(0.7)' }} />
            <div style={{ padding: '12px 14px', background: '#111' }}>
              <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: '8px', letterSpacing: '0.3em', color: 'rgba(201,169,110,0.6)', textTransform: 'uppercase', marginBottom: '3px' }}>Ejemplo de landing exclusiva</div>
              <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: '11px', color: 'rgba(245,241,234,0.75)' }}>landing.larumstudio.com</div>
            </div>
          </div>

          <div>
            <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: '8px', letterSpacing: '0.3em', color: 'rgba(245,241,234,0.4)', textTransform: 'uppercase', marginBottom: '12px' }}>Encuéntranos en</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '20px' }}>
              {[
                { icon: '🌐', label: 'larumstudio.com', url: 'https://larumstudio.com' },
                { icon: '📸', label: '@larumstudio', url: 'https://www.instagram.com/larumstudio' },
                { icon: '💼', label: 'jennifer-gonzalez-bermudez', url: 'https://www.linkedin.com/in/jennifer-gonzalez-bermudez' },
                { icon: '📘', label: 'larumstudio', url: 'https://www.facebook.com/larumstudio' },
              ].map((r, i) => (
                <a key={i} href={r.url} target="_blank" rel="noopener noreferrer"
                  style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
                  <span style={{ fontSize: '11px' }}>{r.icon}</span>
                  <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: '11px', fontWeight: 300, color: 'rgba(245,241,234,0.75)' }}>{r.label}</span>
                </a>
              ))}
            </div>
            <div style={{ borderTop: '1px solid rgba(245,241,234,0.07)', paddingTop: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
              <div>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '24px', fontStyle: 'italic', fontWeight: 300, color: 'rgba(245,241,234,0.5)', marginBottom: '3px' }}>Larum Studio</div>
                <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: '7px', letterSpacing: '0.3em', color: 'rgba(245,241,234,0.25)', textTransform: 'uppercase' }}>Ingeniería de percepción · Real estate premium</div>
              </div>
              <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: '7px', letterSpacing: '0.25em', color: 'rgba(245,241,234,0.2)', textTransform: 'uppercase' }}>LARUMSTUDIO.COM</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
